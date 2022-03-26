import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import PageTitle from "../../components/pageTitle/PageTitle";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Notifications = () => {
  return (
    <Stack>
      <PageTitle
        icon={<NotificationsNoneOutlinedIcon />}
        title="Notifications"
      />
      <Stack
        mt="2rem"
        sx={{
          "& > div": {
            marginBottom: "1rem",
            border: "1px solid",
            borderRadius: "15px",
            padding: ".5rem 1rem",
          },
        }}
      >
        <Typography>DD/MM/YYYY</Typography>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Notification Title</Typography>
            <Typography>00:00 PM</Typography>
          </Stack>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Notification Title</Typography>
            <Typography>00:00 PM</Typography>
          </Stack>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Notification Title</Typography>
            <Typography>00:00 PM</Typography>
          </Stack>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Notifications;
