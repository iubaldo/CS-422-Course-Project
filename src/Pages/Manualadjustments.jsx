import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

class ManualAdjust extends Component {
    render() {
    	return(
      	<Box
          sx={{
            width: 300, height: 300, backgroundColor: 'primary.dark',
            '&:hover': { backgroundColor: 'primary.main', 
            opacity: [0.9, 0.8, 0.7],
            },
        }}
				>
					<Stack 
						direction = "row" 
						justifyContents = "Center" 
						alignItems = "center" 
						spacing = {2}>
							

					</Stack>
				</Box>
		
  );
}
}

export default ManualAdjust;