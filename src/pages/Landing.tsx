import { Box, Flex } from "@chakra-ui/react";
import ProductGrid from "../components/ProductGrid";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const Landing = () => {
  return (
    <Flex
      width="100vw"
      bg="#EFF2F6"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <ProductGrid productQuery={{} as ProductQuery} />
      </Box>
    </Flex>
  );
};

export default Landing;
