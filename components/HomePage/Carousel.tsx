import { Box } from "@mui/material";
import React from "react";

import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
   <div style={{backgroundColor: "blue", padding: "0 2rem"}}>
      <Slider {...settings}>
    {
      ["0", "1", "2", "3"].map(item => (
        <Box key={item} sx={{minHeight: "60vh", backgroundColor: "red"}}> {item} </Box>
      ))
    }
    </Slider>
   </div>
  );
};

export default Carousel;
