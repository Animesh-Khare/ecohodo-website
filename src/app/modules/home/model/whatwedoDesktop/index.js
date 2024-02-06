import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
// import scopeImgOne from "../../../../../assets/scopeOne.svg";
// import scopeImgTwo from "../../../../../assets/scopeTwo.svg";
// import scopeImgThree from "../../../../../assets/scopeThree.svg";
// import Scope1Industry from "../../../../../assets/scope1Industry.svg";
// import Scope2Industry from "../../../../../assets/scope2Industry.svg";
// import Scope3Industry from "../../../../../assets/scope3Industry.svg";

import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import Onlytext from "../../../../../shared/components/OnlyText";
// import ArrowHeading from "../../../../../shared/components/ArrowHeading";

import whatwedo1 from "../../../../../assets/whatwedo1.svg";
import whatwedo2 from "../../../../../assets/whatwedo2.svg";
import whatwedo3 from "../../../../../assets/whatwedo3.svg";
import sideArrowImg from "../../../../../assets/Group 1.svg";

import styles from "./styles.module.css";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";

const CustomizedTypoOne = styled(Typography)(() => ({
  alignSelf: "stretch",
  color: "var(--Light-Green, #EDF8E6)",
  fontFamily: "Open Sans",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));

const CustomizedTypoTwo = styled(Typography)(() => ({
  flex: "1 0 0",
  color: "var(--Light-Green, #EDF8E6)",
  fontFamily: "Open Sans",
  fontSize: "18px",
  fontStyle: "italic",
  fontWeight: 600,
  lineHeight: "30px",
  opacity: 0.7,
}));

const WhatwedoDesktop = () => {
  const [currScope, setCurrScope] = useState(1);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    if (scrollTop < 50) {
      setCurrScope(1);
    } else if (scrollTop < 100) {
      setCurrScope(2);
    } else {
      setCurrScope(3);
    }
  };

  return (
    <Box>
      <Stack spacing={4} p={3}>
        <HeadingUnder>What WE Do</HeadingUnder>
        <Onlytext
          fontFamily="Open Sans"
          fontSize="16px"
          fontStyle="italic"
          fontWeight="600"
          lineHeight="26px"
          textAlign="center"
        >
          At Ecohodo, we're leveraging cutting-edge Artificial Intelligence to
          reshape the carbon offset landscape. Our focus areas—Afforestation and
          Reforestation, EV and EV Charging, and Waste Management—utilize
          innovative AI models for unprecedented efficiency and impact.
        </Onlytext>
      </Stack>
      <Box
        className={styles.scrollable_div}
        sx={{ height: "680px", overflowY: "auto" }}
        onScroll={handleScroll}
      >
        <Stack>
          <Box
            sx={{
              bgcolor: "rgb(0,26,14)",
              zIndex: "5",
              pl: 2,
              pr: 2,
              position: "sticky",
              top: -1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <img
              src={
                currScope === 1
                  ? scopeImgOne
                  : currScope === 2
                  ? scopeImgTwo
                  : scopeImgThree
              }
              alt=""
              style={{
                width: "65%",
              }}
            ></img> */}
          </Box>

          {currScope === 1 ? (
            <Box
              sx={{
                p: 4,
                boxSizing: "border-box",
                height: "800px",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                <Box>
                  <img src={whatwedo1} alt=""></img>
                </Box>
                <Box sx={{ pl: 4 }}>
                  <Stack spacing={2}>
                    <CustomizedTypoOne>
                      Rooting Sustainability in Data-Driven Decisions
                    </CustomizedTypoOne>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Our AI models analyze satellite images to identify the
                        best locations for afforestation and reforestation,
                        ensuring optimal land use.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Plant health is closely monitored through advanced image
                        sensing, allowing for timely interventions.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        LiDAR sensors provide topographical data and even canopy
                        structure analyses.
                      </CustomizedTypoTwo>
                    </Stack>
                    <BtnwithImg>Learn More</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ) : currScope === 2 ? (
            <Box
              sx={{
                p: 4,
                pt: "80px",
                boxSizing: "border-box",
                height: "800px",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                <Box>
                  <img src={whatwedo2} alt=""></img>
                </Box>
                <Box sx={{ pl: 4 }}>
                  <Stack spacing={2}>
                    <CustomizedTypoOne>
                      Intelligent Solutions to Reduce Efforts for Generating
                      Carbon Credits from Waste Management Projects{" "}
                    </CustomizedTypoOne>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Navigating the complex landscape of waste management
                        carbon offsets just got easier with Ecohodo's AI-powered
                        solutions.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        We deploy volumetry-based AI tools to precisely measure
                        waste volumes, thereby allowing us to calculate
                        potential emission reductions with a high degree of
                        accuracy.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Our advanced analytics go beyond just volume; we analyze
                        waste types, diversion rates, and energy recovery
                        opportunities to provide a multi-dimensional view of
                        carbon offset capabilities.
                      </CustomizedTypoTwo>
                    </Stack>
                    <BtnwithImg>Learn More</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ) : (
            <Box
              sx={{
                p: 4,
                pt: "120px",
                boxSizing: "border-box",
                height: "800px",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>
                  <img src={whatwedo3} alt=""></img>
                </Box>
                <Box sx={{ pl: 4 }}>
                  <Stack spacing={2}>
                    <CustomizedTypoOne>
                      Driving Sustainable Mobility with AI-Powered Carbon Credit
                      Generation
                    </CustomizedTypoOne>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Our specialized AI systems focus on carbon credit
                        generation for electric vehicles and their charging
                        infrastructure.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        By leveraging GPS tracking, we collect critical data on
                        the usage of EV charging stations, transforming this
                        data into real-time emission reduction estimations.
                      </CustomizedTypoTwo>
                    </Stack>
                    <Stack gap={1} direction={"row"}>
                      <img src={sideArrowImg} alt=""></img>
                      <CustomizedTypoTwo>
                        Our advanced analytics scrutinize electricity
                        consumption patterns during EV charging, allowing us to
                        calculate the carbon credits that can be generated from
                        smarter energy use.
                      </CustomizedTypoTwo>
                    </Stack>
                    <BtnwithImg>Learn More</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default WhatwedoDesktop;
