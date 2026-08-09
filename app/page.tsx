"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import Face3Icon from "@mui/icons-material/Face3";
import Man4Icon from "@mui/icons-material/Man4";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./home.module.css";

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
    image: "/image/tratamentos/drenagem.jpg",
    icon: "spark",
    description:
      "Conheça a curadoria de tratamentos faciais e corporais da unaessential, pensados para cada fase da sua jornada.",
  },
  {
    key: "spa-servicos",
    title: "SPA & Day SPA",
    subtitle: "Momentos de pausa, relaxamento profundo e autocuidado.",
    href: "/tratamentos#spa",
    image: "/image/tratamentos/headspa1.jpg",
    icon: "spa",
    description:
      "Explore nossas experiências de SPA, Day SPA e rituais sensoriais com óleos essenciais, massagem relaxante e head spa.",
  },
  {
    key: "profissionais",
    title: "Profissionais",
    subtitle: "Uma equipe especializada, acolhedora e em constante atualização.",
    href: "/profissionais",
    image: "/image/profissionais/Laura.jpg",
    icon: "team",
    description:
      "Saiba mais sobre quem cuida de você: formações, especialidades e a filosofia de atendimento da nossa equipe.",
  },
  {
    key: "tecnologias",
    title: "Tecnologias",
    subtitle: "Equipamentos de ponta para tratamentos mais seguros e eficazes.",
    href: "/tecnologias",
    image: "/image/tecnologias/ultrassom.jpg",
    icon: "science",
    description:
      "Descubra as tecnologias que utilizamos e como elas potencializam os resultados dos tratamentos.",
  },
  {
    key: "resultados-feedbacks",
    title: "Resultados & Feedbacks",
    subtitle: "Antes e depois e relatos de quem já viveu a experiência.",
    href: "/resultados",
    image: "/image/resultados/antes_e_depois_1.jpg",
    icon: "results",
    description:
      "Veja exemplos de resultados e leia depoimentos reais sobre o cuidado, o ambiente e a experiência na unaessential.",
  },
  {
    key: "endereco",
    title: "Endereço",
    subtitle: "Encontre a unaessential e programe a sua visita.",
    href: "/endereco",
    image: "/image/banners/recepcao.jpg",
    icon: "location",
    description:
      "Informações de localização, acesso e canais de contato para facilitar a sua chegada até nós.",
  },
];

