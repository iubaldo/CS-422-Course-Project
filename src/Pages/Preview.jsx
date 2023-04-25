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
			<Stack spacing>
				<Header></Header>
				
				<Paper variant = "outlined" >
				<Box sx={{width: 1918, height: 42, backgroundColor: 'black'}}>
				<Stack direction = "row"  spacing = {150} >
					<Typography color = "white" variant="h4">Inputs</Typography>
					<Typography color = "white"  variant="h4">Preview</Typography>
				</Stack>
				</Box>
				</Paper>

				<Stack direction = "row" padding={1} spacing = {30}>
          

				<Stack>
						
						<Paper elevation={3} style={{padding: 15, backgroundColor:"#f2f2f2"}}>
						<img style={{width:1100, height:650}} src="/Images/projectimage.jpg"/>
						</Paper>
				</Stack>

				</Stack>

			</Stack>

			
  );
}
}

export default ManualAdjust;