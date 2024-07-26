import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ServiceComp from './ServiceComp';


const data = [
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/23cfc8a8ddea518493fefc3f/d85c6484-e032-e766-114a-3c4f70b9cd91.jpg",
    title: "PERMANENT      COLOR",
    price: "$225 and Up",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/3bd2bae272915e2e8ad02812/dsdsd.jpg",
    title: "WASH, RETWIST AND STYLE",
    price: "$125 and Up",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/5bfb580ddc9a5375a5fcbf93/000d68fc-8143-28ce-c245-876398073a2d.jpg",
    title: "DETOX   TREATMENT",
    price: "$85 and Up",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/79f9825468635659b77ffe68/8554a0da-6262-fe25-42cf-743b0d0f3815.jpg",
    title: "HOT OIL TREATMENT",
    price: "$155 and Up",
  },
];


const Section2 = () => {
  return (
    <Box sx={{ bgcolor: "primary.main",pb:5 }}>
      <Container>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "sans-serif",
              py: 5,
              textAlign: "center",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            Hair Services
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <ServiceComp 
                    img={item.img}
                    title={item.title}
                    price={item.price}

                />
              </Grid>
            );
          })}
         
        </Grid>
      </Container>
    </Box>
  );
}

export default Section2;
