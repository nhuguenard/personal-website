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
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';

const caseStudies = [
  {
    title: 'Standardizing CI/CD with reusable GitHub Actions',
    eyebrow: 'Developer Experience • CI/CD • Automation',
    icon: <TerminalRoundedIcon fontSize="small" />,
    summary:
      'Helped standardize delivery workflows across solutions by contributing reusable GitHub Actions, automated quality checks, vulnerability scanning, test coverage visibility, and license compliance tooling.',
    problem:
      'Delivery workflows varied across solutions, making CI/CD behavior harder to reason about and increasing the effort needed to maintain consistent quality and compliance practices.',
    approach: [
      'Contributed to reusable GitHub Actions that created more consistent pipeline behavior across implementations.',
      'Integrated SonarCloud scanning to surface vulnerabilities and quality issues earlier in the development lifecycle.',
      'Helped automate test execution and coverage visibility as part of repeatable delivery workflows.',
      'Built tooling to detect third-party libraries, evaluate license acceptability, and generate third-party notices.',
    ],
    outcome:
      'Improved developer workflow consistency, reduced manual review effort, and strengthened the delivery organization’s ability to maintain quality, security, and compliance standards.',
    tags: ['GitHub Actions', 'CI/CD', 'SonarCloud', 'Automation', 'DevEx'],
  },
  {
    title: 'Refactoring data-heavy processing for performance and clarity',
    eyebrow: 'Performance • Architecture • Maintainability',
    icon: <SpeedRoundedIcon fontSize="small" />,
    summary:
      'Identified performance and reliability issues tied to data size and processing shape, then refactored a key class and supporting models to improve speed, maintainability, and comprehension.',
    problem:
      'A core processing area became difficult to reason about as data size increased. Performance and reliability issues were connected not just to database volume, but to the shape and lifecycle of in-memory data during processing.',
    approach: [
      'Revisited requirements to clarify what the system actually needed to support.',
      'Reworked a key class responsible for complex processing behavior.',
      'Introduced supporting model classes to better separate responsibilities and make the code easier to understand.',
      'Refactored adjacent parts of the system to reduce complexity and improve maintainability.',
    ],
    outcome:
      'Created a cleaner, more maintainable design that improved performance and made future changes easier to reason about.',
    tags: ['C#', '.NET', 'SQL', 'Performance', 'Refactoring'],
  },
  {
    title: 'Connecting support tickets into a broader system-level resolution',
    eyebrow: 'Technical Leadership • Support • Stakeholder Alignment',
    icon: <GroupsRoundedIcon fontSize="small" />,
    summary:
      'Recognized a pattern across multiple support issues, compiled the broader problem space, and led a cross-stakeholder session to align on expected behavior, workarounds, and longer-term fixes.',
    problem:
      'Several support tickets appeared unrelated at first, but together pointed to a larger system behavior issue affecting the customer experience and creating ambiguity around expected outcomes.',
    approach: [
      'Reviewed multiple tickets across a short period to identify the broader pattern behind the symptoms.',
      'Compiled a structured list of issues, expected behaviors, and possible resolution paths.',
      'Brought together product team members, the original solution architect, the customer, and other stakeholders.',
      'Aligned the group on temporary workarounds while identifying longer-term fixes and ownership paths.',
    ],
    outcome:
      'Improved alignment across stakeholders, reduced ambiguity, and helped shift the conversation from isolated ticket handling to system-level resolution.',
    tags: ['Leadership', 'Root Cause Analysis', 'Customer Support', 'Architecture', 'Communication'],
  },
];

const principles = [
  {
    title: 'Start with the system',
    body: 'I look for how components, data, users, and workflows interact before jumping to fixes.',
    icon: <AccountTreeRoundedIcon fontSize="small" />,
  },
  {
    title: 'Automate repeatable work',
    body: 'When a process matters, I look for ways to make it consistent, observable, and less dependent on manual effort.',
    icon: <AutoFixHighRoundedIcon fontSize="small" />,
  },
  {
    title: 'Protect quality early',
    body: 'Security, test coverage, maintainability, and compliance are easier to manage when they are built into the workflow.',
    icon: <SecurityRoundedIcon fontSize="small" />,
  },
];

export default function ProjectsPageClient() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Hero />
        <CaseStudyGrid />
        <PrinciplesSection />
        <CallToAction />
      </Container>
    </Box>
  );
}

