import { Container, Typography, Box } from "@mui/material";

export default function TecnologiasPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tecnologias
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Tecnologias a favor da sua pele
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          Página para descrever os equipamentos e recursos tecnológicos utilizados nos tratamentos, sempre
          com foco em segurança e eficácia.
        </Typography>
      </Container>
    </Box>
  );
}
