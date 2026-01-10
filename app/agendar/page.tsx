import { Box, Container, Typography } from "@mui/material";

export default function AgendarPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          agendar
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>
          Agende seu horário
        </Typography>

        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "75vh", md: "85vh" },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 1,
            bgcolor: "background.paper",
          }}
        >
          <iframe
            title="Agendamento - unaessential"
            src="https://online.maapp.com.br/UnaEssential"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Box>
      </Container>
    </Box>
  );
}
