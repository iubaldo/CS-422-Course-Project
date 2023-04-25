import React, { Component } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';

class Header extends Component {
    render() {
    	return(
      	<Box sx={{width: "100%", height: "100%", backgroundColor: 'Grey'}}>
          <Stack direction="row" padding={1} alignItems="center">
            <a href = "/">
              <img width="60%" src="/Images/logo.png" alt="logo"/>
            </a>
            <Box>
              <Typography variant="h2" color="White">Texture Generator</Typography>
            </Box>
            
          </Stack>
        </Box>
      );
    }
  }

export default Header;