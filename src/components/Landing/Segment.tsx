import { Box, Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Segment = () => {
  return (
    <Stack w="full" px="14vw" h={500}>
      <HStack>
        <Box w={5} h={45} bg="primary" borderRadius="lg"></Box>
        <Text fontSize="lg" fontWeight={600} color="primary">
          Category
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text fontSize="3xl" fontWeight={600}>
          Browse by Category
        </Text>
        <HStack gap={5}>
          <IconButton
            aria-label="Next"
            icon={<FaArrowLeft />}
            bg="primary"
            color="white"
            width="fit-content"
          />
          <IconButton
            aria-label="Next"
            icon={<FaArrowRight />}
            bg="primary"
            color="white"
            width="fit-content"
          />
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Segment;
