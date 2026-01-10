import { Container, Typography, Box } from "@mui/material";

export default function TratamentosPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tratamentos
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Tratamentos unaessential
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          Aqui você poderá detalhar todos os protocolos faciais e corporais oferecidos pela unaessential,
          explicando objetivos, indicações e como funciona a experiência em cada sessão.
        </Typography>
      </Container>
    </Box>
  );
}
