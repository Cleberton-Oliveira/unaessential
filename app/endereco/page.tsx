import { Container, Typography, Box, Stack } from "@mui/material";

export default function EnderecoPage() {
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
          spacing={4}
          sx={{ mt: 3, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ minWidth: 260 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Clínica unaessential
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Av. Rio Branco, 354 - Sala 803 - Centro
            </Typography>
            <Typography variant="body1">Florianópolis - SC</Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              minHeight: 320,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 1,
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
        </Stack>
      </Container>
    </Box>
  );
}
