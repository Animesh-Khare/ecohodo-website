import { Box, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";

import Onlytext from "../../../../../shared/components/OnlyText";

import targets from "../../../../../assets/targets.svg";
import measures from "../../../../../assets/measures.svg";
import reports from "../../../../../assets/reports.svg";
import analyze from "../../../../../assets/analyze.svg";
import onlyHighlightedAnalyze from "../../../../../assets/highlightedImg/Analyze.png";
import onlyHighlightedMeasures from "../../../../../assets/highlightedImg/Measure.png";
import onlyHighlightedTargets from "../../../../../assets/highlightedImg/Target.png";
import onlyHighlightedVectors from "../../../../../assets/highlightedImg/Reports.png";

import fullLeaves from "../../../../../assets/fullLeaves.svg";
const PuzzleMobile = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [imgClicked, setImgClicked] = useState("");

  const handleDialogClose = () => {
    setOpenDialog(false);
    setImgClicked("");
  };

  const imgClickHandler = (imgName) => {
    setOpenDialog(true);
    setImgClicked(imgName);
  };

  return (
    <>
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
          }}
        >
          <Box
            sx={{
              height: "288px",
              width: "300px",
              m: "auto",
              position: "relative",
            }}
          >
            <img
              src={analyze}
              alt=""
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                width: "199px",
                height: "157px",
              }}
              onClick={() => imgClickHandler("analyze")}
            ></img>

            <img
              src={measures}
              alt=""
              style={{
                position: "absolute",
                right: "0px",
                cursor: "pointer",
                width: "151px",
                height: "215px",
              }}
              onClick={() => imgClickHandler("measures")}
            ></img>
            <img
              src={targets}
              alt=""
              style={{
                position: "absolute",
                bottom: 0,
                cursor: "pointer",
                width: "152px",
                height: "192px",
              }}
              onClick={() => imgClickHandler("targets")}
            ></img>
            <img
              src={reports}
              alt=""
              style={{
                position: "absolute",
                bottom: 0,
                right: "0px",
                cursor: "pointer",

                width: "205px",
                height: "135px",
              }}
              onClick={() => imgClickHandler("reports")}
            ></img>
          </Box>
        </Box>

        <Box>
          <Onlytext
            fontFamily={"Open Sans"}
            fontSize={"16px"}
            fontStyle={"italic"}
            fontWeight={600}
            lineHeight={"26px"}
            textAlign={"center"}
          >
            Welcome to Ecohodo - Where technology meets sustainability. We
            leverage AI models like OCR, NLP, Smoke Detection, Volumetry, and
            more to enhance the transparency, affordability, and efficiency of
            Carbon emissions reporting, Offset project development, and trading.
            Be a part of this eco-renaissance today.
          </Onlytext>
        </Box>
      </Box>

      <Dialog
        onClose={handleDialogClose}
        open={openDialog}
        sx={{
          backdropFilter: "blur(10px)",

          "& .MuiPaper-root": {},
          "& .MuiDialog-paper": {
            background: "transparent",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              height: "288px",
              width: "300px",
              m: "auto",
              position: "relative",
            }}
          >
            <img
              src={imgClicked === "analyze" ? onlyHighlightedAnalyze : analyze}
              alt=""
              style={{
                width: "199px",
                height: "157px",
                position: "absolute",
                top: "0px",
                cursor: "pointer",
                filter: `${imgClicked === "analyze" ? "blur(0)" : "blur(5px)"}`,
              }}
            ></img>

            <img
              src={
                imgClicked === "measures" ? onlyHighlightedMeasures : measures
              }
              alt=""
              style={{
                width: "151px",
                height: "215px",
                position: "absolute",
                right: "0px",
                cursor: "pointer",

                filter: `${
                  imgClicked === "measures" ? "blur(0)" : "blur(5px)"
                }`,
              }}
            ></img>

            <img
              src={imgClicked === "targets" ? onlyHighlightedTargets : targets}
              style={{
                width: "152px",
                height: "192px",
                position: "absolute",
                bottom: 0,
                left: "2px",
                cursor: "pointer",

                filter: `${imgClicked === "targets" ? "blur(0)" : "blur(5px)"}`,
              }}
              alt=""
            ></img>

            <img
              src={imgClicked === "reports" ? onlyHighlightedVectors : reports}
              alt=""
              style={{
                width: "207px",
                height: "142px",
                position: "absolute",
                bottom: 0,
                right: 0,
                cursor: "pointer",

                filter: `${imgClicked === "reports" ? "blur(0)" : "blur(5px)"}`,
              }}
            ></img>
          </Box>

          <Box>
            <Typography
              sx={{
                margin: "20px 5px",
                color: "var(--Light-Green, #EDF8E6)",
                textAlign: "center",
                fontFamily: "Open Sans",
                fontSize: "24px",
                fontStyle: "italic",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              {imgClicked === "analyze"
                ? "Easily collect and centralize your emissions data."
                : imgClicked === "measures"
                ? "Map your carbon footprint and understand Scope 1, 2, and 3 emissions."
                : imgClicked === "reports"
                ? "Export compliant sustainability & ESG reporting in minutes."
                : "Set emissions reduction targets for your company and entire value chain."}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default PuzzleMobile;
