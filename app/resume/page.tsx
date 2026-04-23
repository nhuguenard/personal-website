import { Box , Container } from '@mui/material';

export default function Resume() {
  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <embed src="/nick_huguenard_resume.pdf" type="application/pdf" width="100%" height="600px" />
      </Container>
    </Box>
  );
}