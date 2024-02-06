import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import AboutUsText from "../../../../../shared/components/AboutUsText";
import sideArrow from "../../../../../assets/sideArrow.svg";

const CoreValues = () => {
  return (
    <Stack spacing={2}>
      <ArrowHeading text="Core Values" />
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
          <AboutUsText>Continuous technological advancement.</AboutUsText>
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
            Openness and honesty in every interaction and transaction.
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
            An unwavering commitment to the environment.
          </AboutUsText>
        </Grid>
      </Grid>

      <AboutUsText>
        We invite you to join us on this exciting journey towards a more
        sustainable future. Together, let’s redefine the landscape of carbon
        markets.
      </AboutUsText>
    </Stack>
  );
};

export default CoreValues;
