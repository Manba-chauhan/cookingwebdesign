import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Section1 = () => {
  return (
    <Box sx={{ bgcolor: "black" }}>
      <Container>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, pt: 20 }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "3rem", sm: "5rem" },
                  color: "primary.main",
                  fontWeight: 700,
                }}
              >
                Dreadlocks & Weave Spa
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "22px",
                  color: "info.main",
                  lineHeight: 1.5,
                  py: 2,
                }}
                component={Box}
              >
                Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet
                purus quis elementum.
              </Typography>
              <Stack direction="row" spacing={6} sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  color="info"
                  sx={{
                    px: 6,
                    py: 1.3,
                    borderColor:"#fff",
                    "&:hover": {
                      bgcolor: "info.main",
                      color: "secondary.main",
                    },
                    fontWeight: 600,
                  }}
                >
                  Services
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    px: 6,
                    py: 1,
                    // color:"white",
                    "&:hover": {
                      bgcolor: "info.main",
                      color: "secondary.main",
                    },
                    fontWeight: 600,
                    textWrap:"nowrap"
                  }}
                >
                  Book Now
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}>
            <Box>
              <img
                src="https://assets.nicepagecdn.com/d2cc3eaa/3125827/images/Untitled-1.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
