
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nick Huguenard for staff, principal, architecture-focused software engineering opportunities, consulting, and technical leadership roles.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return <ContactPageClient />;
}
