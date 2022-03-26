import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, ButtonGroup } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

/* Icons */
// Material Icons
import AddIcon from "@mui/icons-material/Add";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

// // Local Icons
// import CardsIcon from "../../assets/icons/add-card.png";

// const ImgIcon = styled("img")(({ theme }) => ({
//   width: "2rem",
//   color: theme.palette.success.main,
// }));

//  maxWidth="480px"

const Home = () => {
  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Hi, Username
      </Typography>
      <Box
        mb="1rem"
        mx="auto"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "190px",
          backgroundColor: "primary.main",
          borderRadius: "20px",
        }}
      >
        <Button>
          <AddIcon sx={{ fontSize: "100px", color: "common.white" }} />
        </Button>
      </Box>
      <ButtonGroup
        variant="contained"
        size="medium"
        disableElevation
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mb: "3rem",
        }}
      >
        <Button component={Link} to="/manage-cards">
          <DynamicFeedOutlinedIcon fontSize="large" />
        </Button>
        <Button component={Link} to="/my-wallet">
          <AccountBalanceWalletOutlinedIcon fontSize="large" />
        </Button>
        <Button component={Link} to="/transactions">
          <AccessTimeOutlinedIcon fontSize="large" />
        </Button>
        <Button component={Link} to="/notifications">
          <CircleNotificationsOutlinedIcon fontSize="large" />
        </Button>
      </ButtonGroup>

      <Box>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            display: "inline-block",
          }}
        >
          Services
        </Typography>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={2}
          justifyContent="flex-start"
          sx={{
            textAlign: "center",
          }}
        >
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <AssuredWorkloadOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <CurrencyExchangeOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/services/bills"
            >
              <ReceiptOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <LocalGasStationOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <PhoneAndroidOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <ConfirmationNumberOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" size="large">
              <SchoolOutlinedIcon fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
