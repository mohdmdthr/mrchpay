import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CropFreeIcon from "@mui/icons-material/CropFree";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const WalletExchange = () => {
  return (
    <Stack alignItems="center">
      <PageTitle
        icon={<CurrencyExchangeOutlinedIcon />}
        title="Exchange"
        desc="Wallet ID Number"
      />
      <Box>
        <QrCode2Icon sx={{ fontSize: "18rem" }} />
      </Box>
      <Stack
        spacing={3}
        mx="2rem"
        sx={{
          "& > *": {
            justifyContent: "flex-start",
            px: "2.5rem",
            width: "18rem",
          },
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<CropFreeIcon />}
          component={Link}
          to="/"
        >
          Scan QR Code
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<AccountBalanceWalletOutlinedIcon />}
          component={Link}
          to="/my-wallet/exchange/enter-id"
        >
          Wallet ID Number
        </Button>
      </Stack>
    </Stack>
  );
};

export default WalletExchange;
