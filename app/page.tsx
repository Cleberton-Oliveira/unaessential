"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
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
  {
    title: "Head Spa & relaxamento",
    subtitle: "Uma experiência completa de bem-estar para desacelerar e se cuidar.",
  },
  {
    title: "Resultados & feedbacks",
    subtitle: "Antes e depois e relatos reais de quem já viveu a experiência.",
  },
];

const videoBanners = [
  {
    src: "/video/geralban.mp4",
    rotation: 0,
  },
  {
    src: "/video/faceban.mp4",
    rotation: 0,
  },
  {
    src: "/video/Resultados.mp4",
    rotation: 0,
  },
  {
    src: "/video/headspaban.mp4",
    rotation: 0,
  },
  {
    src: "/video/corpoban.mp4",
    rotation: 0,
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
    key: "spa-servicos",
    title: "SPA & Day SPA",
    subtitle: "Momentos de pausa, relaxamento profundo e autocuidado.",
    href: "/tratamentos",
    image: "/images/spa.jpg",
    description:
      "Explore nossas experiências de SPA, Day SPA e rituais sensoriais com óleos essenciais, massagem relaxante e head spa.",
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
    key: "resultados-feedbacks",
    title: "Resultados & Feedbacks",
    subtitle: "Antes e depois e relatos de quem já viveu a experiência.",
    href: "/resultados",
    image: "/images/resultados.jpg",
    description:
      "Veja exemplos de resultados e leia depoimentos reais sobre o cuidado, o ambiente e a experiência na unaessential.",
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
  const [videoReady, setVideoReady] = useState<boolean[]>(() =>
    Array(videoBanners.length).fill(false)
  );
  const [videoErrored, setVideoErrored] = useState<boolean[]>(() =>
    Array(videoBanners.length).fill(false)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(id);
  }, []);
  const banner = banners[currentBanner];
  const preferredVideoIndex = currentBanner % videoBanners.length;
  const activeVideoIndex = useMemo(() => {
    const len = videoBanners.length;
    if (!len) return 0;

    const anyReady = videoReady.some(Boolean);

    for (let step = 0; step < len; step += 1) {
      const idx = (preferredVideoIndex + step) % len;
      if (videoErrored[idx]) continue;
      if (!anyReady) return idx;
      if (videoReady[idx]) return idx;
    }

    return 0;
  }, [preferredVideoIndex, videoReady, videoErrored]);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 6, md: 7 },
          minHeight: { xs: "45vh", md: "58vh" },
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        {videoBanners.map((item, index) => {
          const isActive = activeVideoIndex === index;
          return (
            <Box
              key={item.src}
              component="video"
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => {
                setVideoReady((prev) => {
                  if (prev[index]) return prev;
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }}
              onError={() => {
                setVideoErrored((prev) => {
                  if (prev[index]) return prev;
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: item.rotation ? `rotate(${item.rotation}deg)` : "none",
                transformOrigin: "center center",
                opacity: isActive ? 1 : 0,
                transition: "opacity 800ms ease",
                zIndex: 0,
              }}
            />
          );
        })}

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            bgcolor: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(1px)",
            py: { xs: 4, md: 5 },
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
              <Typography variant="overline" sx={{ letterSpacing: 2, color: "common.white", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
                estética & bem-estar
              </Typography>
              <Typography variant="h3" component="h1" sx={{ mt: 2, mb: 2, color: "common.white", textShadow: "0 3px 16px rgba(0,0,0,0.9)" }}>
                {banner.title}
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 520, mb: 4, color: "rgba(255,255,255,0.92)", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
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

            <Box sx={{ flex: 1 }} />
          </Box>
        </Container>
        </Box>
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

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: 3,
            }}
          >
            {sections.map((section) => (
              <Card
                key={section.key}
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
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    overflow: "hidden",
                    bgcolor:
                      section.key === "profissionais" ||
                      section.key === "tratamentos" ||
                      section.key === "spa-servicos" ||
                      section.key === "tecnologias" ||
                      section.key === "resultados-feedbacks" ||
                      section.key === "endereco"
                        ? undefined
                        : "primary.main",
                    opacity:
                      section.key === "profissionais" ||
                      section.key === "tratamentos" ||
                      section.key === "spa-servicos" ||
                      section.key === "tecnologias" ||
                      section.key === "resultados-feedbacks" ||
                      section.key === "endereco"
                        ? 1
                        : 0.2,
                    backgroundImage:
                      section.key === "profissionais"
                        ? "url(/image/profissionais/Laura.jpg)"
                        : section.key === "tratamentos"
                        ? "url(/image/tratamentos/drenagem.jpg)"
                        : section.key === "spa-servicos"
                        ? "url(/image/tratamentos/headspa1.jpg)"
                        : section.key === "tecnologias"
                        ? "url(/image/tecnologias/ultrassom.jpg)"
                        : section.key === "resultados-feedbacks"
                        ? "url(/image/resultados/antes_e_depois_1.jpg)"
                        : section.key === "endereco"
                        ? "url(/image/banners/recepcao.jpg)"
                        : undefined,
                    backgroundSize:
                      section.key === "profissionais" ||
                      section.key === "tratamentos" ||
                      section.key === "spa-servicos" ||
                      section.key === "tecnologias" ||
                      section.key === "resultados-feedbacks" ||
                      section.key === "endereco"
                        ? "cover"
                        : undefined,
                    backgroundPosition:
                      section.key === "spa-servicos"
                        ? "center 20%"
                        : section.key === "profissionais" ||
                          section.key === "tratamentos" ||
                          section.key === "tecnologias" ||
                          section.key === "resultados-feedbacks" ||
                          section.key === "endereco"
                        ? "center"
                        : undefined,
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
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
