import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import textArrow from "../../../assets/Textarrow.svg";
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
  background: "linear-gradient(115deg, #00ffed 6.49%, #f6f 83.45%)",
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

const ArrowHeading = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  console.log("isMobile  ====>", isMobile);

  return (
    <Box
      className={`${isDesktop ? styles.parent_div : styles.mobile_parentdiv}`}
    >
      <ImgBox>
        <img src={textArrow} alt="" style={{ height: "100%" }}></img>
      </ImgBox>
      <CustomisedTypo>{text}</CustomisedTypo>
    </Box>
  );
};

export default ArrowHeading;
