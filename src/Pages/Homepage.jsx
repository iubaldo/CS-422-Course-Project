import React, { Component } from "react";
import styles from "../Styles/style.css"

// MUI
import { Typography, Button, Paper } from '@mui/material';



class Homepage extends Component {
  render() {
    return (
      <div className = {styles.home_body}>
        <Paper elevation={3}>
          <Typography variant="h1">
            Welcome to Poly
          </Typography>
        </Paper>
        

        <Button variant="outlined">
          Get Started
        </Button>
      </div>
    );
  }
}

export default Homepage;