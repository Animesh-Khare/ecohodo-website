import { Box, Divider, Link, Stack, styled } from "@mui/material";
import React from "react";
import logo from "../../../assets/logo.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import insta from "../../../assets/instagram.svg";
import Onlytext from "../OnlyText";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const CustomisedLink = styled(Link)(() => ({
  color: "#3FF2FF",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  cursor: "pointer",
}));

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigate = (value) => {
    navigate(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "30px 20px",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        background:
          "radial-gradient(10973.94% 50% at 50% 50%, rgba(237, 248, 230, 0.10) 0%, rgba(146, 242, 84, 0.10) 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Stack alignItems={"center"} spacing={2}>
        <Box
          sx={{ width: `${isMobile ? "200px" : isTablet ? "350px" : "400px"}` }}
        >
          <img
            src={logo}
            alt=""
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Onlytext
            text={"© Copyright 2023 ecohodo. All rights reserved."}
          ></Onlytext>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <CustomisedLink onClick={() => handleNavigate("/aboutus")}>
              About Us
            </CustomisedLink>
            <Divider
              orientation="vertical"
              variant="middle"
              // flexItem
              sx={{ height: "20px", width: "2px", background: "white" }}
            />
            <CustomisedLink onClick={() => handleNavigate("/contactus")}>
              Contact Us
            </CustomisedLink>
            <Divider
              orientation="vertical"
              variant="middle"
              // flexItem
              sx={{ height: "20px", width: "2px", background: "white" }}
            />

            <CustomisedLink onClick={() => handleNavigate("/joinus")}>
              Join Us
            </CustomisedLink>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={4}>
          <img src={facebook} alt=""></img>
          <img src={twitter} alt=""></img>
          <img src={insta} alt=""></img>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
