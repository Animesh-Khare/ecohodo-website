import { Dialog } from "@mui/material";
import React from "react";

const DialogBox = ({ handleClose, open, children }) => {
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        backdropFilter: "blur(5px)",

        "& .MuiPaper-root": {},
        "& .MuiDialog-paper": {
          background: "transparent",
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default DialogBox;
