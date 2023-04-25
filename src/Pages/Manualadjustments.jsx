import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import Header from "../Components/Header";


class ManualAdjust extends Component {
    render() {
    	return(
			<Stack spacing = {0}>
				<Header></Header>
				
				<Paper variant = "outlined" >
				<Box sx={{width: 1918, height: 42, backgroundColor: 'black'}}>
				<Stack direction = "row"  spacing = {150} >
					
					{/*Box on the left */}
					<Stack>
							<Typography color = "white" variant="h4">Inputs</Typography>

							{/*Brightness/Contrast Section*/}
							<Paper variant = "outlined">
							<Box sx={{width: 250, height: 30, backgroundColor: 'black'}}>
								<Typography color = "white" variant="h5">Brightness/Contrast</Typography>
							</Box>
							</Paper>
							<Typography variant = "h6"> Brightness</Typography>
							<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>
							<Typography variant = "h6"> Contrast</Typography>
							<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>

							{/*Hue/Saturation Section*/}
							<Paper variant = "outlined">
							<Box sx={{width: 250, height: 30, backgroundColor: 'black'}}>
								<Typography color = "white" variant="h5">Hue/Saturation</Typography>
							</Box>
							</Paper>
							<Typography variant = "h6"> Hue</Typography>
							<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>
							<Typography variant = "h6"> Saturation</Typography>
							<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>

							{/*Exposure Section*/}
							<Paper variant = "outlined">
							<Box sx={{width: 250, height: 30, backgroundColor: 'black'}}>
								<Typography color = "white" variant="h5">Exposure</Typography>
							</Box>
							</Paper>
							<Typography variant = "h6"> Exposure</Typography>
							<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>

							{/*Invert Colors*/}
							<Button variant = "contained" size = "large">
								Invert Colors
							</Button>
					</Stack>

					<Stack>
							<Typography color = "white"  variant="h4">Preview</Typography>
							<Paper elevation={3} style={{backgroundColor:"#f2f2f2"}}>
          		<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
        			</Paper>
							<Paper elevation={3} style={{backgroundColor:"#f2f2f2"}}>
          		<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
        			</Paper>
							<Paper elevation={3} style={{backgroundColor:"#f2f2f2"}}>
          		<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
        			</Paper>
							<Paper elevation={3} style={{backgroundColor:"#f2f2f2"}}>
          		<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
							<img style={{width:130, height:125}} src="/Images/projectimage.jpg"/>
        			</Paper>
					</Stack>
				
				</Stack>
				</Box>
				</Paper>
			</Stack>
  );
}
}

export default ManualAdjust;