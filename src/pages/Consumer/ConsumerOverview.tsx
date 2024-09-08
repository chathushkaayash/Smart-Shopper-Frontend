// import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Avatar,
  VStack,
  HStack,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import {
  BsFillChatLeftHeartFill,
  BsFillCartFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { RxHeartFilled } from "react-icons/rx";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductGrid/ProductCard";
import ProductCardContainer from "../../components/ProductGrid/ProductCardContainer";
import ActionButton from "../../components/Buttons/ActionButton";

// Array of stats and their corresponding icons
const statsWithIcons = [
  { stat: "Favourites", icon: RxHeartFilled },
  { stat: "Total Orders", icon: BsFillCartFill },
  { stat: "Feedbacks", icon: BsFillChatLeftHeartFill },
  { stat: "Amount Spent", icon: BsFillCreditCardFill },
];

const ConsumerOverview = () => {
  // const [isLoadMore, setLoadMore] = useState(false);

  // Fetch all products (assuming `useProducts` can fetch favorite products)
  const { data: products, error, fetchNextPage, hasNextPage } = useProducts();

  // Filter favorite products (assuming each product has a `isFavorite` property)
  const favoriteProducts = products?.pages?.flatMap((page) =>
    page.results.filter((product) => product.isFavorite)
  );

  if (error) return <Text>{error.message}</Text>;

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
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>

      {hasNextPage && (
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
      )}
    </Box>
  );
};

export default ConsumerOverview;
