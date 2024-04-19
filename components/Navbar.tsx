import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };


    return (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
              <img style={{height: 'auto', maxWidth: '100%', width:'7rem' ,padding:'0', margin: '0'}}src="logo.jpg"></img>
          </Typography>
          <Divider />
      </Box>
    )
}