import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

class ManualAdjust extends Component {
    render() {
    	return(
      	<Box sx={{width: 300, height: 300, backgroundColor: 'primary.dark'}}>
				{/* Stack for the text titles for "Inputs" and "Preview" Towards the top */}
					<Stack 
						direction = "row" 
						justify = "Center" 
						alignItems = "center" 
						spacing = {24}>

							<Item>Inputs</Item>
							<Item>Preview</Item>

					</Stack>
				</Box>
		
  );
}
}

export default ManualAdjust;