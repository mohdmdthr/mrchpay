import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import chipIcon from "../../assets/icons/card-chip.png";

const Card = ({
  cardType,
  bankName,
  cardNumber,
  monthIssued,
  dateExpiry,
  cardHolder,
}) => {
  return (
    <Box
      sx={{
        mx: "auto",
        border: "1px solid",
        borderRadius: "15px",
        width: "330px",
        height: "200px",
        mt: "2rem",
        padding: "1rem",
        "& img": {
          width: "48px",
        },
        background:
          "radial-gradient( circle 400px at 6.8% 8.3%,  rgba(255,244,169,1) 0%, rgba(255,244,234,1) 100.2% )",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography>{cardType}</Typography>
        <Typography>{bankName}</Typography>
      </Stack>
      <img src={chipIcon} alt="Chip icon" />
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {cardNumber}
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography sx={{ mr: "auto" }}>{monthIssued}</Typography>
        <Typography sx={{ mr: "1rem", width: "min-content", lineHeight: "1" }}>
          Valid Thru
        </Typography>
        <Typography>{dateExpiry}</Typography>
      </Stack>
      <Typography>{cardHolder}</Typography>
    </Box>
  );
};

export default Card;
