import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const cards = [
  {
    value: "c1",
    label: "Card 1",
  },
  {
    value: "c2",
    label: "Card 2",
  },
  {
    value: "c3",
    label: "Card 3",
  },
  {
    value: "c4",
    label: "Card 4",
  },
];

const Withdraw = () => {
  const [card, setCard] = useState("c1");

  const handleChange = (event) => {
    setCard(event.target.value);
  };
  return (
    <Stack alignItems="center">
      <PageTitle
        icon={<AccountBalanceOutlinedIcon />}
        title="Withdraw"
        desc="Wallet ID Number"
      />
      <Stack alignItems="center" mt="2rem">
        <Typography varaint="h6">Total Balance</Typography>
        <Typography variant="h4">$20.000.000</Typography>
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
            value={card}
            onChange={handleChange}
            label="Choose Card"
          >
            {cards.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField label="Amount" />
          <TextField label="Wallet ID Code" />
          <Button variant="contained" component={Link} to="/">
            Continue
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Withdraw;
