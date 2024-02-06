import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";
import Onlytext from "../../../../../shared/components/OnlyText";
import WhatwedoHeading from "../whatwedoHeading";

import whatwedoImg1 from "../../../../../assets/vertical/verticle_Afforestation and Reforestation Projects.png";
import whatwedoImg2 from "../../../../../assets/vertical/verticle_Waste Management Projects.png";
import whatwedoImg3 from "../../../../../assets/vertical/verticle_EV and EV Charging Projects.png";
import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import sideArrowImg from "../../../../../assets/Group 1.svg";

const CustomizedTypoOne = styled(Typography)(() => ({
  alignSelf: "stretch",
  color: "var(--Light-Green, #EDF8E6)",
  fontFamily: "Open Sans",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));

const CustomizedTypoTwo = styled(Typography)(() => ({
  flex: "1 0 0",
  color: "var(--Light-Green, #EDF8E6)",
  fontFamily: "Open Sans",
  fontSize: "15px",
  fontStyle: "italic",
  fontWeight: 600,
  lineHeight: "30px",
  opacity: 0.7,
}));

const WhatwedoMobile = () => {
  const [currScope, setCurrScope] = useState(1);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    if (scrollTop < 205) {
      setCurrScope(1);
    } else if (scrollTop < 655) {
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
      <Box sx={{ height: "710px", overflowY: "auto" }} onScroll={handleScroll}>
        <Stack>
          <Box
            sx={{
              bgcolor: "rgb(0,26,14)",
              zIndex: "5",
              pl: 2,
              pr: 2,
              position: "sticky",
              top: -1,
            }}
          >
            <img
              src={
                currScope === 1
                  ? whatwedoImg1
                  : currScope === 2
                  ? whatwedoImg2
                  : whatwedoImg3
              }
              alt=""
              style={{ width: "100%" }}
            ></img>
            <WhatwedoHeading
              text={
                currScope === 1
                  ? "Afforestation and Reforestation Projects"
                  : currScope === 2
                  ? "Waste Management Projects"
                  : "EV and EV Charging Projects"
              }
            />
          </Box>

          {currScope === 1 ? (
            <Box
              sx={{
                p: 4,
                boxSizing: "border-box",
                height: "1425px",
              }}
            >
              {/* <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope1Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack> */}
              <Stack spacing={2}>
                <CustomizedTypoOne>
                  Rooting Sustainability in Data-Driven Decisions
                </CustomizedTypoOne>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    Our AI models analyze satellite images to identify the best
                    locations for afforestation and reforestation, ensuring
                    optimal land use.
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
                <Stack direction={"row"} justifyContent={"center"}>
                  <BtnwithImg>Learn More</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          ) : currScope === 2 ? (
            <Box
              sx={{
                p: 4,
                pt: "245px",
                boxSizing: "border-box",
                height: "1425px",
              }}
            >
              {/* <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope2Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack> */}

              <Stack spacing={2}>
                <CustomizedTypoOne>
                  Intelligent Solutions to Reduce Efforts for Generating Carbon
                  Credits from Waste Management Projects{" "}
                </CustomizedTypoOne>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    Navigating the complex landscape of waste management carbon
                    offsets just got easier with Ecohodo's AI-powered solutions.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    We deploy volumetry-based AI tools to precisely measure
                    waste volumes, thereby allowing us to calculate potential
                    emission reductions with a high degree of accuracy.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    Our advanced analytics go beyond just volume; we analyze
                    waste types, diversion rates, and energy recovery
                    opportunities to provide a multi-dimensional view of carbon
                    offset capabilities.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack direction={"row"} justifyContent={"center"}>
                  <BtnwithImg>Learn More</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          ) : (
            <Box
              sx={{
                p: 4,
                pt: "725px",
                boxSizing: "border-box",
                height: "1425px",
              }}
            >
              {/* <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope3Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack> */}

              <Stack spacing={2}>
                <CustomizedTypoOne>
                  Driving Sustainable Mobility with AI-Powered Carbon Credit
                  Generation
                </CustomizedTypoOne>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    Our specialized AI systems focus on carbon credit generation
                    for electric vehicles and their charging infrastructure.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    By leveraging GPS tracking, we collect critical data on the
                    usage of EV charging stations, transforming this data into
                    real-time emission reduction estimations.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack gap={1} direction={"row"}>
                  <img src={sideArrowImg} alt=""></img>
                  <CustomizedTypoTwo>
                    Our advanced analytics scrutinize electricity consumption
                    patterns during EV charging, allowing us to calculate the
                    carbon credits that can be generated from smarter energy
                    use.
                  </CustomizedTypoTwo>
                </Stack>
                <Stack direction={"row"} justifyContent={"center"}>
                  <BtnwithImg>Learn More</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default WhatwedoMobile;
