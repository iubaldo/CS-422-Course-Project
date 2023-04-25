import React, { Component, useState } from "react";

// MUI
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FormControl, InputLabel, TextField, Select, MenuItem, Button, Box } from "@mui/material";


function Preview() {
	const [format, setFormat] = React.useState("PNG");

	const handleChange = (event) => {
		setFormat(event.target.value);
	};

	return(
			<Stack>
				<Header />
				<Stack direction="row" padding={1} width="99%">
					<Stack width="25%" marginRight="5%">
						<Paper elevation={3} sx={{padding:1, backgroundColor: 'black'}}>
							<Typography color = "white" variant="h4">Export Settings</Typography>
						</Paper>

						<Stack marginTop="10%" spacing={1}>
							<Paper elevation={3} sx={{backgroundColor: 'black', padding:1}} >
								<Typography color = "white" variant="h5">Image Size</Typography>
							</Paper>
							<TextField variant="outlined" type="number" label="Height" />
							<TextField variant="outlined" type="number" label="Width" />
						</Stack>

						<Stack marginTop="10%" spacing={1}>
							<Paper elevation={3} sx={{backgroundColor: 'black', padding:1}} >
								<Typography color = "white" variant="h5">File Format</Typography>
							</Paper>
							<FormControl>
								<InputLabel>Format</InputLabel>
								<Select value={format} label="Format" onChange={handleChange}>
									<MenuItem value="PNG">PNG</MenuItem>
									<MenuItem value="JPG">JPG</MenuItem>
									<MenuItem value="WEBP">WEBP</MenuItem>
									<MenuItem value="BMP">BMP</MenuItem>
									<MenuItem value="TIFF">TIFF</MenuItem>
								</Select>
							</FormControl>
						</Stack>

						<Button variant = "contained" size = "large" sx={{marginTop:"10%"}}>
							Export
						</Button>
						
					</Stack>

					<Stack width="70%">
						<Paper elevation={3} sx={{padding:1, backgroundColor: 'black'}}>
							<Typography color = "white" variant="h4">Preview</Typography>
						</Paper>

						<img width="40%" src="/Images/projectimage.jpg" alt="placeholder"/>
											
					</Stack>
				</Stack>
		</Stack>
	);
}

export default Preview;