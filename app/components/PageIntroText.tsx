import { Typography } from "@mui/material";
import type { ReactNode } from "react";

type PageIntroTextProps = {
  children: ReactNode;
  maxWidth?: number;
};

export function PageIntroText({ children, maxWidth = 700 }: PageIntroTextProps) {
  return (
    <Typography
      component="p"
      sx={{
        mt: 2,
        mb: 0,
        maxWidth,
        fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        fontSize: { xs: "0.9rem", md: "0.95rem" },
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: "0.005em",
        color: "rgba(55, 68, 48, 0.66)",
      }}
    >
      {children}
    </Typography>
  );
}
