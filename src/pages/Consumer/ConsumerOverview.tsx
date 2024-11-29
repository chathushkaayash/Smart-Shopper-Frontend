// import { useState } from "react";
import useLikedProducts from "@/services/LikedProducts/useLikedProducts";
import useProduct from "@/services/Products/useProduct";
import useOrders from "@/services/Orders/useOrders";
import Footer from "../../components/Footer";
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
  VStack,
} from "@chakra-ui/react";
import {
  BsFillCartFill,
  BsFillChatLeftHeartFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { RxHeartFilled } from "react-icons/rx";
import ProductCard from "../../components/ProductGrid/ProductCard";
import ProductCardContainer from "../../components/ProductGrid/ProductCardContainer";


const ConsumerOverview = () => {
  const likedProductsIds = useLikedProducts().data?.results.map((product) => product.productId) || [];
  const favoriteProducts = useProduct(likedProductsIds);
  const totalOrders = useOrders().data?.results.length || 0;
  const totalFeedbacks = 13;
  const totalAmountSpent = "Rs. 4000";

  const statsWithIcons = [
    { stat: "Favorites", icon: RxHeartFilled, val: favoriteProducts.length },
    { stat: "Total Orders", icon: BsFillCartFill, val: totalOrders },
    { stat: "Feedbacks", icon: BsFillChatLeftHeartFill, val: totalFeedbacks },
    { stat: "Amount Spent", icon: BsFillCreditCardFill, val: totalAmountSpent },
  ];

  return (
    <>
      <Box py={5} px={20} bg="gray.100" borderRadius="lg">
        <Heading size="lg" mb={5} color="orange.400">
          Overview
        </Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap="28" mb={10}>
          {statsWithIcons.map(({ stat, icon, val }) => (
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
                    {val}
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

        {favoriteProducts?.length === 0 ? (
          <Text fontSize="xl" color="gray.500" textAlign="center" my={10}>
            No favorite items available.
          </Text>
        ) : (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
            {favoriteProducts?.map(
              (product) =>
                product.data && (
                  <ProductCardContainer key={product.data.id}>
                    <ProductCard product={product.data} />
                  </ProductCardContainer>
                )
            )}
          </SimpleGrid>
        )}

      </Box>
      <Footer />
    </>
  );
};

export default ConsumerOverview;
