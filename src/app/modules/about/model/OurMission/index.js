import { Stack } from "@mui/material";
import React from "react";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import AboutUsText from "../../../../../shared/components/AboutUsText";

const OurMission = () => {
  return (
    <Stack spacing={2}>
      <ArrowHeading text="Our Mission" />
      <AboutUsText>
        "We're here to automate and enhance transparency in carbon markets,
        aiming to elevate our collective environmental impact," Sarthak and
        Purnima often proclaim. With tools harnessing Artificial Intelligence
        and DMRV, they simplified complex carbon accounting metrics, inviting
        more organizations to contribute to the carbon credit ecosystem.
      </AboutUsText>
    </Stack>
  );
};

export default OurMission;
