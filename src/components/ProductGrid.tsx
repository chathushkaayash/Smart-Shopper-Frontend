import { Center, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import useProducts from "../hooks/useProducts";
import ActionButton from "./Buttons/ActionButton";
import ProductCard from "./ProductGrid/ProductCard";
import ProductCardContainer from "./ProductGrid/ProductCardContainer";
import ProductCartSkelton from "./ProductGrid/ProductCartSkelton";

const ProductGrid = () => {
  const {
    data: products,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts();

  const skeletons = [1, 2, 3, 4];

  return (
    <>
      {/* <InfiniteScroll
        dataLength={fetchProductsCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage} // !! to convert to boolean
        loader={null}
      > */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        w="full"
        spacing={6}
        justifyContent={"center"}
        px={4}

        // marginX={{ base: 0, md: "12%" }}
      >
        {products?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((product) => (
              <ProductCardContainer key={product.id}>
                <ProductCard product={product} />
              </ProductCardContainer>
            ))}
          </React.Fragment>
        ))}
        {(isFetchingNextPage || error || isLoading) &&
          skeletons.map((skeleton) => (
            <ProductCardContainer key={skeleton}>
              <ProductCartSkelton />
            </ProductCardContainer>
          ))}
      </SimpleGrid>
      <Center>
        {hasNextPage && (
          <ActionButton onClick={fetchNextPage} className="my-8">
            Load More
          </ActionButton>
        )}
      </Center>
      {/* </InfiniteScroll> */}
    </>
  );
};

export default ProductGrid;
