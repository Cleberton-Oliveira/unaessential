"use client";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5f7350", // verde principal
    },
    secondary: {
      main: "#fdfdfd", // bege clara
    },
    background: {
      default: "#fcf7ef", // branco areia de fundo das páginas
      paper: "#ffffff",
    },
    text: {
      primary: "#171717",
      secondary: "#4b4b4b",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Lora", "Alegreya", serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.7,
    },
  },
});

interface MuiThemeProviderProps {
  children: ReactNode;
}

export function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
