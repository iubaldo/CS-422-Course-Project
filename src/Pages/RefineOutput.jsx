import React, { Component } from "react";

import Footer from "../Components/Footer";
import { Paper } from "@mui/material";

class RefineOutput extends Component {
  render() {
    return (
      <Paper style={{position:"fixed", bottom:0, width:"100%"}}>
        <Footer />
      </Paper>
    );
  }
}

export default RefineOutput;