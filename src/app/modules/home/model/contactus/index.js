import { Box } from "@mui/material";
import React from "react";
import HeadingUnder from "../../../../../shared/components/HeadingUnder/HeadingUnder";
import ImgWithChild from "../../../../../shared/components/Imgwithchild";
import ContactUs from "../../../../../assets/contactUs.svg";
import ContactusForm from "../../../../../shared/components/ContactUsForm";

const Contactus = () => {
  return (
    <Box
      sx={{
        minHeighteight: "733px",
      }}
    >
      <HeadingUnder>Contact Us</HeadingUnder>
      <ImgWithChild imgurl={ContactUs}>
        <ContactusForm />
      </ImgWithChild>
    </Box>
  );
};

export default Contactus;
