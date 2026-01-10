import { Box, Container, Typography } from "@mui/material";

export function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{ mt: 8, borderTop: 1, borderColor: "divider", py: 4, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © unaessential. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
