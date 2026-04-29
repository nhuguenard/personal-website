'use client';

import * as React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { useActionState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { sendContactEmail } from '@/app/actions/sendEmail';
import TurnstileWidget from '@/components/TurnstileWidget';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Nick Huguenard for staff, principal, architecture-focused software engineering opportunities, consulting, and technical leadership roles.',
  alternates: {
    canonical: '/contact',
  },
};

const initialState = {
  success: false,
  message: '',
  fieldErrors: {},
};

export default function Contact() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          <Chip
            label="Contact"
            color="secondary"
            sx={{ alignSelf: 'flex-start' }}
          />

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: 780 }}
          >
            Let’s connect.
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 760, fontWeight: 400, lineHeight: 1.5 }}
          >
            I’m open to staff, principal, and architecture-focused opportunities,
            especially roles involving complex systems, technical leadership, and
            performance-minded product engineering.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Card>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={2.5}>
                    <Typography variant="overline" color="info.main">
                      Direct contact
                    </Typography>

                    <ContactRow
                      icon={<EmailRoundedIcon fontSize="small" />}
                      label="Email"
                      value="huguenardnr@gmail.com"
                      href="mailto:huguenardnr@gmail.com"
                    />

                    <ContactRow
                      icon={<LinkedInIcon fontSize="small" />}
                      label="LinkedIn"
                      value="linkedin.com/in/nickhuguenard"
                      href="https://www.linkedin.com/in/nickhuguenard"
                    />

                    <ContactRow
                      icon={<GitHubIcon fontSize="small" />}
                      label="GitHub"
                      value="github.com/nickhuguenard"
                      href="https://github.com/nickhuguenard"
                    />

                    <ContactRow
                      icon={<DescriptionRoundedIcon fontSize="small" />}
                      label="Resume"
                      value="View resume"
                      href="/resume"
                    />
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="overline" color="info.main">
                      Best fit
                    </Typography>
                    <Typography variant="h5">
                      What I’m most interested in
                    </Typography>
                    <Typography color="text.secondary">
                      Staff and principal-level opportunities where I can contribute
                      through architecture, full-stack engineering, system design,
                      debugging, and practical AI-aware product thinking.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <ContactForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

type ContactRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
};

function ContactRow({ icon, label, value, href }: ContactRowProps) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }} >
      <Box
        sx={(theme) => ({
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'info.main',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(34, 211, 238, 0.10)'
              : 'rgba(34, 211, 238, 0.12)',
          border: `1px solid ${theme.palette.divider}`,
        })}
      >
        {icon}
      </Box>

      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
          {label}
        </Typography>
        <Typography
          component={Link}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': { color: 'info.main' },
          }}
        >
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

function ContactForm() {
  const [turnstileToken, setTurnstileToken] = React.useState('');
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);
  const handleTurnstileExpire = React.useCallback(() => {
    setTurnstileToken('');
  }, []);
  return (
    <Stack component="form" action={formAction} spacing={2.5} sx={{ position: 'relative' }}>
      <Stack spacing={1}>
        <Typography variant="overline" color="info.main">
          Send a message
        </Typography>
        <Typography variant="h4">Start the conversation</Typography>
        <Typography color="text.secondary">
          Reach out about staff, principal, architecture, or consulting opportunities.
        </Typography>
      </Stack>

      {state.message ? (
        <Alert severity={state.success ? 'success' : 'error'}>
          {state.message}
        </Alert>
      ) : null}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            name="name"
            label="Name"
            error={Boolean((state.fieldErrors)?.name?.length)}
            helperText={(state.fieldErrors)?.name?.[0]}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            name="email"
            type="email"
            label="Email"
            error={Boolean((state.fieldErrors)?.email?.length)}
            helperText={(state.fieldErrors)?.email?.[0]}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            name="company"
            label="Company"
            error={Boolean((state.fieldErrors)?.company?.length)}
            helperText={(state.fieldErrors)?.company?.[0]}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            required
            name="message"
            label="Message"
            multiline
            minRows={6}
            error={Boolean((state.fieldErrors)?.message?.length)}
            helperText={(state.fieldErrors)?.message?.[0]}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <TextField
          tabIndex={-1}
          autoComplete="off"
          name="website"
          label="Website"
        />
      </Box>

      <input type="hidden" name="turnstileToken" value={turnstileToken} />

      <TurnstileWidget
        onVerify={setTurnstileToken}
        onExpire={handleTurnstileExpire}
        theme="auto"
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendRoundedIcon />}
          disabled={pending || !turnstileToken}
        >
          {pending ? 'Sending...' : 'Send Message'}
        </Button>
        <Button component={Link} href="mailto:huguenardnr@gmail.com" variant="outlined" color="primary">
          Email Directly
        </Button>
      </Stack>
    </Stack>
  );
}
