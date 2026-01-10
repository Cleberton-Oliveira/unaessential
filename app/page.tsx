"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const banners = [
  {
    title: "Cuidar de si é essencial",
    subtitle: "Tratamentos personalizados para realçar a sua melhor versão.",
  },
  {
    title: "Tecnologia a favor da beleza",
    subtitle: "Equipamentos de última geração com protocolos seguros.",
  },
  {
    title: "Resultados que transformam",
    subtitle: "Acompanhamento próximo e foco em resultados naturais.",
  },
];

const sections = [
  {
    key: "tratamentos",
    title: "Tratamentos",
    subtitle: "Protocolos pensados para diferentes necessidades de pele e corpo.",
    href: "/tratamentos",
    image: "/images/tratamentos.jpg",
    description:
      "Conheça a curadoria de tratamentos faciais e corporais da unaessential, pensados para cada fase da sua jornada.",
  },
  {
    key: "profissionais",
    title: "Profissionais",
    subtitle: "Uma equipe especializada, acolhedora e em constante atualização.",
    href: "/profissionais",
    image: "/images/profissionais.jpg",
    description:
      "Saiba mais sobre quem cuida de você: formações, especialidades e a filosofia de atendimento da nossa equipe.",
  },
  {
    key: "tecnologias",
    title: "Tecnologias",
    subtitle: "Equipamentos de ponta para tratamentos mais seguros e eficazes.",
    href: "/tecnologias",
    image: "/images/tecnologias.jpg",
    description:
      "Descubra as tecnologias que utilizamos e como elas potencializam os resultados dos tratamentos.",
  },
  {
    key: "resultados",
    title: "Resultados",
    subtitle: "Antes e depois e histórias reais de transformação.",
    href: "/resultados",
    image: "/images/resultados.jpg",
    description:
      "Veja exemplos de resultados e entenda o que você pode esperar de cada protocolo da unaessential.",
  },
  {
    key: "feedbacks",
    title: "Feedbacks",
    subtitle: "Depoimentos de quem já viveu a experiência unaessential.",
    href: "/feedbacks",
    image: "/images/feedbacks.jpg",
    description:
      "Leia as percepções e relatos de pacientes sobre o cuidado, o ambiente e os resultados.",
  },
  {
    key: "endereco",
    title: "Endereço",
    subtitle: "Encontre a unaessential e programe a sua visita.",
    href: "/endereco",
    image: "/images/endereco.jpg",
    description:
      "Informações de localização, acesso e canais de contato para facilitar a sua chegada até nós.",
  },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);

  const banner = banners[currentBanner];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 6,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
                estética & bem-estar
              </Typography>
              <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 2 }}>
                {banner.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mb: 4 }}>
                {banner.subtitle}
              </Typography>
              <Button
                component={Link}
                href="/tratamentos"
                variant="contained"
                color="primary"
                size="large"
              >
                Conhecer tratamentos
              </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                minHeight: 260,
                borderRadius: 4,
                bgcolor: "primary.main",
                color: "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 4,
                textAlign: "center",
              }}
            >
              <Typography variant="h5" sx={{ maxWidth: 380 }}>
                unaessential é um espaço dedicado ao cuidado, à pausa e ao essencial.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: "left" }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
              uma visão geral
            </Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              Tudo o que você encontra na unaessential
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 640 }}>
              Explore rapidamente os principais temas do nosso espaço: tratamentos, equipe, tecnologias,
              resultados, relatos de pacientes e como chegar até nós.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {sections.map((section) => (
              <Grid item xs={12} sm={6} md={4} key={section.key}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                    borderRadius: 3,
                    border: 1,
                    borderColor: "divider",
                    bgcolor: "background.paper",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 140,
                      bgcolor: "primary.main",
                      opacity: 0.2,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
                      {section.title}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>
                      {section.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                      {section.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      component={Link}
                      href={section.href}
                      size="small"
                      color="primary"
                    >
                      Ir para a página
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
