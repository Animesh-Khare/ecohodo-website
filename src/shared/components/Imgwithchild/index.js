import { Box, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ImgWithChild = ({ imgurl, children, reverse = false }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {!reverse && (
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            p={4}
            sx={{
              display: "flex",
              justifyContent: ` ${isDesktop ? "flex-end" : "center"}`,
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src={imgurl}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "600px",
                }}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} p={4}>
            <Box>{children}</Box>
          </Grid>
        </Grid>
      )}

      {reverse && (
        <Grid container>
          <Grid item xs={12} sm={12} md={6} p={4}>
            {children}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            p={4}
            sx={{
              display: "flex",
              justifyContent: ` ${isDesktop ? "flex-start" : "center"}`,
              alignItems: "center",
            }}
          >
            <img
              src={imgurl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600px",
              }}
            ></img>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ImgWithChild;
