"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Container, Stack } from "@mui/material";
import { usePathname } from "next/navigation";

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

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              color: "secondary.main",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            unaessential
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: "none", md: "flex" } }}>
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
                    color: isActive ? "primary.main" : "secondary.main",
                    bgcolor: isActive ? "secondary.main" : "transparent",
                    borderRadius: 999,
                    px: 2,
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
