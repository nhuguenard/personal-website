'use client';

import { createTheme } from '@mui/material/styles';

const shared = {
  primary: '#6366F1',
  primaryLight: '#818CF8',
  primaryDark: '#4F46E5',

  secondary: '#A855F7',
  secondaryLight: '#C084FC',
  secondaryDark: '#9333EA',

  info: '#22D3EE',
  infoLight: '#67E8F9',
  infoDark: '#06B6D4',
};

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: shared.primary,
          light: shared.primaryLight,
          dark: shared.primaryDark,
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: shared.secondary,
          light: shared.secondaryLight,
          dark: shared.secondaryDark,
          contrastText: '#FFFFFF',
        },
        info: {
          main: shared.info,
          light: shared.infoLight,
          dark: shared.infoDark,
          contrastText: '#06202A',
        },
        background: {
          default: '#F8FAFC',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
        },
        divider: '#E2E8F0',
      },
    },
    dark: {
      palette: {
        primary: {
          main: shared.primary,
          light: shared.primaryLight,
          dark: shared.primaryDark,
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: shared.secondary,
          light: shared.secondaryLight,
          dark: shared.secondaryDark,
          contrastText: '#FFFFFF',
        },
        info: {
          main: shared.info,
          light: shared.infoLight,
          dark: shared.infoDark,
          contrastText: '#06202A',
        },
        background: {
          default: '#0F172A',
          paper: '#111827',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
        },
        divider: '#1E293B',
      },
    },
  },

  typography: {
    fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          transition:
            'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
        },
      },
    },
  },
});

export default theme;