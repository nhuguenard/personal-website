'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  alpha,
  useTheme,
} from '@mui/material/styles';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

export type FloatingDockItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type FloatingDockNavProps = {
  items?: FloatingDockItem[];
  activePath?: string;
  onToggleColorMode?: () => void;
};

const defaultItems: FloatingDockItem[] = [
  { label: 'Home', href: '/', icon: <HomeRoundedIcon fontSize="small" /> },
  { label: 'About', href: '/about', icon: <PersonRoundedIcon fontSize="small" /> },
  { label: 'Experience', href: '/experience', icon: <WorkRoundedIcon fontSize="small" /> },
  { label: 'Resume', href: '/resume', icon: <DescriptionRoundedIcon fontSize="small" /> },
  { label: 'Contact', href: '/contact', icon: <MailRoundedIcon fontSize="small" /> },
];

export default function FloatingDockNav({
  items = defaultItems,
  activePath,
  onToggleColorMode,
}: FloatingDockNavProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const hideOnScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: { xs: 16, sm: 22 },
        transform: `translateX(-50%) translateY(${hideOnScroll && isMobile ? '88px' : '0px'})`,
        zIndex: theme.zIndex.appBar + 20,
        transition: 'transform 220ms ease, opacity 220ms ease',
        opacity: hideOnScroll && isMobile ? 0.92 : 1,
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
          borderRadius: 999,
          px: { xs: 1, sm: 1.25 },
          py: { xs: 0.75, sm: 1 },
          backdropFilter: 'blur(16px)',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.72)
              : alpha('#FFFFFF', 0.78),
          border: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 16px 50px ${alpha('#000000', 0.34)}`
              : `0 16px 40px ${alpha('#0F172A', 0.12)}`,
        }}
      >
        <Stack direction="row" spacing={{ xs: 0.25, sm: 0.5 }} sx={{ alignItems: 'center'}}>
          {items.map((item) => {
            const active =
              item.href === '/'
                ? activePath === '/'
                : activePath?.startsWith(item.href);

            return (
              <DockButton
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                active={Boolean(active)}
              />
            );
          })}

          {onToggleColorMode ? (
            <Tooltip title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'} arrow>
              <IconButton
                onClick={onToggleColorMode}
                size="small"
                sx={{
                  ml: { xs: 0.25, sm: 0.5 },
                  width: { xs: 42, sm: 46 },
                  height: { xs: 42, sm: 46 },
                  borderRadius: '50%',
                  border: `1px solid ${alpha(theme.palette.divider, 0.75)}`,
                  color: theme.palette.text.secondary,
                  backgroundColor: alpha(theme.palette.background.default, 0.32),
                  '&:hover': {
                    color: theme.palette.text.primary,
                    backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    borderColor: alpha(theme.palette.primary.main, 0.34),
                  },
                }}
              >
                {theme.palette.mode === 'dark' ? (
                  <LightModeRoundedIcon fontSize="small" />
                ) : (
                  <DarkModeRoundedIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          ) : null}
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

  return (
    <Tooltip title={label} arrow>
      <IconButton
        component={Link}
        href={href}
        aria-label={label}
        size="small"
        sx={{
          position: 'relative',
          width: { xs: 42, sm: 48 },
          height: { xs: 42, sm: 48 },
          borderRadius: '50%',
          color: active ? theme.palette.primary.contrastText : theme.palette.text.secondary,
          background: active
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
            : 'transparent',
          transition:
            'transform 180ms ease, background-color 180ms ease, color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.04)',
            color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
            backgroundColor: active
              ? undefined
              : alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.12 : 0.08),
            boxShadow: active
              ? `0 10px 28px ${alpha(theme.palette.secondary.main, 0.28)}`
              : `0 8px 20px ${alpha(theme.palette.primary.main, 0.12)}`,
          },
          '&::after': active
            ? {
                content: '""',
                position: 'absolute',
                bottom: 4,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: theme.palette.primary.contrastText,
                opacity: 0.95,
              }
            : undefined,
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

