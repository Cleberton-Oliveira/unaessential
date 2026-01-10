import { Container, Typography, Box } from "@mui/material";

export default function FeedbacksPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          feedbacks
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          A voz de quem viveu a experiência
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          Página voltada para depoimentos, comentários e percepções de pacientes sobre o cuidado recebido na
          unaessential.
        </Typography>
      </Container>
    </Box>
  );
}
