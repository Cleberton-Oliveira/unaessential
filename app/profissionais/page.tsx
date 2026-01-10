import { Container, Typography, Box } from "@mui/material";

export default function ProfissionaisPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          profissionais
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Equipe unaessential
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          Espaço dedicado para apresentar a equipe, formações, especialidades e a visão de cuidado que
          norteia o atendimento na unaessential.
        </Typography>
      </Container>
    </Box>
  );
}
