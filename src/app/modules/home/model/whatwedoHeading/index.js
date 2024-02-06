import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import textArrow from "../../../../../assets/whatwedoArrow.svg";
import styles from "./style.module.css";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

const CustomisedTypo = styled(Typography)(({ theme }) => ({
  fontFamily: "Syncopate",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "uppercase",
  background:
    "linear-gradient(139.29deg, #DAFF17 -14.22%, #FFAF2E 45.6%, #E400FF 107.97%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.up("sm")]: {
    fontSize: "36px",
  },
}));

const ImgBox = styled(Box)(({ theme }) => ({
  height: "21px",

  [theme.breakpoints.up("sm")]: {
    height: "36px",
  },
}));

const WhatwedoHeading = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(["isMobile  ====>", isMobile]);

  return (
    <Box className={styles.parent_div}>
      <ImgBox>
        <img src={textArrow} alt="" style={{ height: "100%" }}></img>
      </ImgBox>
      <CustomisedTypo>{text}</CustomisedTypo>
    </Box>
  );
};

export default WhatwedoHeading;
