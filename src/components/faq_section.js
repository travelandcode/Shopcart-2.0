import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function FAQSection({question,info}) {
  const answerLines = info.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
  ));
  return (
      <Accordion className="flex flex-col mx-auto w-full rounded-[75px]">
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography className="[ font-bold ]">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col ">
          <Typography className="[ text-left text-balance ]">
            {answerLines}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}

export default FAQSection;





