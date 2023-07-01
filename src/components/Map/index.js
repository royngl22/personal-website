import { Box } from "@mui/material";
import React from "react";

export default function Index() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="maps"
        width="120%"
        height="500px"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jalan%20Betawi%20Tangerang%20Selatan+(My%20Home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Box>
  );
}
