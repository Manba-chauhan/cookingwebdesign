import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333333",color:"white" }}>
      <Box sx={{textAlign:'center',p:{xs:10,sm:10}}}>
        <Typography>Sample text. Click to select the Text Element.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
