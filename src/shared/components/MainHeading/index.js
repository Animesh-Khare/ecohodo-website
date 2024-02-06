import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainHeading = ({ children, para }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        // padding: "50px 180px",
        padding: "3% 9%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",

          fontFamily: "Syncopate",
          fontSize: `${isMobile ? "30px" : isTablet ? "40px" : "50px"}`,

          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: "5px",

          background:
            "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backdropFilter: "blur(2px)",
        }}
      >
        {children}
      </Typography>
      <Typography
        sx={{
          color: "var(--Light-Green, #EDF8E6)",
          textAlign: "center",

          /* Discription 01 */
          fontFamily: "Open Sans",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "36px" /* 180% */,
        }}
      >
        {para}
      </Typography>
    </Box>
  );
};

export default MainHeading;