function Hero() {
  return (
    <Grid container spacing={5} sx={{ mb: { xs: 6, md: 8 }, sx: 'flex-end' }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={3}>
          <Chip label="Projects & Case Studies" color="secondary" sx={{ alignSelf: 'flex-start' }} />
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', md: '4.25rem' }, maxWidth: 900 }}
          >
            Practical engineering work with real system impact.
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 820, fontWeight: 400, lineHeight: 1.55 }}
          >
            A few examples of how I approach architecture, performance, developer workflows,
            and complex technical problem solving in enterprise software environments.
          </Typography>
        </Stack>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card
          sx={(theme) => ({
            border:
              theme.palette.mode === 'dark'
                ? `1px solid ${alpha(theme.palette.info.main, 0.14)}`
                : `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
            background:
              theme.palette.mode === 'dark'
                ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.12)}, ${alpha(theme.palette.background.paper, 0.82)})`
                : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.06)}, ${alpha('#FFFFFF', 0.9)})`,
          })}
        >
          <CardContent sx={{ p: 3.5 }}>
            <Stack spacing={2}>
              <Typography variant="overline" color="info.main">
                Case study theme
              </Typography>
              <Typography variant="h4">Reduce ambiguity. Improve systems. Make the work repeatable.</Typography>
              <Typography color="text.secondary">
                The strongest engineering outcomes often come from understanding the actual system, clarifying tradeoffs, and building improvements that last beyond the first fix.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function CaseStudyGrid() {
  return (
    <Stack spacing={4} sx={{ mb: { xs: 8, md: 10 } }}>
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={study.title} study={study} index={index} />
      ))}
    </Stack>
  );
}

type CaseStudy = (typeof caseStudies)[number];

function CaseStudyCard({ study }: { study: CaseStudy; index: number }) {
  return (
    <Card
      sx={(theme) => ({
        overflow: 'hidden',
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
      <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2.5}>
              <Box
                sx={(theme) => ({
                  width: 48,
                  height: 48,
                  borderRadius: 2.5,
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
                {study.icon}
              </Box>

              <Stack spacing={1}>
                <Typography variant="overline" color="info.main">
                  {study.eyebrow}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.25rem' } }}>
                  {study.title}
                </Typography>
              </Stack>

              <Typography color="text.secondary">{study.summary}</Typography>

              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                {study.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={(theme) => ({
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.background.default, 0.28)
                          : alpha('#FFFFFF', 0.64),
                      borderColor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.info.main, 0.20)
                          : alpha(theme.palette.primary.main, 0.20),
                    })}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12 }}>
                <CaseStudySection title="The problem" body={study.problem} />
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <CaseStudySection title="The approach">
                  <Stack spacing={1.25}>
                    {study.approach.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </Stack>
                </CaseStudySection>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <CaseStudySection title="The result" body={study.outcome} accent />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function CaseStudySection({
  title,
  body,
  children,
  accent = false,
}: {
  title: string;
  body?: string;
  children?: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        p: 2.5,
        borderRadius: 3,
        border: `1px solid ${accent
          ? alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.28 : 0.20)
          : theme.palette.divider
          }`,
        bgcolor: accent
          ? theme.palette.mode === 'dark'
            ? alpha(theme.palette.secondary.main, 0.08)
            : alpha(theme.palette.secondary.main, 0.05)
          : theme.palette.mode === 'dark'
            ? alpha(theme.palette.background.default, 0.24)
            : alpha('#FFFFFF', 0.58),
      })}
    >
      <Stack spacing={1.4}>
        <Typography variant="overline" color={accent ? 'secondary.main' : 'info.main'}>
          {title}
        </Typography>
        {body ? <Typography color="text.secondary">{body}</Typography> : children}
      </Stack>
    </Box>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
      <Box
        sx={(theme) => ({
          mt: '8px',
          width: 7,
          height: 7,
          borderRadius: '50%',
          bgcolor: 'secondary.main',
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 0 18px ${alpha(theme.palette.secondary.main, 0.48)}`
              : 'none',
          flexShrink: 0,
        })}
      />
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
        {children}
      </Typography>
    </Stack>
  );
}

function PrinciplesSection() {
  return (
    <Box sx={{ mb: { xs: 8, md: 10 } }}>
      <Stack spacing={3} sx={{ mb: 4 }}>
        <Typography variant="overline" color="info.main">
          Working style
        </Typography>
        <Typography variant="h2" sx={{ maxWidth: 760 }}>
          How I approach technical work that needs to last.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {principles.map((principle) => (
          <Grid size={{ xs: 12, md: 4 }} key={principle.title}>
            <Card sx={{ height: '100%' }}>
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
                    {principle.icon}
                  </Box>
                  <Typography variant="h5">{principle.title}</Typography>
                  <Typography color="text.secondary">{principle.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function CallToAction() {
  return (
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
                Want the full story?
              </Typography>
              <Typography variant="h3">Let’s talk about the systems behind the bullet points.</Typography>
              <Typography color="text.secondary">
                I’m happy to discuss the technical details, tradeoffs, and outcomes behind these examples in an interview or consulting conversation.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={2}>
              <Button component={Link} href="/contact" variant="contained" color="primary" size="large" endIcon={<ArrowOutwardIcon />}>
                Start a conversation
              </Button>
              <Button component={Link} href="/experience" variant="outlined" color="primary" size="large">
                View experience
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
