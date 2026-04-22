import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Name is too long.'),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(200, 'Email is too long.'),

  company: z
    .string()
    .trim()
    .max(100, 'Company name is too long.')
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .trim()
    .min(20, 'Please include a little more detail.')
    .max(5000, 'Message is too long.'),

  website: z
    .string()
    .max(0, 'Invalid submission.')
    .optional()
    .or(z.literal('')),

  turnstileToken: z
    .string()
    .min(1, 'Please complete the verification step.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;