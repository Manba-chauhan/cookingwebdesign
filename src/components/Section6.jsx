import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';

const Section6 = () => {
  return (
    <Box sx={{ bgcolor: "primary.main",pb:4 }}>
      <Container>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, mt: 4,  }}
          >
            <img
              src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/bd1ac018244d51289ca8ddc5/ghghhghghhg.jpg"
              alt="img"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, mt:{xs:2,sm:2,md:8}, px:4  }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  textWrap:'nowrap'
                }}
              >
                Visit Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ pt: 3, fontSize: "18px", letterSpacing: 1 ,width:{xs:"100%",sm:'80%',md:"50%"}}}
              >
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </Typography>
              <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
                Hours
              </Typography>
              <Typography
                variant="body1"
                sx={{ py: 2, fontSize: "18px", letterSpacing: 1 }}
              >
                Monday – Saturday<br></br> 9am – 7pm
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", letterSpacing: 1 }}
              >
                Sunday <br></br> 10am – 6pm
              </Typography>
              <Typography variant="h5" sx={{ mt: 3, fontWeight: 600 }}>
                Phone
              </Typography>
              <Typography
                variant="body1"
                sx={{ py: 1, fontSize: "18px", letterSpacing: 1 }}
              >
                1 (234) 567-891
              </Typography>
              <Typography
                variant="body1"
                sx={{ py:1, fontSize: "18px", letterSpacing: 1,fontStyle:"italic" }}
              >
                Image from Freepik
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Section6;
