import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import IconText from "../../components/iconText/IconText";
import Card from "../../components/card/Card";

import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { ButtonGroup } from "@mui/material";

import "./manageCards.css";

const ManageCards = () => {
  return (
    <>
      <PageTitle icon={<DynamicFeedOutlinedIcon />} title="Manage Cards" />
      <ButtonGroup
        sx={{
          justifyContent: "space-between",
          mt: "1rem",
          width: "100%",
          "& .MuiButton-root	": {
            borderRadius: "15px",
          },
        }}
      >
        <IconText
          path="/manage-cards/add"
          icon={<AddCardOutlinedIcon />}
          text="Add card"
        />
        <IconText
          path="/manage-cards/create"
          icon={<AddBoxOutlinedIcon />}
          text="Create card"
        />
        <IconText
          path="/manage-cards/edit"
          icon={<DriveFileRenameOutlineOutlinedIcon />}
          text="Edit"
        />
        <IconText
          path="/manage-cards/delete"
          icon={<DeleteForeverOutlinedIcon />}
          text="Delete"
        />
        <IconText
          path="/manage-cards/manage-code"
          icon={<LockOutlinedIcon />}
          text="Manage Code"
        />
      </ButtonGroup>

      <Card
        cardType="Credit Card"
        bankName="Bank Name"
        cardNumber="---- ---- ---- ----"
        monthIssued="0123"
        dateExpiry="MM/YY"
        cardHolder="Holder's name"
      />

      <Card
        cardType="Credit Card"
        bankName="Bank Name"
        cardNumber="---- ---- ---- ----"
        monthIssued="0123"
        dateExpiry="MM/YY"
        cardHolder="Holder's name"
      />
    </>
  );
};

export default ManageCards;
