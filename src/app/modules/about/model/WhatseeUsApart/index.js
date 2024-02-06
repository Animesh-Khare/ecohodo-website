import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import sideArrow from "../../../../../assets/sideArrow.svg";
import AboutUsText from "../../../../../shared/components/AboutUsText";

const WhatseeUs = () => {
  return (
    <Stack spacing={4}>
      <ArrowHeading text="What Sets Us Apart" />
      <Grid container>
        <Grid item xs={12} sm={3} md={4} lg={2.5}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
            <img src={sideArrow} alt=""></img>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "30px",

                background:
                  "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Innovation:
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={9.5}>
          <AboutUsText>
            From OCR to NLP to Lidar sensors, our AI models are at the forefront
            of precision and reliability.
          </AboutUsText>
        </Grid>

        <Grid item xs={12} sm={3} md={4} lg={2.5}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
            <img src={sideArrow} alt=""></img>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "30px",

                background:
                  "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transparency:{" "}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={9.5}>
          <AboutUsText>
            Our robust reporting techniques enable businesses to monitor and
            validate their environmental contributions.
          </AboutUsText>
        </Grid>

        <Grid item xs={12} sm={3} md={4} lg={2.5}>
          <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
            <img src={sideArrow} alt=""></img>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "30px",

                background:
                  "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sustainability:
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={9} md={8} lg={9.5}>
          <AboutUsText>
            Our comprehensive solutions span afforestation, reforestation,
            electric vehicle infrastructure, and waste management.
          </AboutUsText>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WhatseeUs;
