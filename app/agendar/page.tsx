import { Box } from "@mui/material";

export default function AgendarPage() {
  return (
    <Box
      sx={{
        m: 0,
        p: 0,
        width: "100%",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          m: 0,
          p: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
     >
        <iframe
          title="Agendamento - unaessential"
          src="https://online.maapp.com.br/UnaEssential"
          width="100%"
          height="100%"
          style={{ border: 0, overflow: "hidden" }}
          loading="lazy"
        />
      </Box>
    </Box>
  );
}
