import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";

const LogoSlider = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  });

  const logos = [
    "https://essstr.blob.core.windows.net/ebill/KeellsLogo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGGLL24J49FPy6N2vCiKjiOYBUBrLnjqGIg&s",
    "https://upload.wikimedia.org/wikipedia/en/0/03/Arpico_Supercenter_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE_p4sORX_CdMhfU9njY67ZCeC2iUrdIvGw&s",
    "https://1000logos.net/wp-content/uploads/2021/04/SPAR-Logo.png",
    "https://glomark.lk/build/images/logo.9155b058.png",
  ];
  return (
    <Box my={10}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box key={index} className="container">
            <Image src={logo} alt="logo" maxH={12} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default LogoSlider;
