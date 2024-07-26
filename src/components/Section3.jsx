import { Box, Container, Stack, Typography ,Button} from '@mui/material';
import React from 'react';
import SmallCard from './SmallCard';
import Gallery from './Gallery';

const Section3 = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        pt: 4,
        color: "info.main",
        pb:44,
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box sx={{ width: { xs: "100%", md: "50%" }, mt: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: "#fff",
                py: 1,
              }}
            >
              About Salon
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "20.5px",
                fontFamily: "sans-serif",
                lineHeight: 1.3,
                letterSpacing: 2,
                fontWeight: 700,
                py: 2,
              }}
            >
              To provide a safe and enjoyable environment for all of our clients
              and work with our clients to achieve the results to services they
              request, while focusing their hair, nail, and skin health.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                letterSpacing: 2,
                fontFamily: "serif",
                lineHeight: 2,
              }}
            >
              Sample text. Click to Egestas egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium vulputate. Pharetra magna ac
              placerat vestibulum. Quam lacus suspendisse faucibus interdum
              posuere lorem. Egestas tellus rutrum tellus pellentesque eu
              tincidunt. Neque vitae tempus quam pellentesque nec.
            </Typography>
            <Button
              variant="contained"
              sx={{
                px: 6,
                py: 1,
                my: 4,
                // color:"white",
                "&:hover": {
                  bgcolor: "info.main",
                  color: "secondary.main",
                },
                fontWeight: 600,
                textWrap: "nowrap",
              }}
            >
              Book Now
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              ml: { xs: 0, sm: 0, md: 4 },
            }}
          >
            <Stack direction={{ xs: "column" }} spacing={2}>
              <SmallCard name="Celia Almeda" />
              <SmallCard name="Frank Kinney" />
              <SmallCard name="Philipp Nelson" />
            </Stack>
          </Box>
        </Stack>
        <Box sx={{mt:16}}>
          <Box sx={{width:{xs:"100%",sm:"80%"},mx:"auto"}}>
            <Typography sx={{textAlign:"center",fontSize:{xs:"1.5rem",sm:"2.5rem",md:"3.5rem"},color:"primary.main",fontWeight:950,letterSpacing:2}}>
              To book and for exact pricing please call us at 123-456-7868
            </Typography>
          </Box>
          {/* <Gallery/> */}
        </Box>
      </Container>
    </Box>
  );
}

export default Section3;
