import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import scopeImgOne from "../../../../../assets/scopeOne.svg";
import scopeImgTwo from "../../../../../assets/scopeTwo.svg";
import scopeImgThree from "../../../../../assets/scopeThree.svg";
import Scope1Industry from "../../../../../assets/scope1Industry.svg";
import Scope2Industry from "../../../../../assets/scope2Industry.svg";
import Scope3Industry from "../../../../../assets/scope3Industry.svg";

import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import Onlytext from "../../../../../shared/components/OnlyText";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";

import styles from "./styles.module.css";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";

const ScopeDesktop = () => {
  const [currScope, setCurrScope] = useState(1);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    if (scrollTop < 180) {
      setCurrScope(1);
    } else if (scrollTop < 350) {
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
            <img
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
            ></img>
          </Box>

          {currScope === 1 ? (
            <Box
              sx={{
                p: 4,
                boxSizing: "border-box",
                height: "900px",
              }}
            >
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
            </Box>
          ) : currScope === 2 ? (
            <Box
              sx={{
                p: 4,
                pt: "250px",
                boxSizing: "border-box",
                height: "900px",
              }}
            >
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
            </Box>
          ) : (
            <Box
              sx={{
                p: 4,
                pt: "450px",
                boxSizing: "border-box",
                height: "900px",
              }}
            >
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
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ScopeDesktop;
