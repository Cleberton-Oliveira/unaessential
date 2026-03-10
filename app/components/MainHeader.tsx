"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Tratamentos & SPA", href: "/tratamentos" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Tecnologias", href: "/tecnologias" },
  { label: "Resultados & Feedbacks", href: "/resultados" },
  { label: "Endereço", href: "/endereco" },
];

export function MainHeader() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const [overBanner, setOverBanner] = useState<boolean>(isHome);

  useEffect(() => {
    if (!isHome) {
      setOverBanner(false);
      return;
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.80;
      setOverBanner(window.scrollY < threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: isHome && overBanner ? "rgba(0, 0, 0, 0.35)" : "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            pt: 0.75,
            pb: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* MENU MOBILE */}
          <IconButton
            edge="start"
            color="secondary"
            aria-label="abrir menu"
            onClick={handleOpenMobileMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/logo/logo.svg"
              alt="Logo Unaessential"
              width={160}
              height={40}
              style={{ height: "auto", width: "auto", maxHeight: 34 }}
              priority
            />
          </Box>

          {/* MENU DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              ml: 4,
            }}
          >
            <Stack direction="row" spacing={1.5}>
              {navItems.map((item) => {
                // considera "/" como ativo apenas na home exata; demais usam prefixo
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    color="inherit"
                    sx={{
                      textTransform: "none",
                      fontSize: 14,
                      color: isActive ? "#e8dfcf" : "common.white",
                      fontWeight: isActive ? 600 : 500,
                      borderBottom: isActive ? "2px solid #e8dfcf" : "2px solid transparent",
                      borderRadius: 0,
                      px: 2,
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>

            <Button
              component={Link}
              href="/agendar"
              variant="contained"
              color="secondary"
              startIcon={<EventAvailableIcon />}
              sx={{
                textTransform: "none",
                fontSize: 14,
                borderRadius: 999,
                px: 2,
                ml: "auto",
                py: 0.5,
                bgcolor: "#e8dfcf",
                color: "#1a1a1a",
                "&:hover": {
                  bgcolor: "#d8cdbb",
                },
              }}
            >
              Agendar agora
            </Button>
          </Box>

          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={mobileMenuOpen}
            onClose={handleCloseMobileMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <MenuItem
                  key={item.href}
                  component={Link}
                  href={item.href}
                  onClick={handleCloseMobileMenu}
                  sx={{
                    fontSize: 14,
                    color: isActive ? "primary.main" : "text.primary",
                  }}
                >
                  {item.label}
                </MenuItem>
              );
            })}
            <MenuItem
              component={Link}
              href="/agendar"
              onClick={handleCloseMobileMenu}
              sx={{ fontSize: 14, fontWeight: 500, mr: -10}}
            >
              Agendar agora
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
