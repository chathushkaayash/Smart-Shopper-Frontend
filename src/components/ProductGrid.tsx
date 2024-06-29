import { Center, SimpleGrid, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductQuery } from "../App";
import useProducts from "../hooks/useProducts";
import ActionButton from "./Buttons/ActionButton";
import ProductCard from "./ProductGrid/ProductCard";
import ProductCardContainer from "./ProductGrid/ProductCardContainer";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const [isLoadMore, setLoadMore] = useState(false);

  const {
    data: products,
    error,
    fetchNextPage,
    hasNextPage,
  } = useProducts(productQuery);

  // const skeletons = [1, 2, 3, 4];

  if (error) return <Text>{error.message}</Text>;

  // sum of products in each page
  const fetchProductsCount =
    products?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchProductsCount}
        next={() => (isLoadMore ? fetchNextPage() : null)}
        hasMore={!!hasNextPage} // !! to convert to boolean
        loader={null}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          w="full"
          spacing={6}
          justifyContent={"center"}

          // marginX={{ base: 0, md: "12%" }}
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
        <Center>
          <ActionButton
            onClick={() => {
              setLoadMore(true);
              fetchNextPage();
            }}
            className="my-8"
          >
            View All Products
          </ActionButton>
        </Center>
      </InfiniteScroll>
    </>
  );
};

export default ProductGrid;
