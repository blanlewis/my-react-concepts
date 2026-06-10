"use client";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

interface CustomAccordionProps {
  header: React.ReactNode;
  body: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const CustomAccordion = ({
  header,
  body,
  isExpanded,
  onToggle,
}: CustomAccordionProps) => (
  <Accordion expanded={isExpanded} onChange={onToggle} sx={{ boxShadow: "none" }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {header}
    </AccordionSummary>
    <AccordionDetails>{body}</AccordionDetails>
  </Accordion>
);

export default CustomAccordion;