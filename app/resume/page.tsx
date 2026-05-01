import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'View the resume of Nick Huguenard, a principal software engineer with experience in C#, .NET, SQL, React, TypeScript, CI/CD, system architecture, and performance optimization.',
  alternates: {
    canonical: '/resume',
  },
};

const resumeUrl = '/nick_huguenard_resume.pdf';

export default function Resume() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack spacing={3}>
            <Chip label="Resume" color="secondary" sx={{ alignSelf: 'flex-start' }} />

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: 820 }}
            >
              Principal software engineer focused on architecture, debugging, and performance.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 760, fontWeight: 400, lineHeight: 1.55 }}
            >
              10+ years building and improving enterprise software systems with C#, .NET,
              SQL, React, TypeScript, CI/CD, integrations, and customer-facing technical leadership.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component="a"
                href={resumeUrl}
                download
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DownloadRoundedIcon />}
              >
                Download PDF
              </Button>

              <Button
                component="a"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<OpenInNewRoundedIcon />}
              >
                Open in new tab
              </Button>
            </Stack>
          </Stack>

          <Card>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Box
                component="iframe"
                src={resumeUrl}
                title="Nick Huguenard Resume"
                sx={{
                  width: '100%',
                  height: { xs: '70vh', md: '900px' },
                  border: 0,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                }}
              />
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}