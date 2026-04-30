'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const roles = [
  {
    company: 'Configit, Inc.',
    role: 'Principal Software Consultant',
    dates: '2023 — Present',
    logo: '/configit.jpg',
    summary:
      'Lead customer-facing implementation work, architecture decisions, integration strategy, and complex technical problem solving across enterprise configuration solutions.',
    tags: ['Architecture', 'Enterprise SaaS', 'Integrations', 'Performance'],
    icon: <ArchitectureRoundedIcon fontSize="small" />,
    highlights: [
      'Lead implementation of enterprise configuration platforms for complex customer environments.',
      'Design scalable architecture for customer-specific solutions involving business rules, integrations, and data-heavy workflows.',
      'Collaborate with global teams, customers, architects, and stakeholders to translate requirements into maintainable technical direction.',
      'Debug complex system issues across full-stack environments, including backend logic, SQL, integrations, and frontend workflows.',
      'Improve reliability, maintainability, and performance of production systems through focused refactoring and architectural improvements.',
      'Contribute to CI/CD standards, GitHub Actions rollout, SonarCloud scans, test coverage visibility, license checks, and third-party notice automation.',
    ],
  },
  {
    company: 'Configit, Inc.',
    role: 'Senior Software Consultant',
    dates: '2019 — 2023',
    logo: '/configit.jpg',
    summary:
      'Built and delivered enterprise SaaS solutions while contributing to integrations, architecture discussions, delivery processes, and production support.',
    tags: ['C#', '.NET', 'SQL', 'CI/CD'],
    icon: <IntegrationInstructionsRoundedIcon fontSize="small" />,
    highlights: [
      'Built full-stack features for enterprise SaaS platforms using C#, .NET, SQL, and modern frontend technologies.',
      'Designed and implemented integrations with customer systems and external enterprise platforms.',
      'Maintained CI/CD pipelines and deployment automation for the delivery organization.',
      'Participated in architecture, design, and code review discussions to improve quality and consistency across solutions.',
      'Supported customer-facing delivery work by troubleshooting production issues and translating business needs into software changes.',
    ],
  },
  {
    company: 'Configit, Inc.',
    role: 'Software Engineer',
    dates: '2016 — 2019',
    logo: '/configit.jpg',
    summary:
      'Developed enterprise software components and built a strong foundation in full-stack development, SQL-backed business logic, and customer implementation work.',
    tags: ['C#', 'SQL', 'Enterprise Software', 'Support'],
    icon: <CodeRoundedIcon fontSize="small" />,
    highlights: [
      'Developed enterprise software components using C# and SQL within large customer implementation projects.',
      'Delivered new features and system enhancements while maintaining reliability of existing production systems.',
      'Assisted with troubleshooting and resolving issues reported by customers and internal teams.',
      'Contributed to collaborative development practices including testing, code reviews, and technical documentation.',
    ],
  },
  {
    company: 'Universal Avionics Systems, Corp.',
    role: 'Software Engineer',
    dates: '2013 — 2016',
    logo: '/universal-avionics-logo.png',
    summary:
      'Built software for high-reliability avionics testing environments where quality, verification, repeatability, and diagnostic precision mattered.',
    tags: ['Testing Tools', 'Diagnostics', 'Reliability', 'Automation'],
    icon: <VerifiedRoundedIcon fontSize="small" />,
    highlights: [
      'Developed automated testing software used to validate avionics hardware functionality.',
      'Maintained and enhanced shared testing libraries used across multiple avionics validation systems.',
      'Built diagnostic tools that improved reliability of automated testing processes.',
      'Worked within a high-reliability engineering environment requiring strict quality and verification standards.',
    ],
  },
  {
    company: 'Windham Brannon, P.C.',
    role: 'Internal Developer Intern',
    dates: '2012',
    logo: '/windham_brannon_logo.jpg',
    summary:
      'Created internal web tools and reporting automation that supported operational workflows and SQL-based financial reporting.',
    tags: ['Internal Tools', 'SQL Reports', 'Automation', 'Web Apps'],
    icon: <BuildRoundedIcon fontSize="small" />,
    highlights: [
      'Developed and maintained internal web tools that supported daily operations across the firm.',
      'Contributed to Intraweb, an internal system providing employee information and operational functionality.',
      'Built an automated reporting tool that generated SQL-based financial reports and distributed them to clients via email.',
      'Assisted with maintenance and improvements to internal business systems.',
    ],
  },
];

const careerStats = [
  { label: 'Years engineering software', value: '10+' },
  { label: 'Core stack', value: 'C# • .NET • SQL • React' },
  { label: 'Primary strengths', value: 'Architecture • Debugging • Performance' },
];

export default function ExperiencePageClient() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Hero />
        <Stats />
        <ExperienceTimeline isDesktop={isDesktop} />
      </Container>
    </Box>
  );
}

