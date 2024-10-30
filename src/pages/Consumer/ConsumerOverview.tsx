// import { useState } from "react";
import useLikedProducts from "@/services/LikedProducts/useLikedProducts";
import useProduct from "@/services/Products/useProduct";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  BsFillCartFill,
  BsFillChatLeftHeartFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { RxHeartFilled } from "react-icons/rx";
import ProductCard from "../../components/ProductGrid/ProductCard";
import ProductCardContainer from "../../components/ProductGrid/ProductCardContainer";

// Array of stats and their corresponding icons
const statsWithIcons = [
  { stat: "Favourites", icon: RxHeartFilled },
  { stat: "Total Orders", icon: BsFillCartFill },
  { stat: "Feedbacks", icon: BsFillChatLeftHeartFill },
  { stat: "Amount Spent", icon: BsFillCreditCardFill },
];

const ConsumerOverview = () => {
  const likedProducts = useLikedProducts();
  const likedProductsIds = likedProducts.data?.results.map((product) => product.id) || [];
  const favoriteProducts = useProduct(likedProductsIds);

  return (
    <Box py={5} px={20} bg="gray.100" borderRadius="lg">
      <Heading size="lg" mb={5} color="orange.400">
        Overview
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap="28" mb={10}>
        {statsWithIcons.map(({ stat, icon }) => (
          <GridItem
            key={stat}
            p={3}
            pl={5}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <VStack spacing={5} alignItems="flex-start">
                <Text fontSize="md" fontWeight="bold">
                  {stat}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  40
                </Text>
              </VStack>
              <Avatar size="xl" icon={<Icon as={icon} />} bg="purple.100" />
            </HStack>
          </GridItem>
        ))}
      </Grid>

      <Heading size="md" mb={4} bg="gray.50" p={3} borderRadius="lg">
        Favorite Items
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {favoriteProducts?.map((product) => (
          product.data && 
            <ProductCardContainer key={product.data.id}>
            <ProductCard product={product.data} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>

      {/* {hasNextPage && (
        <Center>
          <ActionButton
            onClick={() => {
              // setLoadMore(true);
              fetchNextPage();
            }}
            className="my-8"
          >
            View All Products
          </ActionButton>
        </Center>
      )} */}
    </Box>
  );
};

export default ConsumerOverview;
