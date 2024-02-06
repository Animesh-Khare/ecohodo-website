import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import logo from "../../../assets/logo.svg";
import ellipse from "../../../assets/ellipse.svg";
import MenuIcon from "@mui/icons-material/Menu";

import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, Menu, MenuItem, MenuList } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ scrollToSection }) => {
  const matches = useMediaQuery("(min-width:900px)");
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();
  const [btn, setBtn] = useState("");

  useEffect(() => {
    if (currentPath === "/home") {
      setBtn("home");
    } else if (currentPath === "/contactus") {
      setBtn("contactus");
    }
  }, [currentPath]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const changeBtnState = (value) => {
    setBtn(value);
    navigate(`/${value}`);
  };

  return (
    <div className={styles.header_parent_div}>
      <div className={styles.img_container}>
        <img src={logo} alt="" style={{ width: "100%" }}></img>
      </div>
      {matches && (
        <nav className={styles.navtag}>
          <button
            className={`${styles.navlink} ${
              btn === "home" ? styles.active : ""
            }`}
            value="home"
            onClick={(e) => changeBtnState(e.target.value)}
          >
            {btn === "home" && <img src={ellipse} alt=""></img>}
            Home
          </button>

          {currentPath === "/home" && (
            <button
              className={`${styles.navlink} ${
                btn === "whatwedo" ? styles.active : ""
              }`}
              value="whatwedo"
              onClick={() => scrollToSection("whatWeDoRef")}
            >
              {btn === "whatwedo" && <img src={ellipse} alt=""></img>}
              What We Do
            </button>
          )}

          {currentPath === "/home" && (
            <button
              className={`${styles.navlink} ${
                btn === "ourpartner" ? styles.active : ""
              }`}
              value="ourpartner"
              onClick={() => scrollToSection("ourPartnerRef")}
            >
              {btn === "ourpartner" && <img src={ellipse} alt=""></img>}
              Our Partners
            </button>
          )}

          <button
            className={`${styles.navlink} ${
              btn === "contactus" ? styles.active : ""
            }`}
            value="contactus"
            onClick={(e) => changeBtnState(e.target.value)}
          >
            {btn === "contactus" && <img src={ellipse} alt=""></img>}
            Contact Us
          </button>
        </nav>
      )}

      {!matches && (
        <IconButton
          size="large"
          edge="start"
          sx={{ mr: 2, p: 0, color: "white" }}
          onClick={openMenuHandler}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={closeMenuHandler}
        sx={{
          "& .MuiList-root": {
            pt: 1,
            pb: 1,
            // bgcolor: "black",
            background:
              "linear-gradient(185deg, #000A06 5.04%, #001F11 69.99%)",
            borderRadius: 0,
            width: "100vw",

            "& .MuiList-padding": {
              "& .MuiMenu-list": {},
            },
          },
          "& .MuiMenu-paper": {
            bgcolor: "transparent",
          },
        }}
      >
        <MenuList>
          <MenuItem onClick={closeMenuHandler}>
            <button
              className={`${styles.navlink} ${
                btn === "home" ? styles.active : ""
              }`}
              value="home"
              onClick={(e) => changeBtnState(e.target.value)}
              style={{ margin: "auto" }}
            >
              {btn === "home" && <img src={ellipse} alt=""></img>}
              Home
            </button>
          </MenuItem>

          {currentPath === "/home" && (
            <MenuItem onClick={closeMenuHandler}>
              <button
                className={`${styles.navlink} ${
                  btn === "whatwedo" ? styles.active : ""
                }`}
                value="whatwedo"
                // onClick={(e) => changeBtnState(e.target.value)}
                onClick={() => scrollToSection("whatwedoMobileRef")}
                style={{ margin: "auto" }}
              >
                {btn === "whatwedo" && <img src={ellipse} alt=""></img>}
                What We Do
              </button>
            </MenuItem>
          )}

          {currentPath === "/home" && (
            <MenuItem onClick={closeMenuHandler}>
              <button
                className={`${styles.navlink} ${
                  btn === "ourpartner" ? styles.active : ""
                }`}
                value="ourpartner"
                // onClick={(e) => changeBtnState(e.target.value)}
                onClick={() => scrollToSection("ourPartnerRef")}
                style={{ margin: "auto" }}
              >
                {btn === "ourpartner" && <img src={ellipse} alt=""></img>}
                Our Partners
              </button>
            </MenuItem>
          )}

          <MenuItem onClick={closeMenuHandler}>
            <button
              className={`${styles.navlink} ${
                btn === "contactus" ? styles.active : ""
              }`}
              value="contactus"
              onClick={(e) => changeBtnState(e.target.value)}
              style={{ margin: "auto" }}
            >
              {btn === "contactus" && <img src={ellipse} alt=""></img>}
              Contact Us
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Header;
