import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import targets from "../../../../../assets/targets.svg";
import measures from "../../../../../assets/measures.svg";
import reports from "../../../../../assets/reports.svg";
import analyze from "../../../../../assets/analyze.svg";
import fullLeaves from "../../../../../assets/fullLeaves.svg";

// import highlightanalyze from "../../../../../assets/highlightAnalyze.svg";

// import highlightMeasures from "../../../../../assets/highlightMeasures.svg";
// import highlightReports from "../../../../../assets/highlightReports.svg";

import onlyHighlightedAnalyze from "../../../../../assets/highlightedImg/Analyze.png";
import onlyHighlightedMeasures from "../../../../../assets/highlightedImg/Measure.png";
import onlyHighlightedVectors from "../../../../../assets/highlightedImg/Reports.png";
import onlyHighlightedTargets from "../../../../../assets/highlightedImg/Target.png";

import Onlytext from "../../../../../shared/components/OnlyText";

const Puzzle = () => {
  const [ishover, setIshover] = useState({
    analyze: false,
    measures: false,
    targets: false,
    reports: false,
  });
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (imgName) => {
    setIshover((prevState) => {
      return {
        ...prevState,
        [imgName]: true,
      };
    });
    setHovered(true);
  };

  const handleMouseLeave = (imgName) => {
    setIshover((prevState) => {
      return {
        ...prevState,
        [imgName]: false,
      };
    });
    setHovered(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${fullLeaves})`,
        backgroundSize: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "90%",
        m: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        padding: "50px 0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backdropFilter: `${hovered ? "blur(5px)" : ""} `,
        }}
      >
        <Box
          sx={{
            height: "435px",
            width: "465px",
            m: "auto",
            position: "relative",
          }}
        >
          <img
            src={ishover?.analyze ? onlyHighlightedAnalyze : analyze}
            alt=""
            style={{
              width: "315px",
              position: "absolute",
              top: "0px",
              cursor: "pointer",
              filter: `${
                !ishover?.analyze && hovered ? "blur(5px)" : "blur(0)"
              }`,
            }}
            onMouseEnter={() => handleMouseEnter("analyze")}
            onMouseLeave={() => handleMouseLeave("analyze")}
          ></img>
          {ishover?.analyze && (
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                left: "-315px",
                width: "61%",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Light-Green, #EDF8E6)",
                  textAlign: "right",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "italic",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Easily collect and centralize your emissions data.
              </Typography>
            </Box>
          )}
          <img
            src={ishover?.measures ? onlyHighlightedMeasures : measures}
            alt=""
            style={{
              width: "233px",
              position: "absolute",
              right: "0px",
              cursor: "pointer",
              filter: `${
                !ishover?.measures && hovered ? "blur(5px)" : "blur(0)"
              }`,
            }}
            onMouseEnter={() => handleMouseEnter("measures")}
            onMouseLeave={() => handleMouseLeave("measures")}
          ></img>
          {ishover?.measures && (
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                right: "-330px",
                width: "65%",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Light-Green, #EDF8E6)",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "italic",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Map your carbon footprint and understand Scope 1, 2, and 3
                emissions.{" "}
              </Typography>
            </Box>
          )}
          <img
            src={ishover?.targets ? onlyHighlightedTargets : targets}
            alt=""
            style={{
              width: "235px",
              position: "absolute",
              bottom: 0,
              left: 0,
              cursor: "pointer",
              filter: `${
                !ishover?.targets && hovered ? "blur(5px)" : "blur(0)"
              }`,
            }}
            onMouseEnter={() => handleMouseEnter("targets")}
            onMouseLeave={() => handleMouseLeave("targets")}
          ></img>

          {ishover?.targets && (
            <Box
              sx={{
                position: "absolute",
                bottom: "70px",
                left: "-315px",
                width: "61%",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Light-Green, #EDF8E6)",
                  textAlign: "right",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "italic",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Set emissions reduction targets for your company and entire
                value chain.{" "}
              </Typography>
            </Box>
          )}

          <img
            src={ishover?.reports ? onlyHighlightedVectors : reports}
            alt=""
            style={{
              width: "322px",
              position: "absolute",
              bottom: 0,
              right: 0,
              cursor: "pointer",
              filter: `${
                !ishover?.reports && hovered ? "blur(5px)" : "blur(0)"
              }`,
            }}
            onMouseEnter={() => handleMouseEnter("reports")}
            onMouseLeave={() => handleMouseLeave("reports")}
          ></img>

          {ishover?.reports && (
            <Box
              sx={{
                position: "absolute",
                bottom: "70px",
                right: "-330px",
                width: "65%",
              }}
            >
              <Typography
                sx={{
                  color: "var(--Light-Green, #EDF8E6)",
                  fontFamily: "Open Sans",
                  fontSize: "24px",
                  fontStyle: "italic",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Export compliant sustainability & ESG reporting in minutes.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ width: "80%", m: "auto" }}>
        <Onlytext
          fontFamily={"Open Sans"}
          fontSize={"16px"}
          fontStyle={"italic"}
          fontWeight={600}
          lineHeight={"26px"}
          textAlign={"center"}
        >
          Welcome to Ecohodo - Where technology meets sustainability. We
          leverage AI models like OCR, NLP, Smoke Detection, Volumetry, and more
          to enhance the transparency, affordability, and efficiency of Carbon
          emissions reporting, Offset project development, and trading. Be a
          part of this eco-renaissance today.
        </Onlytext>
      </Box>
    </Box>
  );
};

export default Puzzle;
