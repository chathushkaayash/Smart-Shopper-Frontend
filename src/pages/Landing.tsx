import { Box, Show, VStack } from "@chakra-ui/react";
import Slide from "../components/Landing/Slide";
import ProductGrid from "../components/ProductGrid";
import SimpleSlider from "../components/SimpleSlider";

import SmartListsImage from "../assets/landing/ecommerce-checkout-laptop-animate.svg";
import FastDeliveryImage from "../assets/landing/in-no-time-animate (1).svg";
import BestPricesImage from "../assets/landing/online-ads-animate.svg";
import Footer from "../components/Footer";
import AdvertisementGrid from "../components/Landing/AdvertisementGrid";
import BestSellingProducts from "../components/Landing/BestSellingProducts";
import BrowseByCategory from "../components/Landing/BrowseByCategory";
import Section from "../components/Landing/Section";
import Navbar from "../components/Navbar";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Landing = () => {
  return (
    <>
      {/* Automatically show the Navbar component when the screen size is above medium */}
      {/* But in this case the Navbar component is not shown because it is not imported in this file */}
      <Show below="md">
        <Navbar />
      </Show>

      <Box w="100%" h="90vh" className="w-[100vw] h-[90vh] overflow-x-hidden">
        <SimpleSlider>
          <Slide image={SmartListsImage} title="SmartLists" />
          <Slide image={BestPricesImage} title="BestPrices" />
          <Slide image={FastDeliveryImage} title="FastDelivery" />
        </SimpleSlider>

        <VStack
          justifyContent="center"
          alignItems="center"
          bg="background"
          gap={0}
          pt="5vh"
        >
          <BrowseByCategory />
          <BestSellingProducts />
          <Section heading="New Arrivals" title="Product for you">
            <ProductGrid productQuery={{} as ProductQuery} />
          </Section>
          <AdvertisementGrid />
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
