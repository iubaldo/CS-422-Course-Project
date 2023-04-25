import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

class ManualAdjust extends Component {
    render() {
    	return(
      	<Box sx={{width: 5000, height: 50, backgroundColor: 'black'}}>
				{/* Stack for the text titles for "Inputs" and "Preview" Towards the top */}
					<Stack 
						direction = "row" 
						justify = "Center" 
						alignItems = "center" 
						spacing = {24}>

							<Typography color="white" variant="h4">Inputs</Typography>
							<Typography color="white" variant="h4">Preview</Typography>

					</Stack>
					<Stack direction = "vertical"><Typography variant = "h1">test</Typography></Stack>
				</Box>
		
  );
}
}

export default ManualAdjust;