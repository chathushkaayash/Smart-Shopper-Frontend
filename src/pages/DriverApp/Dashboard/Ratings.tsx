import { Box, Card, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import RatingStars from "@/components/Inputs/Rating";

const Ratings = () => {
  const navigate = useNavigate();

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
            Reviews and Ratings
          </Text>
        </HStack>
      </VStack>
      <Box mx="5%" my="2%" borderRadius={15} boxShadow="md" borderWidth={1}>
        <VStack alignItems="flex-start" spacing={4} px={5} py={4} w="full">
          <Stack w="full" gap={5}>
            <Text>No reviews yet</Text>
            <Card borderWidth={1} p={2} borderColor="gray.300">
              <Text fontSize="lg" fontWeight="bold">
                Review title
              </Text>
              <RatingStars value={4} /> 
              <Text fontSize="md">content</Text>
            </Card>
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

export default Ratings;
