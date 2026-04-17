'use client';
import { createTheme, alpha } from '@mui/material/styles';

const brand = {
  bgPrimary: '#0F172A',
  bgSecondary: '#020617',
  surface: '#111827',
  surfaceAlt: '#0B1220',

  textPrimary: '#E2E8F0',
  textSecondary: '#94A3B8',

  primary: '#6366F1',   // Indigo
  accent: '#A855F7',    // Purple
  highlight: '#22D3EE', // Cyan

  border: '#1E293B',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: brand.primary,
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: brand.accent,
      light: '#C084FC',
      dark: '#9333EA',
      contrastText: '#FFFFFF',
    },
    info: {
      main: brand.highlight,
      light: '#67E8F9',
      dark: '#06B6D4',
      contrastText: '#06202A',
    },
    background: {
      default: brand.bgPrimary,
      paper: brand.surface,
    },
    text: {
      primary: brand.textPrimary,
      secondary: brand.textSecondary,
    },
    divider: brand.border,
    success: {
      main: '#22C55E',
    },
    warning: {
      main: '#F59E0B',
    },
    error: {
      main: '#EF4444',
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
    subtitle1: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
    },
    body1: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },

  shape: {
    borderRadius: 16,
  },

  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.18)',
    '0 2px 8px rgba(0,0,0,0.22)',
    '0 6px 18px rgba(0,0,0,0.24)',
    '0 10px 30px rgba(0,0,0,0.28)',
    '0 14px 38px rgba(0,0,0,0.30)',
    '0 18px 46px rgba(0,0,0,0.32)',
    '0 22px 54px rgba(0,0,0,0.34)',
    '0 26px 62px rgba(0,0,0,0.36)',
    '0 30px 70px rgba(0,0,0,0.38)',
    '0 34px 78px rgba(0,0,0,0.40)',
    '0 38px 86px rgba(0,0,0,0.42)',
    '0 42px 94px rgba(0,0,0,0.44)',
    '0 46px 102px rgba(0,0,0,0.46)',
    '0 50px 110px rgba(0,0,0,0.48)',
    '0 54px 118px rgba(0,0,0,0.50)',
    '0 58px 126px rgba(0,0,0,0.52)',
    '0 62px 134px rgba(0,0,0,0.54)',
    '0 66px 142px rgba(0,0,0,0.56)',
    '0 70px 150px rgba(0,0,0,0.58)',
    '0 74px 158px rgba(0,0,0,0.60)',
    '0 78px 166px rgba(0,0,0,0.62)',
    '0 82px 174px rgba(0,0,0,0.64)',
    '0 86px 182px rgba(0,0,0,0.66)',
    '0 90px 190px rgba(0,0,0,0.68)',
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.bgPrimary,
          backgroundImage: `
            radial-gradient(circle at top left, ${alpha(brand.primary, 0.16)} 0%, transparent 30%),
            radial-gradient(circle at top right, ${alpha(brand.accent, 0.12)} 0%, transparent 28%),
            radial-gradient(circle at bottom center, ${alpha(brand.highlight, 0.10)} 0%, transparent 26%)
          `,
          backgroundAttachment: 'fixed',
        },
        '::selection': {
          backgroundColor: alpha(brand.accent, 0.35),
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: alpha(brand.surface, 0.88),
          border: `1px solid ${alpha(brand.border, 0.9)}`,
          backdropFilter: 'blur(10px)',
        },
        rounded: {
          borderRadius: 20,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(brand.surface, 0.82),
          border: `1px solid ${alpha(brand.border, 0.95)}`,
          backdropFilter: 'blur(12px)',
          transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: alpha(brand.accent, 0.45),
            boxShadow: `0 12px 40px ${alpha(brand.accent, 0.12)}`,
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(brand.bgSecondary, 0.72),
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${alpha(brand.border, 0.9)}`,
          boxShadow: 'none',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 18,
          paddingBlock: 10,
        },
        outlined: {
          borderColor: alpha(brand.primary, 0.45),
          color: brand.textPrimary,
          '&:hover': {
            borderColor: brand.primary,
            backgroundColor: alpha(brand.primary, 0.08),
          },
        },
        text: {
          '&:hover': {
            backgroundColor: alpha(brand.primary, 0.08),
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          border: `1px solid ${alpha(brand.border, 0.9)}`,
          backgroundColor: alpha(brand.surfaceAlt, 0.85),
        },
        colorPrimary: {
          backgroundColor: alpha(brand.primary, 0.16),
          color: '#C7D2FE',
        },
        colorSecondary: {
          backgroundColor: alpha(brand.accent, 0.16),
          color: '#E9D5FF',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: alpha(brand.surfaceAlt, 0.55),
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(brand.border, 0.95),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(brand.primary, 0.55),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: brand.accent,
            borderWidth: 1,
          },
        },
        input: {
          padding: '14px 16px',
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: brand.highlight,
          textDecorationColor: alpha(brand.highlight, 0.35),
          '&:hover': {
            color: '#67E8F9',
            textDecorationColor: alpha('#67E8F9', 0.55),
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha(brand.border, 0.9),
        },
      },
    },
  },
});

export default theme;