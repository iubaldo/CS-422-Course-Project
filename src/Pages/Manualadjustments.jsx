import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

class ManualAdjust extends Component {
    render() {
    	return(
				<Stack direction = "row" justify = "Center" alignItems = "center" spacing = {24} >

							<Typography color="white" variant="h4">Inputs</Typography>
							<Typography color="white" variant="h4">Preview</Typography>

					</Stack>
  );
}
}

export default ManualAdjust;