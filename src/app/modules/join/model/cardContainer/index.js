import { Stack } from "@mui/material";
import React from "react";
import Card from "../card";

const fakeapi = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardContainer = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      sx={{
        p: 2,
      }}
    >
      {fakeapi.map((item) => (
        <Card key={item} />
      ))}
    </Stack>
  );
};

export default CardContainer;
