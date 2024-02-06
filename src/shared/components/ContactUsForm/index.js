import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import BtnwithImg from "../BtnwithImg";
import styles from "./style.module.css";

const ContactusForm = () => {
  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <form onSubmit={() => alert("submitted")}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <input
              type="text"
              className={styles.input_tag}
              placeholder="Enter First Name"
            ></input>
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              type="text"
              className={styles.input_tag}
              placeholder="Enter Last Name"
            ></input>
          </Grid>
          <Grid item xs={12}>
            <input
              type="email"
              className={styles.input_tag}
              placeholder="Enter Email Address"
            ></input>
          </Grid>
          <Grid item xs={12}>
            <input
              type="text"
              className={styles.input_tag}
              placeholder="Enter Mobile Number"
            ></input>
          </Grid>
          <Grid item xs={12}>
            <textarea
              className={styles.input_tag}
              placeholder="Enter Your Message"
            ></textarea>
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"center"} mt={4}>
          <BtnwithImg type="submit">Submit</BtnwithImg>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactusForm;
