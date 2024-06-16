import { SimpleGrid, Text } from "@chakra-ui/react";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductQuery } from "../App";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductGrid/ProductCard";
import ProductCardContainer from "./ProductGrid/ProductCardContainer";
import ProductCartSkelton from "./ProductGrid/ProductCartSkelton";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const {
    data: products,
    error,
    fetchNextPage,
    hasNextPage,
  } = useProducts(productQuery);

  const skeletons = [1, 2, 3, 4];

  if (error) return <Text>{error.message}</Text>;

  // sum of products in each page
  const fetchProductsCount =
    products?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  const Loader = () => {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
        bg="gray.500"
        marginX={{ base: 0, md: "12%" }}
      >
        {skeletons.map((s) => (
          <ProductCardContainer key={s}>
            <ProductCartSkelton />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    );
  };

  return (
    <InfiniteScroll
      dataLength={fetchProductsCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage} // !! to convert to boolean
      loader={<Loader />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
        bg="gray.100"
        marginX={{ base: 0, md: "12%" }}
      >
        {products?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((product) => (
              <ProductCardContainer key={product.itemID}>
                <ProductCard product={product} />
              </ProductCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ProductGrid;
