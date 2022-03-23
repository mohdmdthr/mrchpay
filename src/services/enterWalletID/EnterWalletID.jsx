import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

const EnterWalletID = () => {
  return (
    <Stack alignItems="center" minHeight="100vh" justifyContent="space-between">
      <PageTitle
        icon={<CurrencyExchangeOutlinedIcon />}
        title="Exchange"
        desc="Wallet ID Number"
      />
      <Stack alignItems="center">
        <Typography varaint="h6">Total Balance</Typography>
        <Typography variant="h4">$20.000.000</Typography>
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
            <TextField label="Wallet ID Number" />
            <Button
              variant="contained"
              component={Link}
              to="/my-wallet/exchange/confirm"
            >
              Confirm
            </Button>
          </Stack>
        </form>
      </Stack>
      <Box />
    </Stack>
  );
};

export default EnterWalletID;
