import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import Slide from "../components/Landing/Slide";
import ProductGrid from "../components/ProductGrid";
import SimpleSlider from "../components/SimpleSlider";

import BestPricesImage from "../assets/landing/online-ads-animate.svg";
import FastDeliveryImage from "../assets/landing/in-no-time-animate (1).svg";
import SmartListsImage from "../assets/landing/ecommerce-checkout-laptop-animate.svg";
import Segment from "../components/Landing/Segment";

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
      <VStack
        justifyContent="center"
        alignItems="center"
        bg="background"
      >
        <ProductGrid productQuery={{} as ProductQuery} />
        <Segment />
      </VStack>
    </>
  );
};

export default Landing;
