import { Box , Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'View the resume of Nick Huguenard, a principal software engineer with experience in C#, .NET, SQL, React, TypeScript, CI/CD, system architecture, and performance optimization.',
  alternates: {
    canonical: '/resume',
  },
};

export default function Resume() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <embed src="/nick_huguenard_resume.pdf" type="application/pdf" width="100%" height="600px" />
      </Container>
    </Box>
  );
}