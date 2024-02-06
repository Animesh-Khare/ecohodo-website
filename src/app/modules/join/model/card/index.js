import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import joinUs from "../../../../../assets/joinUs.svg";
import ellipse from "../../../../../assets/ellipse.svg";
import brush from "../../../../../assets/brush.svg";
import group1 from "../../../../../assets/Group 1.svg";
import { styled } from "@mui/material/styles";
import DialogBox from "../../../../../shared/components/DialogBox";
import closeIcon from "../../../../../assets/closeIcon.svg";
import styles from "./styles.module.css";
import BtnwithImg from "../../../../../shared/components/BtnwithImg";
import fileUploadIcon from "../../../../../assets/fileUploadIcon.svg";

const CustomisedBtn = styled(Button)(() => ({
  display: "flex",
  // height: "53px",
  width: "fit-content",
  // padding: "10px 30px",
  justifyContent: "center",
  alignItems: "center",
  // gap: "10px",
  borderRadius: "8px",
  border: "1px solid var(--White, #fff)",
  boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.2)",
  color: "var(--White, #fff)",
  textAlign: "center",

  /* Button Text */
  fontFamily: "Syncopate",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "33px",
  paddingLeft: "2px",
}));

const Card = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.80)",
          backdropFilter: "blur(10px)",
          width: "440px",
          m: 2,
          opacity: 0.5,
          "&:hover": {
            opacity: 1,
            button: {
              borderRadius: "16px",
              border: "1px solid var(--White, #FFF)",
              background:
                "var(--Gradiant-01, linear-gradient(132deg, #28F17C -14.15%, #ECFF38 114.18%))",
              boxShadow: "5px 5px 10px 0px rgba(2, 21, 10, 0.30)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            padding: "24px",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",

            border: "1px solid var(--Gradiant-03, #00FFED)",
            background: "rgba(19, 47, 2, 0.80)",
            backdropFilter: "blur(15px)",
          }}
        >
          <img src={joinUs} alt=""></img>
          <Typography
            sx={{
              textAlign: "center",

              fontFamily: "Syncopate",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px",
              textTransform: "uppercase",

              background:
                "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GHG Technical Expert
          </Typography>

          <Typography
            sx={{
              textAlign: "center",

              fontFamily: "Syncopate",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px",
              textTransform: "uppercase",

              background:
                "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img src={ellipse}></img> 01 Position
          </Typography>

          <img src={brush} alt=""></img>

          <Typography
            sx={{
              color: "var(--Light-Green, #EDF8E6)",
              alignSelf: "stretch",
              fontfamily: "Open Sans",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Roles & Responsibilities:
          </Typography>

          <ul
            style={{
              color: "var(--Light-Green, #EDF8E6)",

              fontFamily: "Open Sans",
              fontSize: "18px",
              fontStyle: "italic",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugiat velit,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugiat velit,
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugiat velit,
            </li>
          </ul>

          <CustomisedBtn
            startIcon={<img src={group1} alt=""></img>}
            onClick={handleDialogOpen}
          >
            Apply Now
          </CustomisedBtn>
        </Box>
      </Box>

      <DialogBox handleClose={handleDialogClose} open={openDialog}>
        <Box
          sx={{
            display: "flex",
            // width: "600px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            borderRadius: "20px",
            border: "1px solid var(--White, #FFF)",
            background:
              "linear-gradient(115deg, rgba(0, 255, 237, 0.15) 6.49%, rgba(255, 102, 255, 0.15) 83.45%)",
            backdropFilter: "blur(50px)",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Typography></Typography>
            <Typography
              sx={{
                fontFamily: "Syncopate",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "55px",
                background:
                  "var(--Gradiant-03, linear-gradient(115deg, #00FFED 6.49%, #F6F 83.45%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join Us
            </Typography>
            <img
              src={closeIcon}
              alt=""
              onClick={handleDialogClose}
              style={{ cursor: "pointer" }}
            ></img>
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <input
                type="text"
                placeholder="Enter First Name"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <input
                type="text"
                placeholder="Enter Last Name"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type="text"
                placeholder="Enter Email Address"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type="text"
                placeholder="Linkedin Profile"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type="text"
                placeholder="Position"
                className={styles.input_tag}
              ></input>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <label htmlFor="f02" className={styles.PDI_upload_label}>
                <div className={styles.PDI_upload_div}>
                  Upload Resume/CV
                  <img src={fileUploadIcon} alt=""></img>
                </div>
              </label>
              <input
                id="f02"
                type="file"
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
          text/plain, application/pdf, image/*"
                placeholder="Upload File"
                // onChange={(e) => handleChangeImage(e)}
                multiple
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Stack direction={"row"} justifyContent={"center"}>
                <BtnwithImg>Submit</BtnwithImg>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </DialogBox>
    </>
  );
};

export default Card;
