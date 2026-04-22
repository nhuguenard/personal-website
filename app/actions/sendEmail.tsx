'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const company = formData.get('company')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  try {
    await resend.emails.send({
      from: 'Website Contact <info@nickhuguenard.com>',
      to: ['huguenardnr@gmail.com'],
      subject: `Website Inquiry from ${name}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <br/>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email' };
  }
}