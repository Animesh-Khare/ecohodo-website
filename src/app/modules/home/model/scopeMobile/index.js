import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import scopeImgOne from "../../../../../assets/ScopesMobile/Scopes 01.png";
import scopeImgTwo from "../../../../../assets/ScopesMobile/Scopes 02.png";
import scopeImgThree from "../../../../../assets/ScopesMobile/Scopes 03.png";
import Scope1Industry from "../../../../../assets/scope1Industry.svg";
import Scope2Industry from "../../../../../assets/scope2Industry.svg";
import Scope3Industry from "../../../../../assets/scope3Industry.svg";

import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import Onlytext from "../../../../../shared/components/OnlyText";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";

import "./style.css";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";
import { useTheme } from "@emotion/react";

const ScopeMobile = () => {
  const theme = useTheme();
  const [currScope, setCurrScope] = useState(1);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    if (scrollTop < 430) {
      setCurrScope(1);
    } else if (scrollTop < 905) {
      setCurrScope(2);
    } else {
      setCurrScope(3);
    }
  };

  return (
    <Box>
      <Stack spacing={4} p={3}>
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
          AI-Enabled Emission Calculator. Our tool divides emissions into Scope
          1, Scope 2, and Scope 3, utilizing advanced AI algorithms to
          drastically minimize human efforts required for reporting.
        </Onlytext>
      </Stack>
      <Box sx={{ height: "700px", overflowY: "auto" }} onScroll={handleScroll}>
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
                  ? scopeImgOne
                  : currScope === 2
                  ? scopeImgTwo
                  : scopeImgThree
              }
              alt=""
              style={{ width: "100%" }}
            ></img>
          </Box>
          `
          {currScope === 1 ? (
            <Box
              sx={{
                p: 4,
                boxSizing: "border-box",
                height: "1840px",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope1Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack>
              <Stack alignItems={"flex-start"} gap={"30px"}>
                <ArrowHeading text={"direct emissions"} />

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
                  }}
                >
                  Automating Direct Emission Calculation with AI
                </Typography>

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
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ width: "100%" }}
                >
                  <BtnwithImg>Request For Demo</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          ) : currScope === 2 ? (
            <Box
              sx={{
                p: 4,
                pt: "470px",
                boxSizing: "border-box",
                height: "1840px",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope2Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack>

              <Stack
                alignItems={"flex-start"}
                justifyContent="flex-end"
                gap={"30px"}
              >
                <ArrowHeading text={"indirect emissions"} />

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
                  }}
                >
                  Simplify Your Energy-Based Emission Accounting.{" "}
                </Typography>

                <Onlytext
                  fontFamily="Open Sans"
                  fontSize="18px"
                  fontStyle="italic"
                  fontWeight="600"
                  lineHeight="166.667%"
                >
                  We use machine learning algorithms to automatically categorize
                  and analyze energy purchase data, from electricity consumption
                  to district heating and cooling.
                </Onlytext>

                <Onlytext
                  fontFamily="Open Sans"
                  fontSize="18px"
                  fontStyle="italic"
                  fontWeight="600"
                  lineHeight="166.667%"
                >
                  Our AI models seamlessly integrate with your existing systems,
                  extracting relevant data to populate your Scope 2 emission
                  reports effortlessly.
                </Onlytext>

                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <BtnwithImg>Request For Demo</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          ) : (
            <Box
              sx={{
                p: 4,
                pt: "960px",
                boxSizing: "border-box",
                height: "1840px",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={Scope3Industry}
                  alt=""
                  style={{ width: "260px" }}
                ></img>
              </Stack>

              <Stack alignItems={"flex-start"} gap={"30px"}>
                <ArrowHeading text={"Other Emissions"} />

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
                  }}
                >
                  Comprehensive Reporting for Complex Indirect Emissions{" "}
                </Typography>

                <Onlytext
                  fontFamily="Open Sans"
                  fontSize="18px"
                  fontStyle="italic"
                  fontWeight="600"
                  lineHeight="166.667%"
                >
                  Scope 3 emissions can often be the most challenging to account
                  for. Our AI models excel in capturing data from varied sources
                  such as travel, procurement, waste, and more
                </Onlytext>

                <Onlytext
                  fontFamily="Open Sans"
                  fontSize="18px"
                  fontStyle="italic"
                  fontWeight="600"
                  lineHeight="166.667%"
                >
                  Using Natural Language Processing (NLP), our system even scans
                  and interprets text-based documents, like invoices or travel
                  receipts, to automatically include in the emission
                  calculations.
                </Onlytext>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  sx={{ width: "100%" }}
                >
                  <BtnwithImg>Request For Demo</BtnwithImg>
                </Stack>
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ScopeMobile;
