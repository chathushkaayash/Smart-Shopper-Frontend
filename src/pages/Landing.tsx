import { Box, Flex } from "@chakra-ui/react";
import Slide from "../components/Landing/Slide";
import ProductGrid from "../components/ProductGrid";
import SimpleSlider from "../components/SimpleSlider";

import BestPricesImage from "../assets/landing/online-ads-animate.svg";
import FastDeliveryImage from "../assets/landing/in-no-time-animate (1).svg";
import SmartListsImage from "../assets/landing/ecommerce-checkout-laptop-animate.svg";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Landing = () => {
  return (
    <>
      <SimpleSlider>
        <Slide image={SmartListsImage} title="SmartLists" />
        <Slide image={BestPricesImage} title="BestPrices" />
        <Slide image={FastDeliveryImage} title="FastDelivery" />
      </SimpleSlider>

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
