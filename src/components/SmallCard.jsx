import { Box, Typography } from '@mui/material';
import React from 'react';

const SmallCard = (props) => {
  return (
    <Box sx={{ bgcolor: "primary.main", px: 4, py:2, borderRadius: "10px",}}>
      <Box>
        <Typography sx={{fontSize:"2rem",fontFamily:"robato"}}>
          <i class="fa-solid fa-quote-left" color='white'></i>
        </Typography>
        <Typography variant="body1" sx={{fontSize:"17px",color:"black"}}>
          Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan
          sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit
          amet nisl. Enim nunc
        </Typography>
        <Typography sx={{fontSize:"1.3rem",color:"black",pt:2,fontWeight:"bold"}}>{props.name}</Typography>
      </Box>
    </Box>
  );
}

export default SmallCard;
