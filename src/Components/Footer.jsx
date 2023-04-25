import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Paper, Button, Stack, Stepper, Step, StepLabel, Typography, Container } from "@mui/material";

function Footer() { 
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Initial Input", "Refine Output", "Preview and Export"];
  
  const handleNext = () => {
    if (activeStep !== steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      navigate("/step" + (activeStep + 1));
    }  
  }
  
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      navigate("/step" + (activeStep + 1));
    }
  }

  return(
    <Paper style={{position:"fixed", bottom:0, width:"100%"}}>
      <Stack
        direction="row" 
        width="100%"
        style={{backgroundColor:"Grey"}} 
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
    </Paper>
  ); 
}

export default Footer;