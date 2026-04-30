'use client';

import * as React from 'react';
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '@/theme/theme';

type Props = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider
        theme={theme}
        defaultMode="dark"
        disableTransitionOnChange
      >
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}