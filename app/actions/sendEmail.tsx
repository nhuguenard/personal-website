'use server';

import { Resend } from 'resend';
import { contactSchema } from '@/lib/contact-schema';

const resend = new Resend(process.env.RESEND_API_KEY);

type ActionState = {
  success: boolean;
  message?: string;
  fieldErrors?: Partial<Record<'name' | 'email' | 'company' | 'message', string[]>>;
};

async function verifyTurnstileToken(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error('Missing TURNSTILE_SECRET_KEY');
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    return { success: false, errorCodes: ['verification-request-failed'] as string[] };
  }

  const result = (await response.json()) as {
    success: boolean;
    'error-codes'?: string[];
  };

  return {
    success: result.success,
    errorCodes: result['error-codes'] ?? [],
  };
}

export async function sendContactEmail(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
    website: formData.get('website'),
    turnstileToken: formData.get('turnstileToken'),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const flattened = parsed.error.flatten();

    return {
      success: false,
      message: 'Please fix the highlighted fields.',
      fieldErrors: {
        name: flattened.fieldErrors.name,
        email: flattened.fieldErrors.email,
        company: flattened.fieldErrors.company,
        message: flattened.fieldErrors.message,
      },
    };
  }

  const data = parsed.data;

  // Honeypot: real users never fill this
  if (data.website) {
    return {
      success: true,
      message: 'Message sent successfully.',
    };
  }

  const turnstile = await verifyTurnstileToken(data.turnstileToken);

  if (!turnstile.success) {
    return {
      success: false,
      message: 'Verification failed. Please try again.',
    };
  }

  try {
    await resend.emails.send({
      from: 'Website Contact <info@nickhuguenard.com>',
      to: ['huguenardnr@gmail.com'],
      replyTo: data.email,
      subject: `Website inquiry from ${data.name}`,
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || 'N/A')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\\n/g, '<br />')}</p>
      `,
    });

    return {
      success: true,
      message: 'Message sent successfully. Thanks for reaching out.',
    };
  } catch (error) {
    console.error('sendContactEmail error', error);

    return {
      success: false,
      message: 'Something went wrong while sending your message.',
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\"', '&quot;')
    .replaceAll("\'", '&#039;');
}