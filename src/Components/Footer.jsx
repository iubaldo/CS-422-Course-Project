import React, { useState } from "react";

// MUI
import { Button, Stack, Stepper, Step, StepLabel, Typography, Container } from "@mui/material";

function Footer() { 
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Initial Input", "Refine Output", "Preview and Export"];
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  return(
    <Stack
      direction="row" 
      width="100%" 
      style={{backgroundColor:"#FFFFD0"}} 
      justifyContent="space-evenly" 
      alignItems="center">

      <Container style={{backgroundColor:"#FFF0D0"}} >
        <Button variant="contained" onClick={handleBack}>
          Prev
        </Button>
      </Container>
      
      <Container>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map(label => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Typography style={{fontSize:24}}>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Container>

      <Container>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Container>

    </Stack>
  ); 
}

export default Footer;