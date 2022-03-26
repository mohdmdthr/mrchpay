import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import QrCode2Icon from "@mui/icons-material/QrCode2";

const MyWallet = () => {
  return (
    <>
      <PageTitle
        icon={<AccountBalanceWalletOutlinedIcon />}
        title="My Wallet"
        desc="Wallet ID Number"
      />
      <Stack alignItems="center">
        <Typography varaint="h6">Total Balance</Typography>
        <Typography variant="h4">$20.000.000</Typography>
      </Stack>
      <Stack
        spacing={3}
        mx="2rem"
        sx={{
          "& > *": {
            justifyContent: "flex-start",
            px: "2.5rem",
          },
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/my-wallet/my-code"
        >
          View QR Code
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/my-wallet/exchange"
        >
          Wallet Exchange
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/my-wallet/deposit"
        >
          Deposit
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/my-wallet/withdraw"
        >
          Withdraw
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/my-wallet/request-invoice"
        >
          Request Invoice
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<QrCode2Icon />}
          component={Link}
          to="/manage-cards/manage-code"
        >
          Manage Code
        </Button>
      </Stack>
    </>
  );
};

export default MyWallet;
