import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import Header from "../Components/Header";


class Preview extends Component {
    render() {
    	return(
			<Stack>
				<Header></Header>
				
				<Paper variant = "outlined" >
				<Box sx={{width: "100%", height: "10%", backgroundColor: 'black'}}>
				<Stack direction = "row"  spacing = {"50%"} justifyContent="center">
					<Typography color = "white" variant="h4">Export Settings</Typography>
					<Typography color = "white"  variant="h4">Preview</Typography>
				</Stack>
				</Box>
				</Paper>

				<Stack direction = "row" padding={"1%"} spacing = {"15%"} alignItems="center" justifyContent="center">

          <Button style={{width:"35%"}} variant = "contained" size="large">
            Export
          </Button>

					<img style={{width:"50%", height:"50%"}} src="/Images/projectimage.jpg"/>


				</Stack>

			</Stack>

			
  );
}
}

export default Preview;