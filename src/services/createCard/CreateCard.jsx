import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

const CreateCard = () => {
  return (
    <>
      <form className="app-form">
        <Stack spacing={2}>
          <Typography variant="h6">Create card</Typography>
          <TextField label="Card Name" />
          <TextField label="Phone Number" />
          <TextField label="Code" />
          <TextField label="Confirm Code" />
          <Button variant="contained">Confirm</Button>
        </Stack>
      </form>
    </>
  );
};

export default CreateCard;
