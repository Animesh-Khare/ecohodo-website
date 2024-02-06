import { Typography } from "@mui/material";
import React from "react";

const AboutUsText = ({ children }) => {
  return (
    <Typography
      sx={{
        alignSelf: "stretch",
        color: "var(--Light-Green, #EDF8E6)",

        fontFamily: "Open Sans",
        fontSize: "18px",
        fontStyle: "italic",
        fontWeight: "600",
        lineHeight: "30px" /* 166.667% */,
        opacity: 0.7,
      }}
    >
      {children}
    </Typography>
  );
};

export default AboutUsText;
