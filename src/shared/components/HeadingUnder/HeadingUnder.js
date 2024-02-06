import { Box } from "@mui/material";
import React from "react";
import brush from "../../../assets/brush.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeadingUnder = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
      }}
    >
      <p
        style={{
          textAlign: "center",

          fontFamily: "Syncopate",
          fontSize: `${isMobile ? "21px" : isTablet ? "30px" : "36px"}`,
          fontStyle: "normal",
          fontWeight: 700,
          // lineHeight: "55px",

          background:
            "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
        }}
      >
        {children}
      </p>
      <img
        src={brush}
        alt=""
        style={{
          width: `${isMobile ? "140px" : isTablet ? "200px" : "240px"}`,
        }}
      ></img>
    </Box>
  );
};

export default HeadingUnder;
