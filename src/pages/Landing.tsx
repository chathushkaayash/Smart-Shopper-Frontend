import { Box, VStack } from "@chakra-ui/react";
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

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Landing = () => {
  return (
    <>
      <Box
        w="100w"
        h="90vh"
        className="w-[100vw] h-[90vh] overflow-y-scroll snap-y snap-proximity"
      >
        <SimpleSlider className="snap-start">
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
          {/* all below components are using the section component */}
          {/* Make every section a snap point in side the component*/}
          <BrowseByCategory />
          <BestSellingProducts />
          <Section
            heading="This Month"
            title="Best Selling Products"
          >
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
