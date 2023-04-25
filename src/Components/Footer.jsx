import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Paper, Button, Stack, Stepper, Step, StepLabel, Typography, Container } from "@mui/material";

function Footer() { 
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Initial Input", "Refine Output", "Preview and Export"];
  
  const handleNext = () => {
    navigate(`/step${activeStep + 1}`)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);     
  };

  const handleBack = () => {
      navigate(`/step${activeStep - 1}`)

    setActiveStep((prevActiveStep) => prevActiveStep - 1);   
  };

  return(
    <Paper style={{position:"fixed", bottom:0, width:"100%"}}>
      <Stack
        direction="row" 
        width="100%"
        style={{backgroundColor:"Grey"}} 
        justifyContent="space-around" 
        alignItems="center"
        paddingTop={1}
        paddingBottom={1}
      >
      
        <Button 
          variant="contained" 
          onClick={handleBack} 
          style={{marginLeft:"10%"}}
          disabled={activeStep === 0}
        >
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

        <Button 
          variant="contained" 
          onClick={handleNext} 
          style={{marginRight:"10%"}}
          disabled={activeStep === steps.length - 1}
        >
          {activeStep !== steps.length - 1 ? "Next" : "Finish"}
        </Button>

      </Stack>
    </Paper>
  ); 
}

export default Footer;