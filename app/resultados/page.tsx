import { Container, Typography, Box } from "@mui/material";

export default function ResultadosPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          resultados
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Resultados e transformações
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          Espaço para apresentar antes e depois, estudos de caso e explicações sobre expectativas reais de
          resultado para cada tipo de tratamento.
        </Typography>
      </Container>
    </Box>
  );
}
