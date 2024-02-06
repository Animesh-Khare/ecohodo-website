import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
// import aidmrv from "../../../../../assets/Aidmrv.svg";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import Onlytext from "../../../../../shared/components/OnlyText";
import { useTheme } from "@emotion/react";

const Aidmrv = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={`${isDesktop ? styles.box_tag : ""}`}>
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Stack spacing={2}>
          <ArrowHeading text={"AI + DMRV"} />
          <Typography
            sx={{
              color: "var(--Light-Green, #edf8e6)",
              fontFamily: "Open Sans",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              [theme.breakpoints.down("sm")]: {
                fontSize: "21px",
              },
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
              },
            }}
          >
            Transforming Carbon Market
          </Typography>
          <Onlytext
            fontFamily="Open Sans"
            fontSize={isMobile ? "16px" : "18px"}
            textAlign={!isDesktop ? "center" : "left"}
            fontStyle="italic"
            fontWeight={600}
            lineHeight="30px"
          >
            Revolutionizing Carbon offset projects and Carbon Emission
            reporting, monitoring, and verification with cutting-edge AI models.
          </Onlytext>
        </Stack>
        <Stack
          direction={"row"}
          p={2}
          justifyContent={isDesktop ? "flex-start" : "center"}
        >
          <BtnwithImg>Request For Demo</BtnwithImg>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Aidmrv;
