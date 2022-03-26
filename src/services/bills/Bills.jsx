import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

const Bills = () => {
  return (
    <Stack justifyContent="space-between" minHeight="100vh">
      <Stack direction="row" spacing={2} alignItems="center">
        <ReceiptOutlinedIcon fontSize="large" />
        <Typography variant="h6">Bills</Typography>
      </Stack>
      <Stack
        alignItems="center"
        sx={{
          "& > *": {
            display: "flex",
            border: "1px solid",
            width: "60%",
            justifyContent: "center",
            mb: "1rem",
            padding: ".5rem 0",
            borderRadius: "15px",
            textDecoration: "none",
            color: "inherit",

            "& svg": {
              marginInlineEnd: "1rem",
            },
          },
        }}
      >
        <Box component={Link} to="/services/bills/telecom">
          <ReceiptOutlinedIcon />
          <Typography>Telecom</Typography>
        </Box>
        <Box component={Link} to="/services/bills/electricity">
          <ReceiptOutlinedIcon />
          <Typography>Electricity</Typography>
        </Box>
      </Stack>
      <Box />
    </Stack>
  );
};

export default Bills;
