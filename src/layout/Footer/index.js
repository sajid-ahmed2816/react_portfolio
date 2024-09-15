import React from 'react';
import { AppBar, Box, Container, Typography } from '@mui/material';
import Colors from '../../assets/style';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: Colors.black,
      display: "flex",
      justifyContent: "center",
      p: 2,
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      color: Colors.white
    }}>
      <Typography sx={{ color: Colors.white }}>
        Created By Sajid Dev
      </Typography>
    </Box>
  )
}

export default Footer