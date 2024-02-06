import { Typography } from "@mui/material";
import React from "react";

const Onlytext = ({
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign,
  children,
}) => {
  return (
    <Typography
      sx={{
        color: "var(--Light-Green, #EDF8E6)",
        textAlign,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        lineHeight,
        opacity: 0.7,
      }}
    >
      {children}
    </Typography>
  );
};

export default Onlytext;
