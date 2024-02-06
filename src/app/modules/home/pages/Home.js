import { Box } from "@mui/material";
import React, { useRef } from "react";
import Header from "../../../../shared/components/Header/Header";
import leaves from "../../../../assets/leaves.svg";

import Ourpartner from "../model/ourpartner/Ourpartner";
import Puzzle from "../model/puzzle/Puzzle";
import Aidmrv from "../model/Aidmrv";
import aidmrv from "../../../../assets/aidmrv2.svg";

import ImgWithChild from "../../../../shared/components/Imgwithchild";
import Footer from "../../../../shared/components/Footer/Footer";
import Contactus from "../model/contactus";
import Whatwedo from "../model/whatwedo";
import Scope from "../model/scope";
import PuzzleTab from "../model/puzzleTab";
import PuzzleMobile from "../model/puzzleMobile";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./style.css";
import ScopeMobile from "../model/scopeMobile";
import WhatwedoMobile from "../model/whatwedoMobile";
// import ScopeDesktop from "../model/scopeDesktop";
// import WhatwedoDesktop from "../model/whatwedoDesktop";

const Home = () => {
  const whatWeDoRef = useRef(null);
  const whatwedoMobileRef = useRef(null);
  const ourPartnerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const scrollToSection = (refName) => {
    if (refName === "whatWeDoRef") {
      whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (refName === "ourPartnerRef") {
      ourPartnerRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (refName === "whatwedoMobileRef") {
      whatwedoMobileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(185deg, #000A06 5.04%, #001F11 69.99%)",
        paddingTop: "50px",
      }}
    >
      <img
        src={leaves}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: "-1",
        }}
      ></img>
      <Header scrollToSection={scrollToSection} />

      {isDesktop && <Puzzle />}

      {isTablet && !isMobile && <PuzzleTab />}

      {isMobile && <PuzzleMobile />}

      <Box ref={ourPartnerRef}>
        <Ourpartner />
      </Box>

      <ImgWithChild imgurl={aidmrv}>
        <Aidmrv />
      </ImgWithChild>

      {isDesktop && (
        <Box ref={whatWeDoRef}>
          <Whatwedo />
          {/* <WhatwedoDesktop /> */}
        </Box>
      )}

      {/* {isDesktop && <WhatwedoDesktop />} */}

      {!isDesktop && (
        <Box ref={whatwedoMobileRef}>
          <WhatwedoMobile />
        </Box>
      )}
      {
        isDesktop && <Scope />
        // <ScopeDesktop />
      }

      {!isDesktop && <ScopeMobile />}

      <br />

      <Contactus />

      <Footer />
    </Box>
  );
};

export default Home;
