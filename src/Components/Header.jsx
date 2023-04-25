import React, { Component } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class Header extends Component {
    render() {
    	return(
      	<Box sx={{width: "100%", height: "100%", backgroundColor: 'Grey'}}>
          <Stack direction="row"  spacing = "55%" alignContent="flex-start" padding={1}>
            <img style={{width:"10%", height:"10%"}} src="/Images/logo.png" alt="logo"/>

            <Box sx={{width: "100%", height: "100%", backgroundColor: 'Grey'}}>
            <Button variant="contained" href="/step1">
            Text Prompt
            </Button>

            <Button variant="contained" href="/step2">
            Refine Options
            </Button>

            <Button variant="contained" href="/step3">
            Manual Adjustments
            </Button>

            <Button variant="contained" href="/step1">
            Preview
            </Button>
            </Box>
          </Stack>
        </Box>
      );
    }
  }

export default Header;