"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Tratamentos & SPA", href: "/tratamentos" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Tecnologias", href: "/tecnologias" },
  { label: "Resultados", href: "/resultados" },
  { label: "Endereço", href: "/endereco" },
];

export function MainHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    const frame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const solidHeader = !isHome || scrolled;

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        elevation={0}
        sx={{
          color: "common.white",
          bgcolor: solidHeader ? "rgba(82, 101, 69, 0.97)" : "rgba(17, 22, 15, 0.48)",
          borderBottom: "1px solid",
          borderColor: solidHeader ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.14)",
          boxShadow: solidHeader ? "0 10px 30px rgba(34, 43, 29, 0.16)" : "none",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transition: "background-color 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 68 },
              gap: { xs: 1.25, lg: 2.5 },
            }}
          >
            <Box
              component={Link}
              href="/"
              aria-label="Ir para o início"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo/logo.svg"
                alt="Unaessential"
                width={176}
                height={44}
                style={{ width: "clamp(144px, 16vw, 176px)", height: "auto", maxHeight: 36 }}
                priority
              />
            </Box>

            <Box
              component="nav"
              aria-label="Navegação principal"
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: 0.9,
                flex: 1,
              }}
            >
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    color="inherit"
                    sx={{
                      minWidth: 0,
                      px: 1.35,
                      py: 0.85,
                      borderRadius: 999,
                      position: "relative",
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      fontFamily: "var(--font-geist-sans), Arial, sans-serif",
                      fontSize: 13.25,
                      lineHeight: 1.2,
                      letterSpacing: "0.015em",
                      fontWeight: active ? 650 : 500,
                      color: active ? "#fffaf1" : "rgba(255,255,255,0.82)",
                      bgcolor: active ? "rgba(232, 223, 207, 0.12)" : "transparent",
                      transition: "color 220ms ease, background-color 220ms ease",
                      "&::after": {
                        content: '\"\"',
                        position: "absolute",
                        left: 13,
                        right: 13,
                        bottom: 4,
                        height: 2,
                        borderRadius: 999,
                        bgcolor: "#e8dfcf",
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                        opacity: active ? 1 : 0,
                        transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease",
                      },
                      "&:hover": {
                        bgcolor: "rgba(232, 223, 207, 0.10)",
                        color: "common.white",
                        "&::after": {
                          transform: active ? "scaleX(1)" : "scaleX(0.45)",
                          opacity: active ? 1 : 0.5,
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                component={Link}
                href="/agendar"
                variant="contained"
                startIcon={<EventAvailableIcon fontSize="small" />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  whiteSpace: "nowrap",
                  textTransform: "none",
                  borderRadius: 999,
                  px: { sm: 1.75, lg: 2.25 },
                  py: 0.9,
                  background:
                    "linear-gradient(135deg, rgba(255, 250, 241, 0.74), rgba(232, 223, 207, 0.56))",
                  border: "1px solid rgba(255, 255, 255, 0.36)",
                  backdropFilter: "blur(11px)",
                  WebkitBackdropFilter: "blur(11px)",
                  color: "#263020",
                  fontFamily: "var(--font-geist-sans), Arial, sans-serif",
                  letterSpacing: "0.01em",
                  fontWeight: 700,
                  boxShadow: "none",
                  transition:
                    "background-color 180ms ease, border-color 180ms ease, transform 180ms ease",
                  "& .MuiButton-startIcon": {
                    width: 25,
                    height: 25,
                    ml: -0.75,
                    mr: 1,
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(95, 115, 80, 0.14)",
                  },
                  "& .MuiButton-startIcon svg": { fontSize: 16 },
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(255, 250, 241, 0.86), rgba(232, 223, 207, 0.68))",
                    borderColor: "rgba(255, 255, 255, 0.54)",
                    boxShadow: "none",
                    transform: "translateY(-1px)",
                  },
                  "&:active": { transform: "translateY(0) scale(0.98)" },
                }}
              >
                Agendar
              </Button>

              <IconButton
                color="inherit"
                aria-label="Abrir menu de navegação"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                sx={{
                  display: { xs: "inline-flex", lg: "none" },
                  width: 42,
                  height: 42,
                  border: "1px solid rgba(255,255,255,0.18)",
                  bgcolor: "rgba(255,255,255,0.08)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.14)" },
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {!isHome ? <Box aria-hidden="true" sx={{ height: { xs: 64, md: 68 } }} /> : null}

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.tooltip + 2 }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "min(88vw, 340px)", sm: 360 },
              bgcolor: "#fcf7ef",
              backgroundImage: "none",
            },
          },
        }}
      >
        <Box sx={{ p: 2.5, pt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <Image
              src="/logo/logo_completa_verde.svg"
              alt="Unaessential"
              width={164}
              height={48}
              style={{ width: 164, height: "auto", maxHeight: 42 }}
            />
            <IconButton aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2.25, borderColor: "rgba(95, 115, 80, 0.16)" }} />

          <Typography variant="overline" color="primary" sx={{ letterSpacing: 1.8, px: 1.5 }}>
            Navegue
          </Typography>
          <List component="nav" aria-label="Menu de navegação" sx={{ mt: 0.75, p: 0 }}>
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <ListItemButton
                  key={item.href}
                  component={Link}
                  href={item.href}
                  selected={active}
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    mb: 0.5,
                    px: 1.5,
                    py: 1.1,
                    borderRadius: 2.5,
                    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
                    color: active ? "primary.main" : "text.primary",
                    "&.Mui-selected": { bgcolor: "rgba(95, 115, 80, 0.10)" },
                    "&.Mui-selected:hover": { bgcolor: "rgba(95, 115, 80, 0.14)" },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        fontFamily: "var(--font-geist-sans), Arial, sans-serif",
                        fontWeight: active ? 700 : 500,
                        fontSize: 15.5,
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>

          <Button
            component={Link}
            href="/agendar"
            variant="contained"
            fullWidth
            startIcon={<EventAvailableIcon />}
            onClick={() => setMenuOpen(false)}
            sx={{ mt: 2.5, py: 1.25, borderRadius: 999, textTransform: "none", fontWeight: 700 }}
          >
            Agendar agora
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
