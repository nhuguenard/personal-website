'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  alpha,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FloatingDockNav from '@/components/floatingMenu';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        backgroundImage:
          theme.palette.mode === 'dark'
            ? `
              radial-gradient(circle at top left, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 28%),
              radial-gradient(circle at top right, ${alpha(theme.palette.secondary.main, 0.14)} 0%, transparent 30%),
              radial-gradient(circle at bottom center, ${alpha(theme.palette.info.main, 0.10)} 0%, transparent 26%)
            `
            : `
              radial-gradient(circle at top left, ${alpha(theme.palette.primary.main, 0.10)} 0%, transparent 28%),
              radial-gradient(circle at top right, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 30%),
              radial-gradient(circle at bottom center, ${alpha(theme.palette.info.main, 0.08)} 0%, transparent 26%)
            `,
        backgroundAttachment: 'fixed',
      })}
    >
      <SkipLink />

      <Box component="main" id="main-content" sx={{ flex: 1, pb: { xs: 10, md: 12 } }}>
        {children}
      </Box>

      <SiteFooter />

      <FloatingDockNav activePath={pathname} />
    </Box>
  );
}

function SkipLink() {
  return (
    <Box
      component="a"
      href="#main-content"
      sx={{
        position: 'fixed',
        top: 12,
        left: 12,
        zIndex: 9999,
        px: 2,
        py: 1,
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'text.primary',
        transform: 'translateY(-150%)',
        transition: 'transform 150ms ease',
        textDecoration: 'none',
        border: '1px solid',
        borderColor: 'divider',
        '&:focus': {
          transform: 'translateY(0)',
        },
      }}
    >
      Skip to content
    </Box>
  );
}

function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.paper, 0.36)
            : alpha('#FFFFFF', 0.72),
        backdropFilter: 'blur(12px)',
        pb: { xs: 11, md: 12 },
        pt: { xs: 5, md: 6 },
      })}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ justifyContent: 'space-between', alignItems: {xs: 'flex-start', md: 'center' }}}
            spacing={3}
          >
            <Box>
              <Typography
                component={Link}
                href="/"
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-geist), Geist, var(--font-inter), sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'info.main' },
                }}
              >
                Nick Huguenard
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                Principal Software Engineer • Systems Architect
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <SocialButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/nickhuguenard"
                icon={<LinkedInIcon fontSize="small" />}
              />
              <SocialButton
                label="GitHub"
                href="https://github.com/nickhuguenard"
                icon={<GitHubIcon fontSize="small" />}
              />
              <SocialButton
                label="Email"
                href="mailto:huguenardnr@gmail.com"
                icon={<EmailRoundedIcon fontSize="small" />}
              />
            </Stack>
          </Stack>

          <Divider />

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ justifyContent: 'space-between', alignItems: {xs: 'flex-start', md: 'center' }}}
            spacing={2.5}
          >
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: { xs: 1.5, md: 2.5 } }} >
              {footerLinks.map((item) => (
                <Typography
                  key={item.href}
                  component={Link}
                  href={item.href}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'info.main' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>

            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Nick Huguenard. Built with Next.js and Material UI.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

type SocialButtonProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function SocialButton({ label, href, icon }: SocialButtonProps) {
  return (
    <Tooltip title={label} arrow>
      <IconButton
        component={Link}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        aria-label={label}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.divider}`,
          color: 'text.secondary',
          bgcolor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.36)
              : alpha('#FFFFFF', 0.72),
          '&:hover': {
            color: 'info.main',
            borderColor: alpha(theme.palette.info.main, 0.45),
            bgcolor: alpha(theme.palette.info.main, 0.08),
          },
        })}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
