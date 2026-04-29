import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import FloatingDockNav from '@/components/floatingMenu';
import { geist, inter } from './fonts';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Huguenard | Principal Software Engineer',
    description:
      'Systems Architect focused on scalable software, performance, debugging, and full-stack engineering.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} ${geist.variable} ${inter.variable}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />


            {children}
            <FloatingDockNav

            />

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
