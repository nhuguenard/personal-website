'use client';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';


const strengths = [
  {
    title: 'Systems Architecture',
    body: 'I enjoy designing systems that stay understandable and maintainable as complexity grows.',
    icon: <HubOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Debugging Complex Problems',
    body: 'I like getting to the root of difficult issues and untangling systems that have become hard to reason about.',
    icon: <TroubleshootOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Performance & Reliability',
    body: 'I focus on making software faster, more stable, and more dependable in real-world use.',
    icon: <SpeedOutlinedIcon fontSize="small" />,
  },
  {
    title: 'Technical Leadership',
    body: 'I work well across teams, helping turn ambiguity into practical technical direction and execution.',
    icon: <GroupsOutlinedIcon fontSize="small" />,
  },
];

const principles = [
  'Understand the system before changing it.',
  'Prefer clarity over cleverness.',
  'Optimize where it matters most.',
  'Build for maintainability, not just delivery.',
  'Use AI as leverage, not as a substitute for judgment.',
];

export default function About() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: { xs: 8, md: 10 }, alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Chip
                label="About Me"
                color="secondary"
                sx={{ alignSelf: 'flex-start' }}
              />

              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: 760 }}
              >
                Principal-level engineer, systems thinker, and builder of dependable software.
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ maxWidth: 760, fontWeight: 400, lineHeight: 1.5 }}
              >
                I’m Nick Huguenard. Over the past 10+ years, I’ve worked across enterprise software, customer-facing consulting, architecture, and full-stack development — with a strong focus on solving hard technical problems and making complex systems better.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} >
            <Card>
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={3} sx={{ alignItems: 'center' }}>
                  <Avatar
                  src="/headshot.jpg"
                    sx={{ width: 128, height: 128, fontSize: '2.5rem', bgcolor: 'primary.main' }}
                  >
                    NH
                  </Avatar>

                  {/* Replace the Avatar above with an actual photo when ready.
                  <Box
                    sx={{
                      position: 'relative',
                      width: 180,
                      height: 180,
                      borderRadius: '24px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/images/nick-headshot.jpg"
                      alt="Nick Huguenard"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  */}

                  <Stack spacing={1} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4">Nick Huguenard</Typography>
                    <Typography color="text.secondary">
                      Principal Software Consultant • Full-Stack Engineer • Systems Architect
                    </Typography>
                  </Stack>

                  <Divider flexItem />

                  <Stack spacing={1.25} sx={{ width: '100%' }}>
                    <InfoRow label="Experience" value="10+ years" />
                    <InfoRow label="Primary stack" value="C#, .NET, SQL, React, TypeScript" />
                    <InfoRow label="Focus areas" value="Architecture, debugging, performance, delivery" />
                    <InfoRow label="Currently interested in" value="Staff / Principal / Architecture roles" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={6} sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Typography variant="overline" color="info.main">
                My background
              </Typography>
              <Typography variant="h2">What I do best</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2.5}>
              <Typography color="text.secondary">
                My background is strongest in full-stack enterprise software, especially systems with deep business logic, heavy integration requirements, and a lot of operational complexity. I’ve spent much of my career building with C#, .NET, SQL, React, and TypeScript, while also working closely with customers and stakeholders to turn real-world needs into maintainable technical solutions.
              </Typography>
              <Typography color="text.secondary">
                I do my best work in environments where the problems are not perfectly defined at the start. I enjoy understanding how systems actually behave, diagnosing root causes, and designing solutions that improve performance, reliability, and long-term maintainability.
              </Typography>
              <Typography color="text.secondary">
                Today, I’m especially interested in staff and principal-level roles where I can contribute through system design, technical leadership, and platform thinking.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Stack spacing={3} sx={{ mb: 4 }}>
            <Typography variant="overline" color="info.main">
              Strengths
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: 760 }}>
              The kind of work I naturally gravitate toward
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {strengths.map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
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
        </Box>

        <Grid container spacing={6} sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid size={{ xs: 12, md: 5 }} >
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Box sx={{ color: 'info.main', display: 'flex' }}>
                      <PsychologyAltOutlinedIcon fontSize="small" />
                    </Box>
                    <Typography variant="h5">How I think about engineering</Typography>
                  </Stack>

                  <Typography color="text.secondary">
                    I tend to approach software as both a technical system and a design problem. Good engineering is not just about getting something to work — it is about making the system understandable, resilient, and capable of evolving over time.
                  </Typography>

                  <Typography color="text.secondary">
                    I care a lot about clarity, reliability, and thoughtful tradeoffs. I like systems that are clean, practical, and grounded in how people actually use them.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={2.5}>
                  <Typography variant="h5">A few principles I work by</Typography>

                  <Stack spacing={1.5}>
                    {principles.map((item) => (
                      <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            mt: '7px',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'secondary.main',
                            flexShrink: 0,
                          }}
                        />
                        <Typography color="text.secondary">{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent sx={{ p: { xs: 3.5, md: 5 } }}>
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={1.5}>
                  <Typography variant="overline" color="info.main">
                    Outside the bullet points
                  </Typography>
                  <Typography variant="h3">I like making things better.</Typography>
                  <Typography color="text.secondary">
                    Whether that means refining architecture, improving performance, simplifying a workflow, or helping a team get unstuck, I enjoy the process of turning complexity into something clearer and more effective.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={1.25}>
                  <Chip label="Architecture" color="primary" variant="outlined" />
                  <Chip label="Debugging" color="primary" variant="outlined" />
                  <Chip label="Performance" color="primary" variant="outlined" />
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'right' }}>
        {value}
      </Typography>
    </Stack>
  );
}
