import type { Metadata } from 'next';
import ExperiencePageClient from './ExperiencePageClient';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience for Nick Huguenard, a principal-level software engineer specializing in system architecture, enterprise software, performance optimization, debugging, C#, .NET, SQL, React, and TypeScript.',
};

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}