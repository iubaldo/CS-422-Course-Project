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
      style={{backgroundColor:"#94969c"}} 
      justifyContent="space-around" 
      alignItems="center"
    >
     
      <Button variant="contained" onClick={handleBack} style={{marginLeft:"10%"}}>
        Prev
      </Button>
      
      <Container>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map(label => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <Typography style={{fontSize:24, color:"white"}}>
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Container>

      <Button variant="contained" onClick={handleNext} style={{marginRight:"10%"}}>
        Next
      </Button>

    </Stack>
  ); 
}

export default Footer;