import  { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface AddProductReviewProps {
    productImage: string;
    supermarketImage: string;
    productName: string;
    price: number;
}

const AddProductReview = ( {productImage, supermarketImage, productName, price}: AddProductReviewProps) => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (index: number) => {
    setRating(index);
  };

  return (
    <Box maxW="sm" px={2} bg="white" borderRadius="24" mx="auto">
      <Flex alignItems="center" mb={4}>
        <Image
          src={productImage}
          alt="Product Image"
          borderRadius="md"
          boxSize="90px"
          mr={4}
        />
        <VStack align="start">
          <Text fontWeight="bold">{productName}</Text>
          <Text fontSize="sm" color="gray.500">{price}</Text>
          <Image src={supermarketImage} />
        </VStack>
      </Flex>
      <Box mb={4}>
        <HStack justify="flex-end">
          <Text mb={1} mr={4} fontWeight="bold">
            Feedback
          </Text>
          {[1, 2, 3, 4, 5].map((index) => (
            <IconButton
              key={index}
              icon={<StarIcon w="1.5rem" h="1.5rem"/>}
              aria-label={`Rate ${index} stars`}
              color={index <= rating ? "yellow.400" : "gray.300"}
              variant="unstyled"
              onClick={() => handleRating(index)}
            />
          ))}
        </HStack>
      </Box>
      <Box mb={2}>
        <Input placeholder="Review Title" mb={2} borderColor="gray.300" />
        <Textarea
          placeholder="If you have any additional feedback, please type it in here."
          borderColor="gray.300"
        />
      </Box>
    </Box>
  );
};

export default AddProductReview;
