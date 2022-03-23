import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const IconText = ({ icon, text, path = "/" }) => {
  return (
    <>
      <Button
        component={Link}
        to={path}
        variant="contained"
        size="small"
        startIcon={icon}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          borderRadius: "15px",
          "& span": {
            width: "min-content",
            mt: ".1rem",
          },
          "& .MuiButton-startIcon .MuiSvgIcon-fontSizeMedium": {
            fontSize: "40px",
          },
          "& .MuiButton-startIcon": {
            margin: "0",
          },
        }}
      >
        <Typography
          variant="span"
          sx={{
            fontSize: "10px",
            lineHeight: "1.2",
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
      </Button>
    </>
  );
};

export default IconText;
