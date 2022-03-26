import React, { useState } from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";

const ManageCode = () => {
  const [isCreateCodeSelected, setIsCreateCodeSelected] = useState(false);
  const [isChangeCodeSelected, setIsChangeCodeSelected] = useState(false);

  return (
    <>
      <PageTitle
        icon={<LockOutlinedIcon />}
        title="Manage Code"
        desc="Wallet ID Number"
      />
      <form>
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={() => {
              setIsCreateCodeSelected(!isCreateCodeSelected);
              setIsChangeCodeSelected(false);
            }}
          >
            Create Code
          </Button>
          {isCreateCodeSelected && (
            <>
              <TextField label="Enter Code" />
              <TextField label="Confirm Code" />
            </>
          )}
          <Button
            variant="contained"
            onClick={() => {
              setIsChangeCodeSelected(!isChangeCodeSelected);
              setIsCreateCodeSelected(false);
            }}
          >
            Change Code
          </Button>
          {isChangeCodeSelected && (
            <>
              <TextField label="Current Code" />
              <TextField label="Enter Code" />
              <TextField label="Confirm Code" />
            </>
          )}
          {isCreateCodeSelected || isChangeCodeSelected ? (
            <Button
              variant="contained"
              sx={{
                width: "60%",
                alignSelf: "center",
                mt: "3rem",
              }}
            >
              Continue
            </Button>
          ) : null}
        </Stack>
      </form>
      <Box
        sx={{
          visiblilty: "hidden",
        }}
      />
    </>
  );
};

export default ManageCode;
