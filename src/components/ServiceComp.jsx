import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ServiceComp = (props) => {
  return (
    <Box>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Box
          sx={{
            width: "188px",
            height: "188px",
            border: "10px solid ",
            borderColor: "#fff",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        >
          <img
            src={props.img}
            alt="ig"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "188px", // Same width as the image container
            height: "60px", // Adjust as needed
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            &nbsp;{props.title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {props.price}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceComp;
