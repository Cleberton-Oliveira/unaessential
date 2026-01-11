"use client";

import { Container, Typography, Box, Stack, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import MapIcon from "@mui/icons-material/Map";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function EnderecoPage() {
  const enderecoFormatado =
    "Av. Rio Branco, 354 - Sala 803 - Centro, Florianópolis - SC, 88015-200";

  const handleCopyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(enderecoFormatado).catch(() => {
        // fallback silencioso se der erro
      });
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          endereço
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Onde estamos
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 3, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "33.333%" },
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: "background.paper",
                p: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Clínica unaessential
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontSize: "1.1rem" }}>
                Av. Rio Branco, 354 - Sala 803 - Centro
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                Florianópolis - SC
              </Typography>

              <Box
                sx={{
                  mt: 16,
                  display: "flex",
                  height: 48,
                  borderRadius: 2,
                  border: "2 solid #ccc",
                  overflow: "hidden",
  
                }}
              >
                <IconButton
                  aria-label="Copiar endereço"
                  color="primary"
                  onClick={handleCopyAddress}
                  sx={{
                    flex: 1,
                    borderRadius: 0,
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>

                <IconButton
                  aria-label="Abrir no Uber"
                  color="primary"
                  component="a"
                  href="https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=Av.%20Rio%20Branco,%20354%20-%20Sala%20803%20-%20Centro,%20Florian%C3%B3polis%20-%20SC,%2088015-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flex: 1,
                    borderRadius: 0,
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <LocalTaxiIcon />
                </IconButton>

                <IconButton
                  aria-label="Abrir no Google Maps"
                  color="primary"
                  component="a"
                  href="https://www.google.com/maps/place/Est%C3%A9tica,+Sa%C3%BAde+Integrativa+%26+SPA+-+UnaEssential/data=!4m2!3m1!1s0x0:0x39aa12bac372b03f?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flex: 1,
                    borderRadius: 0,
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <MapIcon />
                </IconButton>

                <IconButton
                  aria-label="Abrir no Waze"
                  color="primary"
                  component="a"
                  href="https://waze.com/ul?q=Av.%20Rio%20Branco,%20354%20-%20Sala%20803%20-%20Centro,%20Florian%C3%B3polis%20-%20SC,%2088015-200&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flex: 1,
                    borderRadius: 0,
                  }}
                >
                  <NavigationIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "66.666%" },
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 1,
                height: 320,
              }}
            >
              <iframe
                title="Mapa - unaessential"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.901397631423!2d-48.55733002471387!3d-27.59237767622432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527381f5f5da1d9%3A0xf4dd317e14956ca9!2sAv.%20Rio%20Branco%2C%20354%20-%20Sala%20803%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-200!5e0!3m2!1spt-BR!2sbr!4v1736512770000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Stack>

      </Container>
    </Box>
  );
}
