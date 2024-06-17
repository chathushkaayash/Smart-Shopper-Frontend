import { Box, Flex } from "@chakra-ui/react";
import BestPrices from "../components/Landing/Slides/BestPrices";
import FastDelivery from "../components/Landing/Slides/FastDelivery";
import SmartLists from "../components/Landing/Slides/SmartLists";
import ProductGrid from "../components/ProductGrid";
import SimpleSlider from "../components/SimpleSlider";

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
        <SmartLists />
        <BestPrices />
        <FastDelivery />
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
