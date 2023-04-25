import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import Header from "../Components/Header";
import Footer from "../Components/Footer";


class RefineOutput extends Component {
    render() {
    	return(
			<Stack>
				<Header />
				
					<Stack direction="row" padding={1}>
						<Paper elevation={3} sx={{width:"20%", padding:1, marginRight:"10%", backgroundColor: 'black'}}>
							<Typography color = "white" variant="h4">Inputs</Typography>
						</Paper>
						<Paper elevation={3} sx={{padding:1, backgroundColor: 'black'}}>
							<Typography color = "white"  variant="h4">Preview</Typography>
						</Paper>
					</Stack>
				
				<Stack direction = "row" width="90%" padding={1}>
					{/*Box on the left */}
					<Stack width="25%" marginRight="10%">
						
						{/*Brightness/Contrast Section*/}
						<Paper variant = "outlined">
							<Box padding={1} sx={{backgroundColor: 'black'}}>
								<Typography color = "white" variant="h5">Brightness/Contrast</Typography>
							</Box>
						</Paper>
						<Typography variant = "h6"> Brightness</Typography>
						<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>
						<Typography variant = "h6"> Contrast</Typography>
						<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>

						{/*Hue/Saturation Section*/}
						<Paper variant = "outlined">
							<Box padding={1} sx={{backgroundColor: 'black'}}>
								<Typography color = "white" variant="h5">Hue/Saturation</Typography>
							</Box>
						</Paper>
						<Typography variant = "h6"> Hue</Typography>
						<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>
						<Typography variant = "h6"> Saturation</Typography>
						<Slider defaultValue = {50} aria-label="Default" valueLabelDisplay="auto"/>

						{/*Exposure Section*/}
						<Paper variant = "outlined">
							<Box padding={1} sx={{backgroundColor: 'black'}}>
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

								
					<Paper elevation={3} style={{padding: 15, backgroundColor:"#f2f2f2"}}>
						<img src="/Images/projectimage.jpg" alt="placeholder"/>
					</Paper>

				</Stack>

				<Footer />
			</Stack>

			
  );
}
}

export default RefineOutput;