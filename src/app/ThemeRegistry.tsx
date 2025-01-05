"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import { cinzel, ebGaramond } from "../fonts";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#F7F4EC",
    },
    secondary: {
      main: "#2F4F2F",
    },
  },
  typography: {
    allVariants: {
      color: "#262626",
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      fontFamily: `${cinzel.style.fontFamily}, serif`,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      fontFamily: `${cinzel.style.fontFamily}, serif`,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      fontFamily: `${cinzel.style.fontFamily}, serif`,
    },
    fontFamily: `${ebGaramond.style.fontFamily}, serif`,
    fontSize: 15,
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
