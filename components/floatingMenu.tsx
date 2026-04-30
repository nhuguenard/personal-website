'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  alpha,
  useTheme,
} from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useColorScheme } from '@mui/material/styles';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';

export type FloatingDockItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type FloatingDockNavProps = {
  activePath: string;
  items?: FloatingDockItem[];
};

const defaultItems: FloatingDockItem[] = [
  { label: 'Home', href: '/', icon: <HomeRoundedIcon fontSize="small" /> },
  { label: 'About', href: '/about', icon: <PersonRoundedIcon fontSize="small" /> },
  { label: 'Experience', href: '/experience', icon: <WorkRoundedIcon fontSize="small" /> },
  { label: 'Projects', href: '/projects', icon: <WorkspacesRoundedIcon fontSize="small" /> },
  { label: 'Resume', href: '/resume', icon: <DescriptionRoundedIcon fontSize="small" /> },
  { label: 'Contact', href: '/contact', icon: <MailRoundedIcon fontSize="small" /> },
];

export default function FloatingDockNav({ items = defaultItems }: FloatingDockNavProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });
  const hideOnScroll = useScrollTrigger({
    disableHysteresis: false,
    threshold: 96,
  });

  return (
    <Box
      component="nav"
      aria-label="Primary navigation"
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: { xs: 14, sm: 22 },
        transform: `translateX(-50%) translateY(${hideOnScroll && isMobile ? '88px' : '0px'})`,
        zIndex: theme.zIndex.appBar + 20,
        transition: 'transform 240ms cubic-bezier(.2,.8,.2,1), opacity 240ms ease',
        opacity: hideOnScroll && isMobile ? 0 : 1,
        px: 2,
        width: '100%',
        maxWidth: 'fit-content',
        pointerEvents: 'none',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          pointerEvents: 'auto',
          position: 'relative',
          borderRadius: 999,
          px: { xs: 0.75, sm: 1 },
          py: { xs: 0.65, sm: 0.85 },
          overflow: 'hidden',
          backdropFilter: 'blur(18px) saturate(1.25)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.25)',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.68)
              : alpha('#FFFFFF', 0.78),
          border: `1px solid ${theme.palette.mode === 'dark'
            ? alpha(theme.palette.info.main, 0.14)
            : alpha(theme.palette.primary.main, 0.13)
            }`,
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 18px 60px ${alpha('#000000', 0.38)}, 0 0 0 1px ${alpha('#FFFFFF', 0.035)} inset`
              : `0 18px 45px ${alpha('#0F172A', 0.13)}, 0 0 0 1px ${alpha('#FFFFFF', 0.8)} inset`,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              theme.palette.mode === 'dark'
                ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.14)}, transparent 42%, ${alpha(theme.palette.secondary.main, 0.10)})`
                : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent 45%, ${alpha(theme.palette.secondary.main, 0.06)})`,
          },
        }}
      >
        <Stack direction="row" spacing={{ xs: 0.15, sm: 0.35 }} sx={{ position: 'relative', alignItems: 'center' }}>
          {items.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <DockButton
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                active={active}
              />
            );
          })}

          <Box
            sx={{
              mx: { xs: 0.25, sm: 0.5 },
              width: '1px',
              height: 26,
              bgcolor: 'divider',
              opacity: 0.8,
            }}
          />

          <ColorModeDockButton />
        </Stack>
      </Paper>
    </Box>
  );
}

type DockButtonProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
};

function DockButton({ label, href, icon, active = false }: DockButtonProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'), {
    noSsr: true,
  });

  return (
    <Tooltip title={isSmall ? label : ''} arrow>
      <IconButton
        component={Link}
        href={href}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        size="small"
        sx={{
          position: 'relative',
          height: { xs: 42, sm: 46 },
          width: { xs: 42, sm: active ? 112 : 46 },
          px: active && !isSmall ? 1.6 : 0,
          borderRadius: 999,
          gap: 0.85,
          justifyContent: 'center',
          overflow: 'hidden',
          color: active ? theme.palette.primary.contrastText : theme.palette.text.secondary,
          background: active
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
            : 'transparent',
          boxShadow: active
            ? theme.palette.mode === 'dark'
              ? `0 10px 28px ${alpha(theme.palette.secondary.main, 0.30)}`
              : `0 10px 24px ${alpha(theme.palette.primary.main, 0.20)}`
            : 'none',
          transition:
            'width 220ms cubic-bezier(.2,.8,.2,1), transform 180ms ease, background-color 180ms ease, color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
            backgroundColor: active
              ? undefined
              : alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.12 : 0.08),
            boxShadow: active
              ? theme.palette.mode === 'dark'
                ? `0 12px 34px ${alpha(theme.palette.secondary.main, 0.36)}`
                : `0 12px 30px ${alpha(theme.palette.primary.main, 0.24)}`
              : `0 8px 22px ${alpha(theme.palette.primary.main, 0.11)}`,
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.info.main}`,
            outlineOffset: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</Box>

        {!isSmall ? (
          <Typography
            component="span"
            variant="caption"
            sx={{
              maxWidth: active ? 72 : 0,
              opacity: active ? 1 : 0,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontWeight: 700,
              lineHeight: 1,
              transition: 'max-width 220ms cubic-bezier(.2,.8,.2,1), opacity 160ms ease',
            }}
          >
            {label}
          </Typography>
        ) : null}
      </IconButton>
    </Tooltip>
  );
}

function ColorModeDockButton() {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const isDark = mode === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Tooltip title={label} arrow>
      <IconButton
        onClick={() => setMode(isDark ? 'light' : 'dark')}
        aria-label={label}
        size="small"
        sx={{
          width: { xs: 42, sm: 46 },
          height: { xs: 42, sm: 46 },
          borderRadius: '50%',
          color: theme.palette.text.secondary,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.default, 0.38)
              : alpha('#FFFFFF', 0.58),
          border: `1px solid ${alpha(theme.palette.divider, 0.75)}`,
          transition: 'transform 180ms ease, background-color 180ms ease, color 180ms ease, border-color 180ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            color: theme.palette.text.primary,
            backgroundColor: alpha(theme.palette.info.main, theme.palette.mode === 'dark' ? 0.12 : 0.10),
            borderColor: alpha(theme.palette.info.main, 0.38),
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.info.main}`,
            outlineOffset: 3,
          },
        }}
      >
        {isDark ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
