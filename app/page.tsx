import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import JsonLd from '@/components/JsonLd';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nick Huguenard',
  url: 'https://nickhuguenard.com',
  jobTitle: 'Principal Software Engineer',
  description:
    'Principal Software Engineer and Systems Architect specializing in C#, .NET, SQL, React, TypeScript, enterprise software architecture, performance optimization, and debugging.',
  knowsAbout: [
    'C#',
    '.NET',
    'SQL',
    'React',
    'TypeScript',
    'System Architecture',
    'Performance Optimization',
    'Enterprise Software',
    'Debugging',
    'CI/CD',
  ],
  sameAs: [
    'https://www.linkedin.com/in/nickhuguenard',
    'https://github.com/nhuguenard',
  ],
};

export const metadata: Metadata = {
  title: 'Principal Software Engineer',
  description:
    'Nick Huguenard is a principal-level software engineer specializing in system architecture, debugging, performance optimization, and full-stack enterprise software.',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <HomePageClient />
    </>
  );
}