function SectionIcon({ icon }: { icon: string }) {
  if (icon === "spa") return <SpaRoundedIcon />;
  if (icon === "team") return <GroupsRoundedIcon />;
  if (icon === "science") return <ScienceRoundedIcon />;
  if (icon === "results") return <InsightsRoundedIcon />;
  if (icon === "location") return <LocationOnRoundedIcon />;
  return <AutoAwesomeRoundedIcon />;
}

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

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-home-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -45px" }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const banner = banners[currentBanner];
  const preferredVideoIndex = currentBanner % videoBanners.length;
  const activeVideoIndex = useMemo(() => {
    const len = videoBanners.length;
    if (!len) return 0;

    const anyReady = videoReady.some(Boolean);

    const idxBySrc = (src: string) =>
      videoBanners.findIndex((item) => item.src === src);

    const candidates: number[] = [];
    const pushIfValid = (idx: number) => {
      if (idx < 0 || idx >= len) return;
      if (!candidates.includes(idx)) candidates.push(idx);
    };

    if (currentBanner === 1) {
      pushIfValid(idxBySrc("/video/faceban.mp4"));
      pushIfValid(idxBySrc("/video/corpoban.mp4"));
    }

    if (currentBanner === 3) {
      pushIfValid(idxBySrc("/video/headspaban.mp4"));
      pushIfValid(idxBySrc("/video/geralban.mp4"));
    }

    pushIfValid(preferredVideoIndex);

    for (let i = 0; i < len; i += 1) pushIfValid(i);

    for (const idx of candidates) {
      if (videoErrored[idx]) continue;
      if (!anyReady) return idx;
      if (videoReady[idx]) return idx;
    }

    return 0;
  }, [currentBanner, preferredVideoIndex, videoReady, videoErrored]);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "calc(100svh - 68px)", md: "calc(100svh - 68px)" },
          minHeight: { xs: 740, md: 620 },
          display: "flex",
          alignItems: "center",
          color: "common.white",
          bgcolor: "#263620",
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
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: {
              xs: "linear-gradient(0deg, rgba(25,36,20,.96) 4%, rgba(25,36,20,.78) 56%, rgba(25,36,20,.18) 100%)",
              md: "linear-gradient(90deg, rgba(25,36,20,.9) 0%, rgba(25,36,20,.73) 40%, rgba(25,36,20,.19) 73%, rgba(25,36,20,.1) 100%)",
            },
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            px: { xs: "22px", md: "max(7vw, 28px)" },
            pb: { xs: "155px", md: "125px" },
            display: "flex",
            alignItems: { xs: "flex-end", md: "center" },
          }}
        >
            <Box
              key={currentBanner}
              sx={{
                width: { xs: "100%", md: "min(720px, 62vw)" },
                animation: "homeBannerRise .65s ease both",
                "@keyframes homeBannerRise": {
                  from: { opacity: 0, transform: "translateY(18px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                  color: "#dce4d4",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".2em",
                  "&::before": { content: '\"\"', width: 30, height: "1px", bgcolor: "currentColor" },
                }}
              >
                Unaessential · estética & bem-estar
              </Typography>
              <Typography
                component="h1"
                sx={{
                  m: 0,
                  maxWidth: 760,
                  color: "common.white",
                  fontSize: { xs: "clamp(46px, 13vw, 64px)", md: "clamp(58px, 7vw, 94px)" },
                  lineHeight: .98,
                  fontWeight: 500,
                  letterSpacing: "-.045em",
                  textShadow: "0 3px 24px rgba(0,0,0,.25)",
                }}
              >
                {banner.title}
              </Typography>
              <Typography sx={{ maxWidth: 590, my: 3.5, color: "rgba(255,255,255,.88)", fontSize: { xs: 15, md: 17 }, lineHeight: 1.75 }}>
                {banner.subtitle}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, gap: { xs: 2.2, sm: 3.2 } }}>
                <Button
                  component={Link}
                  href="/tratamentos"
                  startIcon={<SpaRoundedIcon />}
                  sx={{
                    minHeight: 50,
                    px: 2.8,
                    borderRadius: 99,
                    bgcolor: "#5f7350",
                    color: "common.white",
                    fontSize: 13,
                    fontWeight: 650,
                    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
                    letterSpacing: ".01em",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#526546", transform: "translateY(-2px)" },
                  }}
                >
                  Conhecer tratamentos
                </Button>
                <Button component={Link} href="/trabalhando_nisso" sx={{ p: 0, minWidth: 0, color: "common.white", borderRadius: 0, borderBottom: "1px solid rgba(255,255,255,.7)", fontFamily: "var(--font-geist-sans), Arial, sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: ".01em", textTransform: "none" }}>
                  Conhecer Criolipólise
                </Button>
              </Box>
            </Box>

            <Box sx={{ position: "absolute", left: { xs: 22, md: "max(7vw, 28px)" }, right: { xs: 22, md: "max(7vw, 28px)" }, bottom: { xs: 25, md: 32 }, pt: 2.3, borderTop: "1px solid rgba(255,255,255,.28)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: "10px 20px", md: "10px 30px" }, fontSize: { xs: 9, md: 10 }, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>
                <span><b style={{ color: "#dce4d4", marginRight: 8 }}>01</b>Estética integrada</span>
                <span><b style={{ color: "#dce4d4", marginRight: 8 }}>02</b>Experiências personalizadas</span>
                <span><b style={{ color: "#dce4d4", marginRight: 8 }}>03</b>Bem-estar em cada detalhe</span>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
                {banners.map((item, index) => (
                  <Box
                    component="button"
                    key={item.title}
                    onClick={() => setCurrentBanner(index)}
                    aria-label={`Exibir banner ${index + 1}`}
                    aria-current={currentBanner === index ? "true" : undefined}
                    sx={{ width: currentBanner === index ? 28 : 7, height: 7, p: 0, border: 0, borderRadius: 99, bgcolor: currentBanner === index ? "#dce4d4" : "rgba(255,255,255,.45)", cursor: "pointer", transition: ".25s ease" }}
                  />
                ))}
              </Box>
            </Box>
        </Container>
      </Box>

      <main className={styles.homeStory}>
        <section className={styles.introSection}>
          <div className={`${styles.introCopy} ${styles.reveal}`} data-home-reveal>
            <span className={styles.eyebrow}>Uma visão geral</span>
            <h2>Seu cuidado pode ser<br /><em>leve, completo e seu.</em></h2>
            <p>Na Unaessential, estética e bem-estar caminham juntos. Reunimos tratamentos, experiências de SPA, profissionais especializados e tecnologias para criar jornadas que respeitam sua individualidade.</p>
          </div>
          <div className={`${styles.introVisual} ${styles.revealScale}`} data-home-reveal>
            <div className={styles.introImage} role="img" aria-label="Ambiente acolhedor da Unaessential" />
            <span className={`${styles.orbitLabel} ${styles.orbitOne}`}><Man4Icon /> Corpo</span>
            <span className={`${styles.orbitLabel} ${styles.orbitTwo}`}><FaceRetouchingNaturalIcon /> Rosto</span>
            <span className={`${styles.orbitLabel} ${styles.orbitThree}`}><SelfImprovementIcon /> Bem-estar</span>
            <span className={`${styles.orbitLabel} ${styles.orbitFour}`}><Face3Icon /> Capilar</span>
          </div>
        </section>

        <section className={styles.journeySection}>
          <header className={`${styles.journeyHeader} ${styles.reveal}`} data-home-reveal>
            <span className={styles.eyebrow}>Explore a Unaessential</span>
            <h2>Descubra cada parte<br />da sua experiência.</h2>
          </header>

          <div className={styles.journeyList}>
            {sections.slice(0, 3).map((section, index) => (
              <article className={`${styles.journeyRow} ${index % 2 ? styles.journeyReverse : ""}`} key={section.key}>
                <Link href={section.href} className={`${styles.journeyVisual} ${styles.revealScale}`} data-home-reveal style={{ backgroundImage: `url(${section.image})` }} aria-label={`Conhecer ${section.title}`}>
                  <span className={styles.journeyIcon}><SectionIcon icon={section.icon} /></span>
                  <span className={styles.journeyNumber}>0{index + 1}</span>
                </Link>
                <div className={`${styles.journeyCopy} ${styles.reveal}`} data-home-reveal>
                  <span className={styles.eyebrow}>{section.title}</span>
                  <h3>{section.subtitle}</h3>
                  <p>{section.description}</p>
                  <Link href={section.href} className={styles.textLink}>Explorar {section.title.toLowerCase()} <ArrowForwardRoundedIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.pauseSection}>
          <div className={`${styles.pauseOrb} ${styles.revealScale}`} data-home-reveal>
            <Image src="/logo/icon_unaessential.svg" alt="Símbolo Unaessential" width={28} height={51} />
          </div>
          <p className={styles.reveal} data-home-reveal>“Mais do que procedimentos, criamos experiências de cuidado que unem <em>bem-estar</em>, <em>confiança</em> e <em>resultados</em> para você.”</p>
          <span className={styles.reveal} data-home-reveal>Unaessential</span>
        </section>

        <section className={`${styles.journeySection} ${styles.journeyContinuation}`}>
          <div className={styles.journeyList}>
            {sections.slice(3).map((section, index) => (
              <article className={`${styles.journeyRow} ${index % 2 === 0 ? styles.journeyReverse : ""}`} key={section.key}>
                <Link href={section.href} className={`${styles.journeyVisual} ${styles.revealScale}`} data-home-reveal style={{ backgroundImage: `url(${section.image})` }} aria-label={`Conhecer ${section.title}`}>
                  <span className={styles.journeyIcon}><SectionIcon icon={section.icon} /></span>
                  <span className={styles.journeyNumber}>0{index + 4}</span>
                </Link>
                <div className={`${styles.journeyCopy} ${styles.reveal}`} data-home-reveal>
                  <span className={styles.eyebrow}>{section.title}</span>
                  <h3>{section.subtitle}</h3>
                  <p>{section.description}</p>
                  <Link href={section.href} className={styles.textLink}>Explorar {section.title.toLowerCase()} <ArrowForwardRoundedIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.homeCta}>
          <div className={`${styles.ctaShape} ${styles.revealScale}`} data-home-reveal>
            <Image src="/logo/logo_una.svg" alt="Unaessential" width={126} height={52}  />
          </div>
          <div className={`${styles.ctaCopy} ${styles.reveal}`} data-home-reveal>
            <span className={styles.eyebrowLight}>Comece a sua jornada</span>
            <h2>Vamos encontrar o cuidado ideal para você?</h2>
            <p>Agende uma avaliação e converse com nossa equipe sobre seus objetivos.</p>
            <div className={styles.ctaActions}>
              <Button component={Link} href="/agendar" endIcon={<ArrowForwardRoundedIcon />} className={styles.ctaButton}>Agendar horário</Button>
              <Button component="a" href="https://api.whatsapp.com/send/?phone=5548991904131&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" startIcon={<WhatsAppIcon />} className={styles.ctaOutlineButton}>Entre em contato</Button>
            </div>
          </div>
        </section>
      </main>
    </Box>
  );
}
