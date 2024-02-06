import React from "react";
import "./App.css";
import Routing from "./routes/Routing";
import BlueLeaves from "./assets/BlueLeaves.svg";
// import Ellipse10 from "./assets/ellipse10.svg";
import Ellipse11 from "./assets/ellipse11.svg";
import Ellipse12 from "./assets/ellipse12.svg";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <img src={BlueLeaves} alt="" className={"bgimg"}></img>
      {/* <img src={Ellipse10} alt="" className="ellipse10"></img> */}
      <div className="ellipsediv"></div>
      <img src={Ellipse11} alt="" className="ellipse11"></img>
      <img src={Ellipse12} alt="" className="ellipse12"></img>

      <Routing />
    </Box>
  );
};

export default App;
