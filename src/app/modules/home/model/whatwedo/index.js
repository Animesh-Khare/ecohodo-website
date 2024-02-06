import React, { useEffect, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
// import { Mousewheel, EffectFade, Pagination, Navigation } from "swiper/modules";

import whatwedo1 from "../../../../../assets/whatwedo1.svg";
import whatwedo2 from "../../../../../assets/whatwedo2.svg";
import whatwedo3 from "../../../../../assets/whatwedo3.svg";
import { Box, Stack, Typography, styled } from "@mui/material";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";
import Onlytext from "../../../../../shared/components/OnlyText";
import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import sideArrowImg from "../../../../../assets/Group 1.svg";

import "./style.css";

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

const Whatwedo = () => {
  // const [mouser, setMouser] = useState(true);

  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop < 1870) {
        setCurrentDiv(1);
      } else if (scrollTop < 1920) {
        setCurrentDiv(2);
      } else {
        setCurrentDiv(3);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "6%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
      }}
    >
      <Stack spacing={2}>
        <HeadingUnder>What WE Do</HeadingUnder>
        <Onlytext
          fontFamily={"Open Sans"}
          fontSize={"16px"}
          fontStyle={"italic"}
          fontWeight={600}
          lineHeight={"26px"}
          textAlign={"center"}
        >
          At Ecohodo, we're leveraging cutting-edge Artificial Intelligence to
          reshape the carbon offset landscape. Our focus areas—Afforestation and
          Reforestation, EV and EV Charging, and Waste Management—utilize
          innovative AI models for unprecedented efficiency and impact.
        </Onlytext>
      </Stack>

      <div>
        {currentDiv === 1 ? (
          <div className={`div-name ${currentDiv === 1 ? "active" : ""}`}>
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
          </div>
        ) : currentDiv === 2 ? (
          <div className={`div-name ${currentDiv === 2 ? "active" : ""}`}>
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
                      waste volumes, thereby allowing us to calculate potential
                      emission reductions with a high degree of accuracy.
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
          </div>
        ) : (
          <div className={`div-name ${currentDiv === 3 ? "active" : ""}`}>
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
                      the usage of EV charging stations, transforming this data
                      into real-time emission reduction estimations.
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
                  <BtnwithImg>Learn More</BtnwithImg>
                </Stack>
              </Box>
            </Stack>
          </div>
        )}
      </div>

      {/* <div
        style={{
          width: "100%",
          height: "100%",
          margin: "2px auto",
        }}
      >
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={1}
          effect={"fade"}
          loop={false}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, EffectFade, Navigation, Pagination]}
          onReachEnd={() => {
            // setMouser(false);
          }}
          onReachBeginning={() => {
            // setMouser(false);
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{
                background: `rgb(0,21,12)`,
              }}
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
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent={"flex-start"}
              alignItems={"center"}
              sx={{
                background: `rgb(0,21,12)`,
                boxShadow:
                  "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              }}
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
                      waste volumes, thereby allowing us to calculate potential
                      emission reductions with a high degree of accuracy.
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
          </SwiperSlide>
          <SwiperSlide>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                background: `rgb(0,21,12)`,
              }}
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
                      the usage of EV charging stations, transforming this data
                      into real-time emission reduction estimations.
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
                  <BtnwithImg>Learn More</BtnwithImg>
                </Stack>
              </Box>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            padding: "30px 2%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            borderRadius: "50px",
            background:
              "radial-gradient(51.03% 133% at 50% 50%, rgba(237, 248, 230, 0.10) 0%, rgba(237, 248, 230, 0.00) 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Onlytext
            fontFamily={"Open Sans"}
            fontSize={"20px"}
            fontStyle={"normal"}
            fontWeight={700}
            lineHeight={"36px"}
            textAlign={"center"}
          >
            Are you ready to be a part of the carbon offset revolution? With
            Ecohodo, you're not just offsetting carbon—you're advancing
            sustainability through AI.
          </Onlytext>
          <BtnwithImg>Join the Revolution</BtnwithImg>
        </Stack>
      </Box>
    </Box>
  );
};

export default Whatwedo;
