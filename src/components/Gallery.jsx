import { Grid } from "@mui/material";
import React from "react";

const data = [
  {
    img: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/93767a36797555b3a9bbcbcd/fgfgg5.jpg",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/06cc40eef4fc51669ae794a3/fgfgg.jpg",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/3c478243d93a5ffeaa49a82d/fgfgfggf.jpg",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/f5c1027c7d955719a7224416/dfdfdfdfdfdfdfdfdfdfdf.jpg",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ca003e6f8b795d82a8b0cb13/rtrtrtrt.jpg",
  },
  {
    img: "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b04ffcf9140a55d9ab4a1815/hghg.jpg",
  },
];

const Gallery = () => {
  return (
    <Grid container spacing={2}>
    {
        data.map((item)=>{
            return (
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={item.img}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            );
        })
    }
      
    </Grid>
  );
};

export default Gallery;
