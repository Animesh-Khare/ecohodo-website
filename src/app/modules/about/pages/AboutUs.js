import React from "react";
import Header from "../../../../shared/components/Header/Header";
import { Box } from "@mui/material";
import MainHeading from "../../../../shared/components/MainHeading";
import ImgWithChild from "../../../../shared/components/Imgwithchild";
import ourStory from "../../../../assets/ourStory.svg";
import ourMission from "../../../../assets/ourMission.svg";
// import whatseeus from "../../../../assets/whatseeus.svg";
// import coreValues from "../../../../assets/coreValues.svg";
import OurStory from "../model/OurStory";
import OurMission from "../model/OurMission";
// import WhatseeUs from "../model/WhatseeUsApart";
// import CoreValues from "../model/CoreValues";
import Footer from "../../../../shared/components/Footer/Footer";
import WhatseeCore from "../model/WhatseeCore";

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(185deg, #000A06 5.04%, #001F11 69.99%)",
        paddingTop: "50px",
      }}
    >
      <Header />
      <MainHeading para="Transforming the Carbon Market Through AI+DMRV: A Tale of Passion, Innovation, and Resilience">
        About Us
      </MainHeading>

      <ImgWithChild imgurl={ourStory}>
        <OurStory />
      </ImgWithChild>
      <ImgWithChild imgurl={ourMission} reverse={true}>
        <OurMission />
      </ImgWithChild>
      {/* <ImgWithChild imgurl={whatseeus}>
        <WhatseeUs />
      </ImgWithChild>
      <ImgWithChild imgurl={coreValues}>
        <CoreValues />
      </ImgWithChild> */}

      <WhatseeCore />

      <Footer />
    </Box>
  );
};

export default AboutUs;
