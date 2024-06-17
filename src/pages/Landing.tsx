import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";
import image1 from "../assets/landing/ecommerce-checkout-laptop-animate.svg";
import image2 from "../assets/landing/in-no-time-animate (1).svg";
import image3 from "../assets/landing/online-ads-animate.svg";
import HorizontalScrollContainer from "../components/Containers/HorizontalScroller";
import SmartLists from "../components/Landing/Slides/SmartLists";
import FastDelivery from "../components/Landing/Slides/FastDelivery";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Landing = () => {
  return (
    <>
      <FastDelivery  />
      <SmartLists  />

      {/* <Image src={image1} width={400} />
      <Image src={image2} width={400} />
      <Image src={image3} width={400} /> */}
      <Flex
        width="100%"
        bg="background"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <ProductGrid productQuery={{} as ProductQuery} />
        </Box>
      </Flex>
    </>
  );
};

export default Landing;
