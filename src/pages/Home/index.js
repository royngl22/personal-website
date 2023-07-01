import React, { useState } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SocialMedia from "../../components/SocialMedia";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Map from "../../components/Map";
import Backdrop from "@mui/material/Backdrop";

const HomeWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "5px",
  marginTop: "80px",
  paddingBottom: "100px",
  background: "rgb(255 255 255)",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "-50%",
  transform: "translate(-50%, -15%)",
  borderRadius: "5%",
  overflow: "hidden",
  display: "flex",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}));

const BioDataWrapper = styled(Box)(({ theme }) => ({
  // background: "#eaeaea",
  background: "rgb(243 246 246)",
  marginTop: "40px",
  padding: "20px 30px",
  borderRadius: "8px",
}));

const BioDataItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // justifyContent: "space-between",
}));

const Data = [
  {
    title: "Phone",
    value: "+6285157715228",
    icon: <PhoneIphoneIcon />,
    divider: true,
    color: "#ec407a",
  },
  {
    title: "Location",
    value: "Tangerang Selatan, Indonesia",
    icon: <LocationOnIcon />,
    divider: true,
    color: "#009688",
  },
  {
    title: "Email",
    value: "roy.natanaelngl02@gmail.com",
    icon: <EmailIcon />,
    divider: false,
    color: "#0091ea",
  },
];

export default function Home() {
  const [openMap, setOpenMap] = useState(false);

  const handleOnClick = (title, val) => {
    switch (title) {
      case "Location":
        setOpenMap(!openMap);
        break;

      case "Email":
        window.location.href = `mailto:${val}`;
        break;

      case "Phone":
        window.location.href = `tel:${val}`;
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          padding: "0 30px",
        }}
        open={openMap}
        onClick={() => setOpenMap(!openMap)}
      >
        <Map />
      </Backdrop>

      <HomeWrapper>
        <Box
          sx={{
            height: "120px",
            position: "relative",
          }}
        >
          <ImageWrapper>
            <img src="https://placehold.co/180x180" alt="profile-img" />
          </ImageWrapper>
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            color: "#212121",
            fontSize: "23px",
            textAlign: "center",
          }}
        >
          {process.env.REACT_APP_PROFILE_NAME}
        </Typography>

        <Typography
          sx={{
            // fontWeight: 700,
            color: "#616161",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Fullstack Developer
        </Typography>

        <SocialMedia />

        <Box sx={{ padding: "0 15px" }}>
          <BioDataWrapper>
            {Data.map((val, id) => (
              <Box
                key={id}
                sx={{
                  cursor: "pointer",
                }}
              >
                <BioDataItem
                  onClick={() => handleOnClick(val.title, val.value)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: val.color,
                      padding: "10px",
                      background: "#fff",
                      borderRadius: "5px",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    {val.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#616161",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      {val.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#212121",
                        fontSize: "14px",
                      }}
                    >
                      {val.value}
                    </Typography>
                  </Box>
                </BioDataItem>

                {val?.divider && <Divider sx={{ margin: "20px 0" }} />}
              </Box>
            ))}
          </BioDataWrapper>
        </Box>
      </HomeWrapper>
    </>
  );
}
