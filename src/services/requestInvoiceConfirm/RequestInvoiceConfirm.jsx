import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import DescriptionIcon from "@mui/icons-material/Description";

const RequestInvoiceConfirm = () => {
  return (
    <Stack alignItems="center">
      <PageTitle
        icon={<DescriptionIcon />}
        title="Request Invoice"
        desc="Wallet ID Number"
      />
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
      <form>
        <Stack
          spacing={2}
          mt="2rem"
          sx={{
            "& input": {
              width: "18rem",
            },
          }}
        >
          <TextField label="Amount" />
          <TextField label="Purpose" />
          <TextField label="Wallet ID Number" />
          <Button variant="contained" component={Link} to="/">
            Confirm
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RequestInvoiceConfirm;
