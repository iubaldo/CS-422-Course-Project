import React, { Component } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';

class Header extends Component {
    render() {
    	return(
      	<Box sx={{width: "100%", height: "100%", backgroundColor: 'Grey'}}>
          <Stack direction="row" alignContent="flex-start" padding={1}>
            <img style={{width:"10%", height:"10%"}} src="/Images/logo.png" alt="logo"/>
          </Stack>
        </Box>
      );
    }
  }

export default Header;