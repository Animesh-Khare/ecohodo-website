import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";

// import ourPartner1 from "../../../../../assets/ourPartner1.svg";
// import ourPartner2 from "../../../../../assets/ourPartner2.svg";
// import ourPartner3 from "../../../../../assets/ourPartner3.svg";
// import ourPartner4 from "../../../../../assets/ourPartner4.svg";

import radissonPlain from "../../../../../assets/Logos/Radisson_black white.svg";
import treeplePlain from "../../../../../assets/Logos/Treeple_black white.svg";
import pugdandiPlain from "../../../../../assets/Logos/Pugdundee safaris_black white.svg";
import carbonPlain from "../../../../../assets/Logos/Carbon Registry india_black white.svg";

import radissonColor from "../../../../../assets/Logos/Radisson_color.svg";
import treepleColor from "../../../../../assets/Logos/Treeple_color.svg";
import pugdandiColor from "../../../../../assets/Logos/Pugdundee safaris_color.svg";
import carbonColor from "../../../../../assets/Logos/Carbon Registry india_color.svg";

const Ourpartner = () => {
  const [ishover, setIshover] = useState({
    radisson: false,
    treeple: false,
    pugdandi: false,
    carbon: false,
  });

  const handleMouseEnter = (imgName) => {
    setIshover((prevState) => {
      return {
        ...prevState,
        [imgName]: true,
      };
    });
  };

  const handleMouseLeave = (imgName) => {
    setIshover((prevState) => {
      return {
        ...prevState,
        [imgName]: false,
      };
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "5% 6%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "30px",
      }}
    >
      <HeadingUnder>Our Partners</HeadingUnder>

      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          padding: "6px 20px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderRadius: "50px",
          background:
            "radial-gradient(51.03% 133% at 50% 50%, rgba(237, 248, 230, 0.10) 0%, rgba(237, 248, 230, 0.00) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: "center" }}>
          <img
            src={ishover?.radisson ? radissonColor : radissonPlain}
            alt=""
            style={{ width: "100%", maxWidth: "236px" }}
            onMouseEnter={() => handleMouseEnter("radisson")}
            onMouseLeave={() => handleMouseLeave("radisson")}
          ></img>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: "center" }}>
          <img
            src={ishover?.treeple ? treepleColor : treeplePlain}
            alt=""
            style={{ width: "100%", maxWidth: "236px" }}
            onMouseEnter={() => handleMouseEnter("treeple")}
            onMouseLeave={() => handleMouseLeave("treeple")}
          ></img>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: "center" }}>
          <img
            src={ishover?.pugdandi ? pugdandiColor : pugdandiPlain}
            alt=""
            style={{ width: "100%", maxWidth: "236px" }}
            onMouseEnter={() => handleMouseEnter("pugdandi")}
            onMouseLeave={() => handleMouseLeave("pugdandi")}
          ></img>
        </Grid>
        <Grid item xs={6} sm={6} md={3} sx={{ textAlign: "center" }}>
          <img
            src={ishover?.carbon ? carbonColor : carbonPlain}
            alt=""
            style={{ width: "100%", maxWidth: "236px" }}
            onMouseEnter={() => handleMouseEnter("carbon")}
            onMouseLeave={() => handleMouseLeave("carbon")}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ourpartner;
