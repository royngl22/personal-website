import React from "react";
import { Box } from "@mui/material";
import Home from "../Home";
import Navigation from "../../components/Navigation";

export default function Layout() {
  return (
    <Box>
      <Home />
      <Navigation />
    </Box>
  );
}
