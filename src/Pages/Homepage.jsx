import React, { Component } from "react";
import "../App.css"

// MUI
import { Typography, Button, Paper, Stack } from '@mui/material';

// Pages
import ManualAdjust from "./Manualadjustments"

class Homepage extends Component {
  render() {
    return (
      <Stack className = "home_body" spacing={4}>
        <Paper elevation={3} style={{padding:20}}>
          <Typography variant="h1">
            Welcome to Poly
          </Typography>
        </Paper>
        <Button variant="outlined" href="/step1">
          Get Started
        </Button>
      </Stack>
    );
  }
}

export default Homepage;