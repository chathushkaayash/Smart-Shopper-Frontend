import AdvancedRating from "@/components/Inputs/AdvancedRating";
import useSupermarketItem from "@/services/SupermarketItems/useSupermarketItem";
import useReviews from "@/services/Reviews/useReviews";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ReviewComponent from "../../components/ReviewComponent";

const ProductReview = () => {
  const { id } = useParams();
  if (!id) return <div>Product not found</div>;

  const reviews = useReviews({
    targetId: Number(id),
    reviewType: "supermarketItem",
  });

  const supermarketItem = useSupermarketItem(Number(id));

  const reviewSummary: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  reviews.data?.results.forEach((review) => {
    reviewSummary[review.rating]++;
  });

  console.log(supermarketItem.data)
  return (
    <Box mx="10%" borderRadius={15} my="2%" boxShadow="xl" borderWidth={2}>
      <Grid gridTemplateColumns={{ base: "1fr", xl: "2fr 3fr" }}>
        {/* Product Details */}
        <GridItem px={10} py={10}>
          <VStack alignItems="flex-start" mb={6}>
            <Box p="1" fontSize={{ base: "1xl", md: "2xl" }} fontWeight="650">
              {supermarketItem.data?.product.name}
            </Box>
            <Box pr={5}>
              <Image
                src={supermarketItem.data?.supermarket.logo}
                h="10vh"
                objectFit="contain"
                aspectRatio={16 / 9}
              />
            </Box>
            <Box pr={5}>
              <Image
                src={supermarketItem.data?.product.imageUrl}
                w={{ base: "300px", xl: "200px" }}
                h={{ base: "300px", xl: "200px" }}
              />
            </Box>
            {/* <HStack
              fontSize={{ base: "2xl", md: "3xl" }}
              spacing={2}
              color="yellow.400"
              mt={4}
            >
              <RatingStars value={averageRating} />
            </HStack> */}
          </VStack>
          {/* <VStack alignItems="flex-start">
            <Box display="inline" fontSize="xl" mb={0} fontWeight="630">
              <Text as="span">{`${reviews.data?.count} reviews`}</Text>
            </Box>
          </VStack> */}
          {/* <VStack alignItems="flex-start" spacing={1} mt={5}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Flex key={index} align="center" w="100%">
                <Text fontSize="0.5xl" fontWeight="630">
                  {5 - index} stars
                </Text>
                <Box width="200px" h="1px" bg="gray.400" mx={2} flex="1" />
                <Text fontSize="sm" fontWeight="630" fontFamily={"arial"}>
                  {`(${reviewSummary[5 - index]})`}
                </Text>
              </Flex>
            ))}
          </VStack> */}
          <Stack ml={5}>
            <AdvancedRating ratingSummary={reviewSummary} />
          </Stack>
        </GridItem>

        {/* Reviews */}
        <GridItem px={5} py={10}>
          <Box display="inline" fontSize="3xl" fontWeight="650" mb={20}>
            <Text as="span">Reviews</Text>
          </Box>
          <Stack spacing={5} mt={5}>
            {reviews.data?.results.map((review, index) => (
              <ReviewComponent review={review} key={index} />
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductReview;
