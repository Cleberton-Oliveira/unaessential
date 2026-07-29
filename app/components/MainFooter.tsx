import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";

export function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 0,
        borderTop: 0,
        borderColor: "divider",
        py: 1.7,
        bgcolor: "#5f7350",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#e8dfcf" }}>
            © unaessential. Todos os direitos reservados.
          </Typography>

          <Stack direction="row" spacing={1} sx={{ ml: { xs: 0, sm: 2 } }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/unaessential"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="inherit"
              sx={{ color: "#e8dfcf" }}
              aria-label="Instagram @unaessential"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/unaessential"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="inherit"
              sx={{ color: "#e8dfcf" }}
              aria-label="Facebook @unaessential"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@unaessential"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="inherit"
              sx={{ color: "#e8dfcf" }}
              aria-label="TikTok @unaessential"
            >
              <TikTokIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/@unaessential"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="inherit"
              sx={{ color: "#e8dfcf" }}
              aria-label="YouTube @unaessential"
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="/endereco"
              size="small"
              aria-label="Ver endereço"
              color="inherit"
              sx={{ color: "#e8dfcf" }}
            >
              <PlaceIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
