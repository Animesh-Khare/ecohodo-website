import React from "react";
import Header from "../../../../shared/components/Header/Header";
import Footer from "../../../../shared/components/Footer/Footer";
import { Box } from "@mui/material";
import MainHeading from "../../../../shared/components/MainHeading";
import Content from "../model/content";
import CardContainer from "../model/cardContainer";

const JoinUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(185deg, #000A06 5.04%, #001F11 69.99%)",
        paddingTop: "50px",
      }}
    >
      <Header />
      <MainHeading
        para={
          "Join Our Journey to Revolutionize the Carbon Market with AI+DMRV."
        }
      >
        Join Us
      </MainHeading>

      <Content />
      <CardContainer />
      <Footer />
    </Box>
  );
};

export default JoinUs;
