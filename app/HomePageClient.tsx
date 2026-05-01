'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DownloadIcon from '@mui/icons-material/Download';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const skills = ['C#', '.NET', 'SQL', 'React', 'TypeScript', 'Architecture', 'Performance'];

const strengths = [
  {
    title: 'Systems Architecture',
    body: 'Designing scalable, maintainable systems across backend services, integrations, and data-heavy business platforms.',
    icon: <HubOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Debugging & Root Cause Analysis',
    body: 'Digging into complex systems, isolating bottlenecks, and solving issues that impact reliability and speed.',
    icon: <TroubleshootOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Performance Optimization',
    body: 'Improving application responsiveness, query efficiency, and operational stability in production environments.',
    icon: <SpeedOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Cross-Team Leadership',
    body: 'Working across engineering, product, and stakeholder groups to turn ambiguity into clear technical direction.',
    icon: <GroupsOutlinedIcon fontSize="small" />,
  },
];

const experience = [
  {
    years: '2023 — Present',
    role: 'Principal Software Consultant',
    company: 'Configit',
    body: 'Lead implementation work, architecture decisions, integration design, and technical problem-solving across enterprise customer solutions.',
  },
  {
    years: '2019 — 2023',
    role: 'Senior Software Consultant',
    company: 'Configit',
    body: 'Built full-stack SaaS solutions, owned delivery-critical components, supported CI/CD improvements, and helped solve production issues.',
  },
  {
    years: 'Earlier',
    role: 'Software Engineer',
    company: 'Enterprise Software',
    body: 'Developed enterprise applications, improved maintainability, and built a strong foundation in backend logic, frontend systems, and SQL.',
  },
];

export default function HomePageClient() {
  return (
    <Box>
      <HeroSection />
      <StrengthsSection />
      <AboutPreviewSection />
      <ExperienceSection />
      <CallToActionSection />
    </Box>
  );
}

