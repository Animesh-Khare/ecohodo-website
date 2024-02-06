import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import InnovationBtn from "../../../../../assets/innovationBtn.svg";

const CustomizedHeading = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: "Syncopate",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  // lineHeight: "55px",
  background:
    "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const BtnText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Syncopate",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 700,
  // lineHeight: "55px",
  background:
    "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));

const LeftText = styled(Typography)(() => ({
  color: "var(--White, #FFF)",
  textAlign: "right",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontStyle: "italic",
  fontWeight: 600,
  lineHeight: "30px" /* 166.667% */,
}));

const RightTexts = styled(Typography)(() => ({
  color: "var(--White, #FFF)",

  fontFamily: "Open Sans",
  fontSize: "18px",
  fontStyle: "italic",
  fontWeight: 600,
  lineHeight: "30px" /* 166.667% */,
}));

const WhatseeCore = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "80px 5%",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              background: "rgba(237, 248, 230, 0.10)",
            }}
          >
            <CustomizedHeading>What Sets Us Apart</CustomizedHeading>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              background: "rgba(237, 248, 230, 0.10)",
            }}
          >
            <CustomizedHeading>Core Values</CustomizedHeading>
          </Box>
        </Grid>

        {/* line one */}

        <Grid item xs={12} sm={4}>
          <LeftText>
            From OCR to NLP to Lidar sensors, our AI models are at the forefront
            of precision and reliability.
          </LeftText>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            sx={{
              backgroundImage: `url(${InnovationBtn})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <BtnText>Innovation</BtnText>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RightTexts>Continuous technological advancement. </RightTexts>
        </Grid>

        {/* line two  */}

        <Grid item xs={12} sm={4}>
          <LeftText>
            Our robust reporting techniques enable businesses to monitor and
            validate their environmental contributions.
          </LeftText>
        </Grid>
        <Grid item xs={12} sm={4}>
          {" "}
          <Button
            fullWidth
            sx={{
              backgroundImage: `url(${InnovationBtn})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <BtnText>Transparency</BtnText>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RightTexts>
            Openness and honesty in every interaction and transaction.
          </RightTexts>
        </Grid>

        {/* line three  */}

        <Grid item xs={12} sm={4}>
          <LeftText>
            Our comprehensive solutions span afforestation, reforestation,
            electric vehicle infrastructure, and waste management.
          </LeftText>
        </Grid>
        <Grid item xs={12} sm={4}>
          {" "}
          <Button
            fullWidth
            sx={{
              backgroundImage: `url(${InnovationBtn})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <BtnText>Sustainability</BtnText>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RightTexts>An unwavering commitment to the environment.</RightTexts>
        </Grid>
      </Grid>

      <Typography
        sx={{
          color: "var(--White, #FFF)",
          textAlign: "center",

          fontFamily: "Open Sans",
          fontSize: "18px",
          fontStyle: "italic",
          fontWeight: 600,
          lineHeight: "30px",
        }}
      >
        We invite you to join us on this exciting journey towards a more
        sustainable future. Together, let’s redefine the landscape of carbon
        markets.
      </Typography>
    </Box>
  );
};

export default WhatseeCore;
