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
  Typography
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DownloadIcon from '@mui/icons-material/Download';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const strengths = [
  {
    title: 'Systems Architecture',
    body: 'I design scalable, maintainable systems across backend services, integrations, and data-heavy business platforms.',
    icon: <HubOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Debugging & Root Cause Analysis',
    body: 'I enjoy digging into complex systems, isolating bottlenecks, and solving issues that impact reliability and speed.',
    icon: <TroubleshootOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Performance Optimization',
    body: 'I improve application responsiveness, query efficiency, and operational stability in production environments.',
    icon: <SpeedOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Cross-Team Leadership',
    body: 'I work well across engineering, product, and stakeholder groups to turn ambiguity into clear technical direction.',
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
    years: '2011 — 2019',
    role: 'Software Engineer',
    company: 'Prior Engineering Experience',
    body: 'Developed enterprise applications, improved maintainability, and built a strong foundation in backend logic, frontend systems, and SQL.',
  },
];

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 420,
              height: 420,
              borderRadius: '50%',
              top: -80,
              left: { xs: -160, md: -60 },
              background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0) 70%)',
              filter: 'blur(24px)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: 380,
              height: 380,
              borderRadius: '50%',
              top: 40,
              right: { xs: -140, md: -40 },
              background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(34,211,238,0) 72%)',
              filter: 'blur(20px)',
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Typography variant="h1" gutterBottom sx={{ 
              p:1.5,
              font: 'Geist', 
              fontSize: { xs: '4rem', md: '6rem'},
              background: 'linear-gradient(135deg, #6366F1, #A855F7, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
               }}>Nick Huguenard</Typography>
          </Grid>
          <Grid container spacing={6} sx={{ alignItems: 'center' }} >
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Chip
                  label="Staff / Principal Engineer • Systems Architect"
                  color="secondary"
                  sx={{ alignSelf: 'flex-start' }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.75rem', md: '4.5rem' },
                    maxWidth: 780,
                  }}
                >
                  Building scalable systems with a modern, AI-forward mindset.
                </Typography>

                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ maxWidth: 720, fontWeight: 400, lineHeight: 1.5 }}
                >
                  I’m Nick Huguenard — a principal-level software engineer focused on complex systems,
                  architecture, debugging, performance, and full-stack product delivery.
                </Typography>

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
                  {['C#', '.NET', 'SQL', 'React', 'TypeScript', 'Architecture', 'Performance'].map((item) => (
                    <Chip key={item} label={item} color="primary" variant="outlined" />
                  ))}
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ minHeight: 360 }}>
                <CardContent sx={{ p: 4 }}>
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
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Typography variant="overline" color="info.main">
            Strengths
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 720 }}>
            I do my best work where complexity, performance, and ownership meet.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {strengths.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
              <Card>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={2}>
                    <Box sx={{ color: 'info.main' }}>{item.icon}</Box>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography color="text.secondary">{item.body}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
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
                My work often sits at the intersection of architecture, backend engineering, customer-facing delivery, and deep technical troubleshooting. I enjoy making complex systems more understandable, more maintainable, and more effective.
              </Typography>
              <Typography color="text.secondary">
                I’m especially interested in staff and principal-level roles where I can contribute through system design, technical leadership, and practical AI-aware product thinking.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Typography variant="overline" color="info.main">
            Experience
          </Typography>
          <Typography variant="h2">Career highlights</Typography>
        </Stack>

        <Stack spacing={3}>
          {experience.map((item) => (
            <Card key={`${item.role}-${item.years}`}>
              <CardContent sx={{ p: 3.5 }}>
                <Grid container spacing={3} sx={{ alignItems: 'flex-start' }}>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <Typography variant="body2" color="info.main">
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
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Card>
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
      </Container>
    </Box>
  );
}

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};
