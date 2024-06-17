import React from "react";
import Slider from "react-slick";

import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
  children: React.ReactNode;
}

export default function SimpleSlider({ children }: Props) {
  const settings = {
    dots: true,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    // fade: true,
  };
  return (
    <Box paddingBottom={10} bg="background">
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
}
