import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  "& .switch-container": {
    position: "relative",
    display: "inline-block",
    width: "3.5em",
    height: "2em",
  },

  /* Hide default HTML checkbox */
  "& .switch-container input": {
    opacity: 0,
    width: 0,
    height: 0,
  },

  /* The slider */
  "& .switch-container .slider": {
    "--background": "linear-gradient(to right, #090613ef, #18151f)",
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "var(--background)",
    transition: "background-color 0.5s",
    borderRadius: "30px",
  },

  "& .switch-container .slider:before": {
    position: "absolute",
    content: "''",
    height: "1.4em",
    width: "1.4em",
    borderRadius: "50%",
    left: "10%",
    bottom: "15%",
    boxShadow: "inset 15px -4px 0px 15px #eaeaea",
    background: "var(--background)",
    transition: "transform 0.5s, box-shadow 0.5s",
  },

  "& .switch-container input:checked + .slider": {
    backgroundColor: "#000",
  },

  "& .switch-container input:checked + .slider:before": {
    transform: "translateX(100%)",
    boxShadow: "inset 8px -4px 0px 0px #f8f8f4",
    "&:active": {
      background: "red",
    },
  },
}));
export default function SwitchDarkMode({ toggle }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("dark") === "true"
  );

  const handleOnChange = (val) => {
    localStorage.setItem("dark", val);
    setIsChecked(val);
    toggle(val);
  };

  return (
    <Wrapper>
      <label className="switch-container">
        <input
          defaultChecked={isChecked}
          type="checkbox"
          onChange={(e) => handleOnChange(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </Wrapper>
  );
}
