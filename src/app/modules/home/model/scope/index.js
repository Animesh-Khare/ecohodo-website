import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";
import Onlytext from "../../../../../shared/components/OnlyText";

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

import ScopeOne from "../../../../../assets/scopeOne.svg";
import ScopeTwo from "../../../../../assets/scopeTwo.svg";
import ScopeThree from "../../../../../assets/scopeThree.svg";
import Scope1Industry from "../../../../../assets/scope1Industry.svg";
import Scope2Industry from "../../../../../assets/scope2Industry.svg";
import Scope3Industry from "../../../../../assets/scope3Industry.svg";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import BtnwithImg from "../../../../../shared/components/BtnwithImg";

import styles from "./style.module.css";

const Scope = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop < 3160) {
        setCurrentDiv(1);
      } else if (scrollTop < 3200) {
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
        padding: "80px 0px",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px",
      }}
    >
      <HeadingUnder>AI-Enabled Emission Calculator</HeadingUnder>
      <Onlytext
        fontFamily="Open Sans"
        fontSize="16px"
        fontStyle="italic"
        fontWeight="600"
        lineHeight="26px"
        textAlign="center"
      >
        Unveil the potential of automated carbon accounting with Ecohodo's
        AI-Enabled Emission Calculator. Our tool divides emissions into Scope 1,
        Scope 2, and Scope 3, utilizing advanced AI algorithms to drastically
        minimize human efforts required for reporting.
      </Onlytext>

      <div>
        {currentDiv === 1 ? (
          <div
            className={`${styles.div_name} ${
              currentDiv === 1 ? styles.active : ""
            }`}
          >
            <Stack>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeOne} alt="" style={{ height: "150px" }}></img>
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    pb: 1,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope1Industry}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"direct emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Automating Direct Emission Calculation with AI
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Our calculator uses AI models specifically designed to
                      interpret and process data from industrial sensors, fuel
                      consumption records, and even vehicular telematics.{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      The AI-driven analytics reduce manual entry errors and
                      significantly speed up the reporting process, making your
                      direct emission data both reliable and easily accessible.{" "}
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </div>
        ) : currentDiv === 2 ? (
          <div
            className={`${styles.div_name} ${
              currentDiv === 2 ? styles.active : ""
            }`}
          >
            <Stack>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeTwo} alt="" style={{ height: "150px" }}></img>
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    pb: 1,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope2Industry}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"indirect emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Simplify Your Energy-Based Emission Accounting.{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      We use machine learning algorithms to automatically
                      categorize and analyze energy purchase data, from
                      electricity consumption to district heating and cooling.
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Our AI models seamlessly integrate with your existing
                      systems, extracting relevant data to populate your Scope 2
                      emission reports effortlessly.
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </div>
        ) : (
          <div
            className={`${styles.div_name} ${
              currentDiv === 3 ? styles.active : ""
            }`}
          >
            <Stack>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeThree} alt="" style={{ height: "150px" }}></img>
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    pb: 1,

                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope3Industry}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"Other Emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Comprehensive Reporting for Complex Indirect Emissions{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Scope 3 emissions can often be the most challenging to
                      account for. Our AI models excel in capturing data from
                      varied sources such as travel, procurement, waste, and
                      more
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Using Natural Language Processing (NLP), our system even
                      scans and interprets text-based documents, like invoices
                      or travel receipts, to automatically include in the
                      emission calculations.
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </div>
        )}
      </div>

      {/* <div
        style={{
          width: "90%",
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Stack sx={{ background: "rgb(0,31,17)" }}>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeOne} alt=""></img>
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope1Industry}
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"direct emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Automating Direct Emission Calculation with AI
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Our calculator uses AI models specifically designed to
                      interpret and process data from industrial sensors, fuel
                      consumption records, and even vehicular telematics.{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      The AI-driven analytics reduce manual entry errors and
                      significantly speed up the reporting process, making your
                      direct emission data both reliable and easily accessible.{" "}
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack sx={{ background: "rgb(0,31,17)" }}>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeTwo} alt=""></img>
              </Box>
              <Stack direction={"row"}>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope2Industry}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"indirect emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Simplify Your Energy-Based Emission Accounting.{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      We use machine learning algorithms to automatically
                      categorize and analyze energy purchase data, from
                      electricity consumption to district heating and cooling.
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Our AI models seamlessly integrate with your existing
                      systems, extracting relevant data to populate your Scope 2
                      emission reports effortlessly.
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack sx={{ background: "rgb(0,31,17)" }}>
              <Box sx={{ m: "auto" }}>
                <img src={ScopeThree} alt=""></img>
              </Box>
              <Stack direction={"row"} s>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={Scope3Industry}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  ></img>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    p: 5,
                    boxSizing: "border-box",
                  }}
                >
                  <Stack alignItems={"flex-start"} gap={"30px"}>
                    <ArrowHeading text={"Other Emissions"} />
                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="30px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="normal"
                    >
                      Comprehensive Reporting for Complex Indirect Emissions{" "}
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Scope 3 emissions can often be the most challenging to
                      account for. Our AI models excel in capturing data from
                      varied sources such as travel, procurement, waste, and
                      more
                    </Onlytext>

                    <Onlytext
                      fontFamily="Open Sans"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="600"
                      lineHeight="166.667%"
                    >
                      Using Natural Language Processing (NLP), our system even
                      scans and interprets text-based documents, like invoices
                      or travel receipts, to automatically include in the
                      emission calculations.
                    </Onlytext>
                    <BtnwithImg>Request For Demo</BtnwithImg>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </Box>
  );
};

export default Scope;