function HeroSection() {
  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            theme.palette.mode === 'dark'
              ? `radial-gradient(circle at 12% 18%, ${alpha(theme.palette.primary.main, 0.28)} 0%, transparent 32%), radial-gradient(circle at 86% 18%, ${alpha(theme.palette.secondary.main, 0.20)} 0%, transparent 30%), radial-gradient(circle at 62% 88%, ${alpha(theme.palette.info.main, 0.12)} 0%, transparent 34%)`
              : `radial-gradient(circle at 12% 18%, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 34%), radial-gradient(circle at 86% 18%, ${alpha(theme.palette.secondary.main, 0.10)} 0%, transparent 32%), radial-gradient(circle at 62% 88%, ${alpha(theme.palette.info.main, 0.10)} 0%, transparent 34%)`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: theme.palette.mode === 'dark' ? 0.14 : 0.18,
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.22) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 78%)',
        },
      })}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          component="h1"
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
          }}
        >
          Nick Huguenard - Principal Software Engineer
        </Typography>
        <Grid container spacing={6} sx={{ alignItems: 'center' }} >
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Chip
                label="Principal Software Engineer • Systems Architect • Expert Debugger"
                color="secondary"
                sx={(theme) => ({
                  alignSelf: 'flex-start',
                  fontWeight: 600,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.28)}`,
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.secondary.main, 0.14)
                      : alpha(theme.palette.secondary.main, 0.09),
                })}
              />

              <Stack spacing={1.25}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.75rem', md: '4.85rem' },
                    maxWidth: 820,
                  }}
                >
                  I design and improve{' '}
                  <Box
                    component="span"
                    sx={{
                      background:
                        'linear-gradient(135deg, #6366F1 0%, #A855F7 52%, #22D3EE 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    complex software systems
                  </Box>{' '}
                  through architecture, debugging, and performance.
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ maxWidth: 740, fontWeight: 400, lineHeight: 1.55 }}
                >
                  I’m Nick Huguenard, a principal-level software engineer who helps teams make enterprise software more reliable, maintainable, and scalable.
                </Typography>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  href="/resume"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<DownloadIcon />}
                >
                  View Resume
                </Button>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  color="primary"
                  size="large"
                  endIcon={<ArrowOutwardIcon />}
                >
                  About Me
                </Button>
              </Stack>

              <Stack direction="row" sx={{ pt: 1, flexWrap: 'wrap', gap: 1.25 }}>
                {skills.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    sx={(theme) => ({
                      color: 'text.primary',
                      borderColor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.info.main, 0.22)
                          : alpha(theme.palette.primary.main, 0.22),
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.background.paper, 0.42)
                          : alpha('#FFFFFF', 0.68),
                    })}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <HeroFocusCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function HeroFocusCard() {
  return (
    <Card
      sx={(theme) => ({
        minHeight: 360,
        position: 'relative',
        overflow: 'hidden',
        border:
          theme.palette.mode === 'dark'
            ? `1px solid ${alpha(theme.palette.info.main, 0.14)}`
            : `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 24px 80px ${alpha('#000000', 0.30)}`
            : `0 24px 70px ${alpha('#0F172A', 0.10)}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.14)}, transparent 42%), radial-gradient(circle at top right, ${alpha(theme.palette.secondary.main, 0.18)}, transparent 38%)`
              : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)}, transparent 45%), radial-gradient(circle at top right, ${alpha(theme.palette.secondary.main, 0.10)}, transparent 38%)`,
          pointerEvents: 'none',
        },
      })}
    >
      <CardContent sx={{ p: 4, position: 'relative' }}>
        <Stack spacing={3}>
          <Typography variant="overline" color="info.main">
            Current Focus
          </Typography>
          <Typography variant="h4">
            Systems that are reliable, fast, and built to evolve.
          </Typography>
          <Typography color="text.secondary">
            I specialize in understanding large existing systems, identifying bottlenecks, and designing improvements that make software easier to scale and maintain.
          </Typography>
          <Divider />
          <Stack spacing={2}>
            <Stat label="Years of experience" value="10+" />
            <Stat label="Primary strengths" value="Architecture, debugging, performance" />
            <Stat label="Core stack" value="C#, .NET, SQL, React, TypeScript" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function StrengthsSection() {
  return (
    <SectionWrapper>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography variant="overline" color="info.main">
          Strengths
        </Typography>
        <Typography variant="h2" sx={{ maxWidth: 760 }}>
          I do my best work where complexity, performance, and ownership meet.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {strengths.map((item) => (
          <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
            <FeatureCard {...item} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

function FeatureCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <Card
      sx={(theme) => ({
        height: '100%',
        border:
          theme.palette.mode === 'dark'
            ? `1px solid ${alpha(theme.palette.divider, 0.92)}`
            : `1px solid ${alpha(theme.palette.primary.main, 0.10)}`,
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 18px 60px ${alpha('#000000', 0.18)}`
            : `0 18px 55px ${alpha('#0F172A', 0.07)}`,
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.42 : 0.26),
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 22px 70px ${alpha(theme.palette.secondary.main, 0.13)}`
              : `0 22px 60px ${alpha(theme.palette.primary.main, 0.10)}`,
        },
      })}
    >
      <CardContent sx={{ p: 3.5 }}>
        <Stack spacing={2}>
          <Box
            sx={(theme) => ({
              width: 42,
              height: 42,
              borderRadius: 2.25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'info.main',
              bgcolor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.info.main, 0.10)
                  : alpha(theme.palette.info.main, 0.11),
              border: `1px solid ${alpha(theme.palette.info.main, 0.18)}`,
            })}
          >
            {icon}
          </Box>
          <Typography variant="h5">{title}</Typography>
          <Typography color="text.secondary">{body}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

function AboutPreviewSection() {
  return (
    <SectionWrapper>
      <Grid container spacing={6} sx={{ alignItems: 'flex-start' }}>
        <Grid size={{ xs: 12, md: 5 }} >
          <Stack spacing={2}>
            <Typography variant="overline" color="info.main">
              About
            </Typography>
            <Typography variant="h2">A principal-level engineer who likes hard problems.</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={2.5}>
            <Typography color="text.secondary">
              Over the past decade, I’ve built and improved enterprise SaaS applications, implementation platforms, integration-heavy systems, and performance-sensitive software used in real business environments.
            </Typography>
            <Typography color="text.secondary">
              My work often sits at the intersection of architecture, backend engineering, customer-facing delivery, and deep technical troubleshooting. I enjoy making complex systems more understandable, maintainable, and effective.
            </Typography>
            <Typography color="text.secondary">
              I’m especially interested in staff and principal-level roles where I can contribute through system design, technical leadership, and practical AI-aware product thinking.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </SectionWrapper >
  );
}

function ExperienceSection() {
  return (
    <SectionWrapper>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography variant="overline" color="info.main">
          Experience
        </Typography>
        <Typography variant="h2">Career highlights</Typography>
      </Stack>

      <Stack spacing={3}>
        {experience.map((item) => (
          <Card
            key={`${item.role}-${item.years}`}
            sx={(theme) => ({
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.divider, 0.88)
                  : alpha(theme.palette.primary.main, 0.10),
            })}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Grid container spacing={3} sx={{ alignItems: 'flex-start' }}>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography variant="body2" color="info.main" sx={{ fontWight: 600 }}>
                    {item.years}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Stack spacing={1}>
                    <Typography variant="h5">{item.role}</Typography>
                    <Typography variant="subtitle1">{item.company}</Typography>
                    <Typography color="text.secondary">{item.body}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </SectionWrapper>
  );
}

function CallToActionSection() {
  return (
    <SectionWrapper>
      <Card
        sx={(theme) => ({
          overflow: 'hidden',
          border:
            theme.palette.mode === 'dark'
              ? `1px solid ${alpha(theme.palette.secondary.main, 0.18)}`
              : `1px solid ${alpha(theme.palette.primary.main, 0.13)}`,
          background:
            theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.14)}, ${alpha(theme.palette.secondary.main, 0.08)} 42%, ${alpha(theme.palette.background.paper, 0.76)})`
              : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.07)}, ${alpha(theme.palette.secondary.main, 0.05)} 42%, ${alpha('#FFFFFF', 0.84)})`,
        })}
      >
        <CardContent sx={{ p: { xs: 3.5, md: 5 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={1.5}>
                <Typography variant="overline" color="info.main">
                  Next step
                </Typography>
                <Typography variant="h3">Interested in working together?</Typography>
                <Typography color="text.secondary">
                  I’m open to staff, principal, and architecture-focused opportunities where I can help build reliable platforms and solve technically difficult problems.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={2}>
                <Button component={Link} href="/contact" variant="contained" color="primary" size="large">
                  Get in touch
                </Button>
                <Button component={Link} href="/resume" variant="outlined" color="primary" size="large">
                  Download resume
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {children}
    </Container>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
}
