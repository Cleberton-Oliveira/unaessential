"use client";

import { Fab, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5548991904131&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20";

export function FloatingWhatsappButton() {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: (theme) => theme.zIndex.tooltip + 1,
      }}
    >
      <Fab
        color="success"
        aria-label="Fale conosco pelo WhatsApp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          bgcolor: "#25D366",
          ":hover": {
            bgcolor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Stack>
  );
}
