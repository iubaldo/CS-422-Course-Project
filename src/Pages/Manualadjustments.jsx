import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

import Header from "../Components/Header";


class ManualAdjust extends Component {
    render() {
    	return(
			<Stack spacing = {0}>
				<Header></Header>
				
				<Box sx={{width: 5000, height: 50, backgroundColor: 'black'}}>
				<Stack direction = "row" justify = "Center" alignItems = "center" spacing = {150} >
							<Typography color = "white" variant="h4">Inputs</Typography>
							<Typography color = "white"  variant="h4">Preview</Typography>
				</Stack>
				</Box>
			</Stack>
  );
}
}

export default ManualAdjust;