import { VStack } from "@chakra-ui/react";
import Slide from "../components/Landing/Slide";
import ProductGrid from "../components/ProductGrid";
import SimpleSlider from "../components/SimpleSlider";

import SmartListsImage from "../assets/landing/ecommerce-checkout-laptop-animate.svg";
import FastDeliveryImage from "../assets/landing/in-no-time-animate (1).svg";
import BestPricesImage from "../assets/landing/online-ads-animate.svg";
import BrowseByCategory from "../components/Landing/BrowseByCategory";
import BestSellingProducts from "../components/Landing/BestSellingProducts";
import AdvertisementGrid from "../components/Landing/AdvertisementGrid";

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
        gap={0}
        pt="5vh"
        
      >
        <BrowseByCategory />
        <BestSellingProducts />
        <ProductGrid productQuery={{} as ProductQuery} />
        <AdvertisementGrid />
      </VStack>
    </>
  );
};

export default Landing;
