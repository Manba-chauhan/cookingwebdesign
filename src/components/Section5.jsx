import { Box, Container, Stack, Typography, Button } from "@mui/material";
import React from "react";

const Section5 = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        position: "relative",
        pb: 20,
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
        >
          <Box sx={{ width: { xs: "100%", md: "100%", lg: "50%" }, mt: 13 }}>
            <Box sx={{ px: 2, py: 3 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  py: 1,
                }}
              >
                Why Us?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "23.5px",
                  fontFamily: "sans-serif",
                  lineHeight: 1.3,
                  letterSpacing: 2,
                  fontWeight: 700,
                  py: 2,
                }}
              >
                We specialize in locking <br></br> all textures of hair from
                straight to curly to wavy to kinky. We also lock relaxed hair.
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
                Sample text. Click to Egestas egestas fringilla phasellus
                faucibus scelerisque eleifend donec pretium vulputate. Pharetra
                magna ac placerat vestibulum. Quam lacus suspendisse faucibus
                interdum posuere lorem. Egestas tellus rutrum tellus
                pellentesque eu tincidunt. Neque vitae tempus quam pellentesque
                nec.
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
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
              mt: 5,
            }}
          >
            <Box sx={{ width: { xs: "300px", sm: "583px", lg: "583px" ,xl:"800px"} }}>
              <img
                src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b72fb2c522a95ccfbc42846e/bfa58c15-fd77-f52e-94e7-443d7f3d5aec.jpg"
                alt="img"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: {xs:"50%",sm:"30%",md:"20%",lg:'50%'},
                right: 0,
                width: { xs: "300px", sm: "580px", lg: "583px", },
                height: {xs:300 ,sm:"500px"},
                bgcolor: "primary.main",
                transform: { xs: "translateY(100%)", md:"ranslateY(-50%)" ,lg: "translateY(-30%)" },
              }}
            ></Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section5;
