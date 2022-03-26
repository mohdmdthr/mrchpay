import { Link } from "react-router-dom";
import PageTitle from "../../components/pageTitle/PageTitle";

import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";

import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";

const ManageCode = () => {
  return (
    <>
      <PageTitle
        icon={<AccountBalanceOutlinedIcon />}
        title="Manage Code"
        desc="Wallet ID Number"
      />
      <Stack spacing={2}>
        <Button
          variant="contained"
          size="large"
          startIcon={<LocalAtmOutlinedIcon />}
          component={Link}
          to="/my-wallet/deposit/traditional"
        >
          Traditional Deposit
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<DynamicFeedOutlinedIcon />}
          component={Link}
          to="/my-wallet/deposit/card"
        >
          Card Deposit
        </Button>
      </Stack>
      <Box
        sx={{
          visiblilty: "hidden",
        }}
      />
    </>
  );
};

export default ManageCode;
