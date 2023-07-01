import React from "react";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
  "& :hover": {
    cursor: "pointer",
  },

  "& :hover, & :active": {
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
  },
}));

const SocialMediaData = [
  { name: "FB", icon: <FacebookIcon />, color: "#2196f3", value: "none" },
  {
    name: "WA",
    icon: <WhatsAppIcon />,
    color: "#4caf50",
    value: "https://wa.me/+6285157715228",
  },
  { name: "LkIn", icon: <LinkedInIcon />, color: "#0d47a1", value: "ongoing" },
  { name: "Twt", icon: <TwitterIcon />, color: "#2196f3", value: "none" },
];

const MySwal = withReactContent(Swal);

export default function SocialMedia() {
  const { mode } = useTheme().palette;

  const handleOnClick = (val) => {
    let cb = (text) => {
      MySwal.fire({
        title: <p>Oops...</p>,
        text: text,
        icon: "error",
      });
    };

    switch (val) {
      case "ongoing":
        cb("Akunnya masih di rapihin dulu ya.. 😄😄");
        break;

      case "none":
        cb("Engga punya akunnya.. 😄😄");
        break;

      default:
        window.location.href = val;
        break;
    }
  };

  return (
    <Wrapper>
      {SocialMediaData.map((val, id) => (
        <Box
          key={id}
          sx={{
            color: val.color,
            borderRadius: "5px",
            display: "flex",
            padding: "10px",
            // bgcolor: "rgb(243 246 246)",
            bgcolor: mode === "dark" ? "#bdbdbd" : "rgb(243 246 246)",
          }}
          onClick={() => handleOnClick(val.value)}
        >
          {val.icon}
        </Box>
      ))}
    </Wrapper>
  );
}
