import { Box, Card, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import RatingStars from "@/components/Inputs/Rating";
import useReviews from "@/hooks/reviews/useReviews";
import useAuthStore from "@/state-management/auth/store";

const DriverReviews = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const Reviews = useReviews({
    reviewType: "driver",
    targetId: user?.driverId || 0,
  });
  const reviewCount = Reviews.data?.results.length || 0;
  return (
    <>
      <VStack px="8vw" pt="3vh">
        <HStack w="full" pos="relative" left={-5}>
          <Box
            p={1}
            background="white"
            borderRadius="50%"
            onClick={() => navigate("/driver/account")}
            cursor="pointer"
          >
            <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
          </Box>
          <Text fontWeight="bold" fontSize="xl">
            Reviews
          </Text>
          {Reviews.data?.count != 0 && (
            <Box
              position="absolute"
              right="-8"
              p={2}
              bg="gray.100"
              borderRadius="md"
            >
              <Text fontWeight="bold">
                {reviewCount} Review{reviewCount !== 1 ? "s" : ""}
              </Text>
            </Box>
          )}
        </HStack>
      </VStack>
      <Box mx="5%" my="2%" borderRadius={15} boxShadow="md" borderWidth={1}>
        <VStack alignItems="flex-start" spacing={4} px={5} py={4} w="full">
          <Stack w="full" gap={5}>
            {Reviews.data?.count != 0 ? (
              Reviews.data?.results.map((review, index) => (
                <Card key={index} borderWidth={1} p={2} borderColor="gray.300">
                  <Text fontSize="lg" fontWeight="bold">
                    {review.title}
                  </Text>
                  <RatingStars value={review.rating} />
                  <Text fontSize="md">{review.content}</Text>
                </Card>
              ))
            ) : (
              <Text>No reviews yet</Text>
            )}
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

export default DriverReviews;
