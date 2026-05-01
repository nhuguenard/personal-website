import * as React from 'react';
import type { Metadata } from 'next';
import { Geist, Inter } from 'next/font/google';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import ThemeRegistry from '@/components/ThemeRegistry';
import SiteShell from '@/components/SiteShell';
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nickhuguenard.com'),
  title: {
    default: 'Nick Huguenard | Principal Software Engineer',
    template: '%s | Nick Huguenard',
  },
  description:
    'Principal Software Engineer and Systems Architect with 10+ years of experience in C#, .NET, SQL, React, TypeScript, performance optimization, debugging, and enterprise software architecture.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nick Huguenard | Principal Software Engineer',
    description:
      'Principal Software Engineer specializing in scalable systems, architecture, debugging, and performance optimization.',
    url: 'https://nickhuguenard.com',
    siteName: 'Nick Huguenard',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Nick Huguenard | Principal Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Huguenard | Principal Software Engineer',
    description:
      'Systems Architect focused on scalable software, performance, debugging, and full-stack engineering.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Analytics/>
        <InitColorSchemeScript attribute="data" defaultMode="dark" />

        <ThemeRegistry>
          <SiteShell>{children}</SiteShell>
        </ThemeRegistry>
      </body>
    </html>
  );
}