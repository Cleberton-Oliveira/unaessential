"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function SpaPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          spa
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Experiências de SPA & Day SPA
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
          Todas as informações detalhadas sobre nossos rituais de SPA, Day SPA, head spa, massagens e experiências
          sensoriais estão reunidas na página <strong>Tratamentos &amp; SPA</strong>.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
          Por lá, você encontra indicações, benefícios, tempos de duração e espaços reservados para fotos e vídeos de
          cada experiência, para que possa escolher com calma o cuidado que mais conversa com o seu momento.
        </Typography>

        <Button
          component={Link}
          href="/tratamentos"
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
        >
          Ver Tratamentos &amp; SPA
        </Button>
      </Container>
    </Box>
  );
}