import React from "react";
import Header from "../../../../shared/components/Header/Header";
import Footer from "../../../../shared/components/Footer/Footer";
import { Box } from "@mui/material";
import MainHeading from "../../../../shared/components/MainHeading";
import ImgWithChild from "../../../../shared/components/Imgwithchild";
import ContactusForm from "../../../../shared/components/ContactUsForm";
import contactimg from "../../../../assets/contactUs.svg";
import AddressMap from "../model/AddressMap";

const ContactUs = () => {
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
        Contact Us
      </MainHeading>{" "}
      <ImgWithChild imgurl={contactimg}>
        <ContactusForm />
      </ImgWithChild>
      <AddressMap />
      <Footer />
    </Box>
  );
};

export default ContactUs;
