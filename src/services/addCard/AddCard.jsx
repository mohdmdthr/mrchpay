import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AddCard = () => {
  return (
    <>
      <form className="app-form">
        <Stack spacing={2}>
          <Typography variant="h6">Add card</Typography>
          <TextField label="Card Name" />
          <TextField label="Card Number" />
          <TextField label="Expiry Date" />
          <FormControlLabel label="Set as default" control={<Checkbox />} />
          <Button variant="contained">Confirm</Button>
        </Stack>
      </form>
    </>
  );
};

export default AddCard;