function Hero() {
  return (
    <Grid container spacing={5} sx={{ mb: { xs: 6, md: 8 }, alignItems: "flex-end" }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={3}>
          <Chip label="Experience" color="secondary" sx={{ alignSelf: 'flex-start' }} />
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', md: '4.25rem' }, maxWidth: 860 }}
          >
            Building, improving, and leading enterprise software systems.
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, fontWeight: 400, lineHeight: 1.55 }}
          >
            My career has centered on solving complex technical problems, improving existing systems,
            and delivering reliable software across enterprise SaaS, customer implementations,
            integrations, CI/CD, and high-reliability engineering environments.
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
                Career theme
              </Typography>
              <Typography variant="h4">Make complex systems clearer, faster, and more reliable.</Typography>
              <Typography color="text.secondary">
                From avionics testing tools to enterprise SaaS implementations, my work has consistently involved quality, reliability, and practical technical ownership.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function Stats() {
  return (
    <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 9 } }}>
      {careerStats.map((stat) => (
        <Grid size={{ xs: 12, md: 4 }} key={stat.label}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={0.75}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {stat.label}
                </Typography>
                <Typography variant="h6">{stat.value}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function ExperienceTimeline({ isDesktop }: { isDesktop: boolean }) {
  return (
    <Timeline
      position={isDesktop ? 'alternate' : 'right'}
      sx={{
        p: 0,
        m: 0,
        [`& .MuiTimelineItem-root:before`]: {
          flex: isDesktop ? undefined : 0,
          padding: isDesktop ? undefined : 0,
        },
      }}
    >
      {roles.map((role, index) => (
        <RoleTimelineItem
          key={`${role.company}-${role.role}-${role.dates}`}
          role={role}
          index={index}
          isDesktop={isDesktop}
          isLast={index === roles.length - 1}
        />
      ))}
    </Timeline>
  );
}

type Role = (typeof roles)[number];

function RoleTimelineItem({
  role,
  index,
  isDesktop,
  isLast,
}: {
  role: Role;
  index: number;
  isDesktop: boolean;
  isLast: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          m: 'auto 0',
          display: { xs: 'none', md: 'block' },
          px: 3,
        }}
        align={index % 2 === 0 ? 'right' : 'left'}
      >
        <Stack spacing={0.75}>
          <Typography variant="body2" color="info.main" sx={{ fontWeight: 700 }}>
            {role.dates}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role.company}
          </Typography>
        </Stack>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector
          sx={(theme) => ({
            bgcolor: alpha(theme.palette.info.main, 0.24),
          })}
        />
        <TimelineDot
          sx={(theme) => ({
            p: 0.75,
            border: `1px solid ${alpha(theme.palette.info.main, 0.32)}`,
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.background.paper, 0.86)
                : alpha('#FFFFFF', 0.9),
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 0 34px ${alpha(theme.palette.info.main, 0.16)}`
                : `0 10px 28px ${alpha('#0F172A', 0.10)}`,
          })}
        >
          <CompanyAvatar src={role.logo} alt={role.company} fallback={role.company.charAt(0)} />
        </TimelineDot>
        {!isLast ? (
          <TimelineConnector
            sx={(theme) => ({
              bgcolor: alpha(theme.palette.info.main, 0.24),
            })}
          />
        ) : null}
      </TimelineSeparator>

      <TimelineContent sx={{ py: { xs: 2, md: 3 }, px: { xs: 1.5, md: 2.5 } }}>
        <RoleCard role={role} alignRight={isDesktop && index % 2 !== 0} />
      </TimelineContent>
    </TimelineItem>
  );
}

function RoleCard({ role, alignRight }: { role: Role; alignRight: boolean }) {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 560,
        ml: alignRight ? 'auto' : 0,
        position: 'relative',
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
      <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
        <Stack spacing={2.25}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }} >
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
                flexShrink: 0,
              })}
            >
              {role.icon}
            </Box>

            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h5">{role.role}</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.35 }}>
                {role.company} • {role.dates}
              </Typography>
            </Box>
          </Stack>

          <Typography color="text.secondary">{role.summary}</Typography>

          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {role.tags.map((tag) => (
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

          <Divider />

          <List dense disablePadding>
            {role.highlights.map((highlight) => (
              <ListItem
                key={highlight}
                disableGutters
                sx={{ alignItems: 'flex-start', py: 0.75 }}
              >
                <Box
                  sx={(theme) => ({
                    mt: '9px',
                    mr: 1.4,
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? `0 0 18px ${alpha(theme.palette.secondary.main, 0.5)}`
                        : 'none',
                    flexShrink: 0,
                  })}
                />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {highlight}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
}

function CompanyAvatar({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  return (
    <Avatar
      sx={(theme) => ({
        width: 44,
        height: 44,
        bgcolor: alpha(theme.palette.primary.main, 0.16),
        color: 'text.primary',
      })}
    >
      <Box sx={{ position: 'relative', width: 34, height: 34, borderRadius: '50%', overflow: 'hidden' }}>
        <Image src={src} alt={alt} fill sizes="34px" style={{ objectFit: 'contain' }} />
      </Box>
    </Avatar>
  );
}
