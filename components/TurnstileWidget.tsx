'use client';

import * as React from 'react';
import Script from 'next/script';
import { Box } from '@mui/material';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type Props = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  theme?: 'light' | 'dark' | 'auto';
};

export default function TurnstileWidget({
  onVerify,
  onExpire,
  theme = 'auto',
}: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const widgetIdRef = React.useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = React.useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) {
      return;
    }

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      'expired-callback': onExpire,
      'error-callback': onExpire,
      theme,
    });
  }, [onExpire, onVerify, siteKey, theme]);

  React.useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [renderWidget]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <Box ref={containerRef} />
    </>
  );
}