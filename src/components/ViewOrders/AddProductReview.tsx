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
import { BaseOrderItem } from "@/services/types";
import useProduct from "@/services/Products/useProduct";
import useSupermarket from "@/services/Supermarket/useSupermarket";

interface AddProductReviewProps {
  orderItem: BaseOrderItem;
}

const AddProductReview = ( { orderItem }: AddProductReviewProps) => {
  const [rating, setRating] = useState<number>(0);
  const product = useProduct([orderItem.productId])[0]
  const supermarket = useSupermarket([orderItem.supermarketId]);

  const handleRating = (index: number) => {
    setRating(index);
  };

  return (
    <Box maxW="sm" px={2} bg="white" borderRadius="24" mx="auto">
      <Flex alignItems="center" mb={4}>
        <Image
          src={product.data?.imageUrl}
          alt="Product Image"
          borderRadius="md"
          boxSize="110px"
          mr={4}
        />
        <VStack align="start">
          <Text fontWeight="bold">{product.data?.name}</Text>
          <Text fontSize="sm" color="gray.500">Rs. {orderItem.price}</Text>
          <Image 
            src={supermarket[0].data?.logo}
            alt="Supermarket Image"
            height={30}
            width={50}
          />
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
