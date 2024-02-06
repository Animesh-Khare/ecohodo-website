import React from "react";
import ArrowHeading from "../../../../../shared/components/ArrowHeading";
import { Stack } from "@mui/material";
import AboutUsText from "../../../../../shared/components/AboutUsText";

const OurStory = () => {
  return (
    <Stack spacing={2}>
      <ArrowHeading text="Our Story" />
      <AboutUsText>
        Nestled in a Tier 4 city in India, where the fast-paced world of
        technology often seems a world away, Sarthak Bhasin and Purnima Soni had
        an epiphany: a vision to democratize sustainability. Ecohodo, launched
        in April 2022, became the beacon of that vision. Faced with challenges
        that included sparse local resources and an intricate, ever-changing
        carbon market, Sarthak and Purnima soldiered on. Sarthak's skills,
        certified by SGS under ISO 14064:1,2,3, and Purnima's CII accreditation
        in Resource Efficiency and Environmental Sustainability, provided them
        with the expertise to navigate these challenges.
      </AboutUsText>
      <AboutUsText>
        {" "}
        Just as the lack of technological know-how seemed an insurmountable
        obstacle, they crossed paths with Vijay Dave. With over eight years
        dedicated to crafting SaaS products, Vijay was the missing piece of the
        puzzle. His involvement ignited the technological innovations that were
        crucial to Ecohodo’s goals, and he soon became an irreplaceable part of
        the collective mission.
      </AboutUsText>
    </Stack>
  );
};

export default OurStory;
