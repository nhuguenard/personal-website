'use client';

import * as React from 'react';
import Link from 'next/link';
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
import { sendEmail } from '@/app/actions/sendEmail';

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
                      through architecture, full-stack engineering, system design, and
                      debugging.
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
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = React.useState(false);
  const handleChange =
    (field: keyof typeof values) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((prev) => ({ ...prev, [field]: event.target.value }));
      };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <Typography variant="overline" color="info.main">
          Send a message
        </Typography>
        <Typography variant="h4">Start the conversation</Typography>
        <Typography color="text.secondary">
          The form below opens your email client with the message pre-filled. If you’d rather email directly, use the contact details on the left.
        </Typography>
      </Stack>

      {status === 'success' && (
        <Alert severity="success">
          Message sent successfully — I’ll get back to you soon.
        </Alert>
      )}

      {status === 'error' && (
        <Alert severity="error">
          Something went wrong. Please try again or email me directly.
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="name"
            name="name"
            value={values.name}
            onChange={handleChange('name')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="company"
            name="company"
            value={values.company}
            onChange={handleChange('company')}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            required
            label="message"
            name="message"
            multiline
            minRows={6}
            value={values.message}
            onChange={handleChange('message')}
          />
        </Grid>
      </Grid>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          endIcon={<SendRoundedIcon />}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </Stack>
    </Stack>
  );
}
