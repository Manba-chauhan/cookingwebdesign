import React from 'react';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Gallery from './Gallery';

const Section4 = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "black",
      }}
    >
      <Container>
        <Box sx={{ position: "relative", top: -180 }}>
          <Gallery />
        </Box>
        <Box sx={{ position: "relative", top: -100 }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            sx={{ mt: 10 }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <img
                src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/5c98b28c952d54e3b1e515c9/gffgfg.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ textAlign: "center", position: "relative", top: -70 }}>
                <Typography
                  sx={{ fontSize: "2.5rem", letterSpacing: 2, color: "white" }}
                >
                  MISSION
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box sx={{ textAlign: "right", py: 2 }}>
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    py: 2,
                    letterSpacing: 2,
                  }}
                >
                  WHO WE ARE
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 200,
                    letterSpacing: 1.4,
                    py: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <Divider color="black" />
              <Box sx={{ textAlign: "right", pt: 6, pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    py: 2,
                    letterSpacing: 2,
                  }}
                >
                  WHAT WE DO
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 200,
                    letterSpacing: 1.4,
                    py: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <Divider color="black" />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Section4;
