import { Box, Show, VStack } from "@chakra-ui/react";
import Slide from "../../components/Landing/Slide";
import ProductGrid from "../../components/ProductGrid";
import SimpleSlider from "../../components/SimpleSlider";

import SmartListsImage from "../../assets/landing/ecommerce-checkout-laptop-animate.svg";
import FastDeliveryImage from "../../assets/landing/in-no-time-animate (1).svg";
import BestPricesImage from "../../assets/landing/online-ads-animate.svg";
import Footer from "../../components/Footer";
import AdvertisementGrid from "../../components/Landing/AdvertisementGrid";
import BestSellingProducts from "../../components/Landing/BestSellingProducts";
import BrowseByCategory from "../../components/Landing/BrowseByCategory";
import Section from "../../components/Landing/Section";
import Navbar from "../../components/Navbar";
import { useRef } from "react";

const Landing = () => {
  const newArrivalsRef = useRef<HTMLDivElement>(null);

  const handleExploreMoreClick = () => {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Show below="md">
        <Navbar />
      </Show>

      <Box w="100%" h="90vh" className="w-[100vw] h-[90vh] overflow-x-hidden">
        <SimpleSlider>
          <Slide
            image={SmartListsImage}
            title="SmartLists"
            onExploreMoreClick={handleExploreMoreClick}
          />
          <Slide
            image={BestPricesImage}
            title="BestPrices"
            onExploreMoreClick={handleExploreMoreClick}
          />
          <Slide
            image={FastDeliveryImage}
            title="FastDelivery"
            onExploreMoreClick={handleExploreMoreClick}
          />
        </SimpleSlider>

        <VStack
          justifyContent="center"
          alignItems="center"
          bg=""
          gap={0}
          pt="5vh"
        >
          <BrowseByCategory />
          <AdvertisementGrid />
          <BestSellingProducts />
          <div ref={newArrivalsRef}>
            <Section heading="New Arrivals" title="Product for you">
              <ProductGrid />
            </Section>
          </div>
        </VStack>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
