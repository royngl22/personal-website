import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

export default function Index(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        padding: "0 20px",
      }}
      open={open}
      onClick={handleClose}
    >
      {props.children}
    </Backdrop>
  );
}
