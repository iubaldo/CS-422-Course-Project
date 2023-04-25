import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import Header from "../Components/Header";
import Footer from "../Components/Footer";

class InitialInput extends Component {
  render() {
    return (
      
			<Stack justifyContent = "center" alignItems = "center" spacing = {"2%"}>
        <Header />
        <Stack direction="row" alignItems = "center" spacing={"0%"}>
          <Typography variant = "h4">What kind of texture would you like to generate?</Typography>
          <TextField label="Enter Noun here" variant="standard" />
        </Stack>
        <Stack direction="row" alignItems = "center" spacing={"0%"}>
          <Typography variant = "h4">What kind of modifiers would you like to apply?</Typography>
          <TextField label="Enter adjective(s) here" variant="standard" />
        </Stack>
        <Stack direction="row" alignItems = "center" spacing={"0%"}>
          <Typography variant = "h4">Texture size:</Typography>
          <TextField label="Enter size eg.(1500x500)" variant="standard" />
        </Stack>
        <Stack direction="row" alignItems = "center" spacing={"0%"}>
          <Typography variant = "h4">Texture resolution:</Typography>
          <TextField label="Enter resolution" variant="standard" />
        </Stack>

        <Box sx={{width: "100%", height: "10%", backgroundColor: 'black'}}>
          <Stack alignItems = "center">
            <Typography color = "white" variant = "h6"> Preview</Typography>
          </Stack>
        </Box>
        
        <Paper elevation={3} style={{padding: 0, backgroundColor:"#f2f2f2"}}>
						<img src="/Images/projectimage.jpg" alt="placeholder"/>
            <img src="/Images/projectimage.jpg" alt="placeholder"/>
            <img src="/Images/projectimage.jpg" alt="placeholder"/>
				</Paper>

        <Footer/>
      </Stack>
    );
  }
}

export default InitialInput;