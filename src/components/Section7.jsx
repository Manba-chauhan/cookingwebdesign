import React from "react";
import { Box, Button, Container, IconButton, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { Call } from "@mui/icons-material";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const Section7 = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d0f52933ed605293a4cca814/fgfgfg-min.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        // width: "100%",
        // minHeight: "400px", // Adjust this value based on your design requirements
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // pt:10,
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              mt: { xs: 2, md: 8 },
              // px: 4,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  textWrap: "nowrap",
                  letterSpacing: 2,
                  pt: 10,
                  px: 1,
                  fontSize:{xs:"2rem",sm:"3.5rem"}
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  py: 2,
                  fontSize: "18px",
                  letterSpacing: 1,
                  fontStyle: "italic",
                  px: 2,
                }}
              >
                Image from Freepik
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <IconButton size="large" color="primary">
                  <PhoneIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Call Us
                </Typography>
                <br></br>
              </Box>
              <Typography
                variant="body1"
                sx={{ py: 1, px: 2, fontSize: "18px", letterSpacing: 1 }}
              >
                1 (234) 567-891, 1 (234) 987-654
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <IconButton size="large" color="primary">
                  <LocationOnIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Location
                </Typography>
                <br></br>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  py: 1,
                  pl: 2,
                  pr: { xs: 2, sm: 14 },
                  fontSize: "18px",
                  letterSpacing: 1,
                }}
              >
                121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <IconButton size="large" color="primary">
                  <AccessTimeFilledIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Hours
                </Typography>
                <br></br>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  py: 1,
                  pl: 2,
                  pr: { xs: 2, sm: 12 },
                  fontSize: "18px",
                  letterSpacing: 1,
                }}
              >
                Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… ​9am – 7pm
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" }, pt: { xs: 2, md: 15 } }}>
            <Stack direction={{xs:"column",sm:"row"}} spacing={4}>
              <Box sx={{ color: "white", width: "100%" }}>
                <InputLabel sx={{ color: "white" }}>Email</InputLabel>
                <TextField
                  placeholder="Enter a Valid Emial"
                  variant="outlined"
                  sx={{
                    bgcolor: "info.main",
                  }}
                  size="small"
                  fullWidth
                />
              </Box>
              <Box sx={{ color: "white", width: "100%" }}>
                <InputLabel sx={{ color: "white" }}>Name</InputLabel>
                <TextField
                  placeholder="Enter a name"
                  variant="outlined"
                  sx={{
                    bgcolor: "info.main",
                  }}
                  size="small"
                  fullWidth
                />
              </Box>
            </Stack>
            <Box>
              <InputLabel sx={{ color: "white", mt: 4 }}>Address</InputLabel>
              <TextField
                placeholder="Enter a address"
                variant="outlined"
                sx={{
                  bgcolor: "info.main",
                }}
                size="small"
                fullWidth
              />
            </Box>
            <Box>
              <InputLabel sx={{ color: "white", mt: 4 }}>Address</InputLabel>
              <TextField
                placeholder="Enter a Message"
                variant="outlined"
                sx={{
                  bgcolor: "info.main",
                }}
                size="small"
                fullWidth
                multiline
                rows={6}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                px: 6,
                py: 2,
                my: 6,
                // color:"white",
                "&:hover": {
                  bgcolor: "info.main",
                  color: "secondary.main",
                },
                fontWeight: 600,
                textWrap: "nowrap",
              }}
              fullWidth
            >
             SUbmit
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section7;
