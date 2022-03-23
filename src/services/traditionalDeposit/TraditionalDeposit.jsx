import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const banks = [
  {
    value: "b1",
    label: "Bank 1",
  },
  {
    value: "b2",
    label: "Bank 2",
  },
  {
    value: "b3",
    label: "Bank 3",
  },
  {
    value: "b4",
    label: "Bank 4",
  },
];

const TraditionalDeposit = () => {
  const [bank, setBank] = useState("b1");

  const handleChange = (event) => {
    setBank(event.target.value);
  };
  return (
    <Stack alignItems="center">
      <PageTitle
        icon={<AccountBalanceOutlinedIcon />}
        title="Deposit"
        desc="Wallet ID Number"
      />
      <Stack alignItems="center" mt="2rem">
        <Typography varaint="h6">Total Balance</Typography>
        <Typography variant="h4">$20.000.000</Typography>
      </Stack>
      <Stack
        spacing={0.5}
        alignItems="center"
        mt="2rem"
        sx={{
          "& > *": {
            alignItems: "center",
            width: "20rem",
            backgroundColor: "#ccc",
            border: "1px solid",
            height: "3rem",
            borderRadius: "15px",
            padding: "1rem",
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
        <Stack direction="row" justifyContent="space-between">
          <AccountBalanceOutlinedIcon />
          <Typography>Bank Name</Typography>
          <Typography>Accoutn Number</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <AccountBalanceOutlinedIcon />
          <Typography>Bank Name</Typography>
          <Typography>Accoutn Number</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <AccountBalanceOutlinedIcon />
          <Typography>Bank Name</Typography>
          <Typography>Accoutn Number</Typography>
        </Stack>
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
          <TextField
            select
            value={bank}
            onChange={handleChange}
            label="Choose Bank"
          >
            {banks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Amount" />
          <TextField type="file" helperText="Attach Receipt" />
          <Button variant="contained" component={Link} to="/">
            Continue
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default TraditionalDeposit;
