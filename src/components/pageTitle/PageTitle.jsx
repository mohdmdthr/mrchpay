import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import "./pageTitle.css";

const PageTitle = ({ icon, title, desc }) => {
  return (
    <Stack
      className="page-title"
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt="1rem"
    >
      {icon}
      <Box ml="1rem">
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2">{desc}</Typography>
      </Box>
    </Stack>
  );
};

export default PageTitle;
