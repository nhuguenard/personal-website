import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Nick Huguenard, a principal-level software engineer specializing in system architecture, performance optimization, debugging, and enterprise software.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return <AboutPageClient />;
}