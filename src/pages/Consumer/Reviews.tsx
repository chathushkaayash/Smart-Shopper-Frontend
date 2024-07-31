import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
// import SupermarketLogo from "../../assets/Reviews/superMarketLogo.png";
import creamcracker from "../../assets/creamcracker.svg";
import Feedback from "../../components/Feedback";

interface FeedbackData {
  date: string;
  title: string;
  reviewer: string;
  reviewText: string;
  rating: number;
}

interface ReviewSummary {
  stars: number;
  count: number;
}

interface ReviewsProps {
  feedbackData: FeedbackData;
  productName: string;
  reviews: ReviewSummary[];
  superMarketLogo: string;
}

const Reviews= ({ feedbackData, productName, reviews,superMarketLogo }:ReviewsProps) => {
  return (
    <Box mx="10%" borderRadius="10" my="2%" boxShadow="xs">
      <Grid gridTemplateColumns={{ base: "1fr", xl: "2fr 3fr" }}>
        <GridItem px={10} py={10}>
          <VStack alignItems="flex-start">
            <Box p="1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="650">
              {productName}
            </Box>
            <Box pr={5}>
              <Image src={superMarketLogo} w={70} h={30} />
            </Box>
            <Box pr={5} pt={5}>
              <Image src={creamcracker} w={{ base: "300px", xl: "200px" }} h={{ base: "300px", xl: "200px" }} />
            </Box>
            <HStack fontSize={{ base: "2xl", md: "3xl" }} spacing={2} color="yellow.400" mt={4}>
              {/* not the length shoul be average */}
              {Array(reviews.length).fill("").map((_, i) => (
                <FaStar key={i} />
              ))}
            </HStack>
          </VStack>
          <VStack alignItems="flex-start">
            <Box display="inline" fontSize="xl" mt={5} mb={5} fontWeight="630">
              <Text as="span">{`${reviews.length} reviews`}</Text>  
              {/* not the length shoul be average */}
            </Box>
          </VStack>
          <VStack alignItems="flex-start" spacing={4} mt={5}>
            {reviews.map((review, index) => (
              <Flex key={index} align="center" w="100%">
                <Text fontSize="0.5xl" fontWeight="630">{`${review.stars} stars`}</Text>
                <Box width="200px" h="1px" bg="gray.400" mx={2} flex="1" />
                <Text fontSize="sm" fontWeight="630">{`(${review.count})`}</Text>
              </Flex>
            ))}
          </VStack>
        </GridItem>
        <GridItem px={5} py={10}>
          <Box display="inline" fontSize="3xl" fontWeight="650" mb={20}>
            <Text as="span">Reviews</Text>
          </Box>
          <Feedback 
            date={feedbackData.date}
            title={feedbackData.title}
            reviewer={feedbackData.reviewer}
            reviewText={feedbackData.reviewText}
            rating={feedbackData.rating}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Reviews;
