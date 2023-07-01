import React from "react";
import Layout from "./pages/Layout";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const configTheme = createTheme({
  palette: {
    mode: "light",
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}
