import React, { useState } from "react";
import Layout from "./pages/Layout";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SwitchDarkMode from "./components/Switch/SwitchDarkMode";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("dark") === "true"
  );

  const configTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#d50000", //merah
        light: "#4a148c", //ungu
        dark: "#009688", //ijo
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  const theme = responsiveFontSizes(configTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SwitchDarkMode toggle={(val) => setIsDarkMode(val)} />
      <Layout />
    </ThemeProvider>
  );
}
