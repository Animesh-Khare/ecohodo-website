import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import group1 from "../../../assets/Group 1.svg";
import { useTheme } from "@emotion/react";

const BtnwithImg = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      sx={{
        // height: "53px",
        width: "fit-content",
        padding: isMobile ? "7px 10px 7px 0" : "10px 30px 10px 0",
        gap: "10px",
        borderRadius: "8px",
        border: "1px solid var(--White, #fff)",
        boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.2)",
        color: "var(--White, #fff)",
        textAlign: "center",
      }}
    >
      <Box>
        <img src={group1} alt=""></img>
      </Box>
      <Typography
        sx={{
          fontFamily: "Syncopate",
          fontSize: isMobile ? "12px" : "16px",
          fontStyle: "normal",
          fontWeight: 700,
          // lineHeight: "33px",
          // paddingLeft: "2px",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

export default BtnwithImg;
