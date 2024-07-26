import { Container ,Box, AppBar, Toolbar, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box>
              <AppBar sx={{
                bgcolor:"info.main"
              }}>
           <Container>
                <Toolbar>
                    <Box sx={{flexGrow:1}}>
                        <Typography variant='h4' component={Box} sx={{
                              fontFamily:"cursive",


                        }}>
                            Logo
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton size='large'>
                            <MenuIcon color='#111111'/>
                        </IconButton>
                    </Box>
                </Toolbar>
     </Container>
              </AppBar>
      
    </Box>
  );
}

export default Header;
