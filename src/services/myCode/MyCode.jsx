import React from "react";

import { Box, Stack } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import QrCode2Icon from "@mui/icons-material/QrCode2";

const MyCode = () => {
  return (
    <Stack alignItems="center">
      <PageTitle icon={<QrCode2Icon />} title="My Code" />
      <Stack
        spacing={0.5}
        alignItems="center"
        mt="2rem"
        sx={{
          "& *": {
            display: "flex",
            alignItems: "center",
            width: "18rem",
            backgroundColor: "#ccc",
            border: "1px solid",
            height: "3rem",
            borderRadius: "15px",
            padding: "1.5rem",
          },
          "& div:nth-of-type(1)": {
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          },
          "& div:nth-of-type(2)": {
            borderRadius: "0",
          },
          "& div:nth-of-type(3)": {
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          },
        }}
      >
        <Box>Username</Box>
        <Box>Phone Number</Box>
        <Box>Wallet ID Number</Box>
      </Stack>
      <Box mt="2rem">
        <QrCode2Icon
          sx={{
            fontSize: "15rem",
          }}
        />
      </Box>
    </Stack>
  );
};

export default MyCode;
