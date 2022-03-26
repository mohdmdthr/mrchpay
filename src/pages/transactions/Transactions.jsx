import React, { useState } from "react";
import { Stack } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import PageTitle from "../../components/pageTitle/PageTitle";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";

const Transactions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack>
      <PageTitle icon={<HistoryToggleOffOutlinedIcon />} title="Transactions" />
      <Stack mt="2rem">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Stack direction="row" alignItems="center">
              <HistoryToggleOffOutlinedIcon fontSize="large" />
              <Typography variant="h6" sx={{ marginInlineStart: "1rem" }}>
                Services
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Stack direction="row" alignItems="center">
              <HistoryToggleOffOutlinedIcon fontSize="large" />
              <Typography variant="h6" sx={{ marginInlineStart: "1rem" }}>
                Invoices
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Stack direction="row" alignItems="center">
              <HistoryToggleOffOutlinedIcon fontSize="large" />
              <Typography variant="h6" sx={{ marginInlineStart: "1rem" }}>
                Transactions
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default Transactions;
