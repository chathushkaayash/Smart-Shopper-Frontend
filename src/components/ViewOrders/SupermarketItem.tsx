import { OrderItem } from "@/hooks/useOrder";
import useProduct from "@/hooks/useProduct";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  orderItem: OrderItem;
  onAddReviewOpen: () => void;
}

const SupermarketItem = ({ orderItem, onAddReviewOpen }: Props) => {
  const product = useProduct(orderItem.productId);
  const supermarket = useSupermarket([orderItem.supermarketId]);

  return (
    <Flex
      p={4}
      bg="background"
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Flex alignItems="center">
        <Image
          src={product.data?.imageUrl}
          alt={product.data?.name}
          boxSize="50px"
          borderRadius="md"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold">{product.data?.name}</Text>
          <Text color="gray.500">${orderItem.price}</Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Image
          src={supermarket[0].data?.logo}
          alt={supermarket[0].data?.name}
          objectFit={"contain"}
          boxSize="50px"
        />
        <Button
          size="sm"
          color="primary"
          bg="white"
          borderWidth={2}
          borderColor="primary"
          borderRadius={10}
          onClick={onAddReviewOpen}
          _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
          _active={{
            bg: "#E46C0A",
            color: "#FFFFFF",
            transform: "scale(0.98)",
            borderColor: "#E46C0A",
          }}
        >
          Add Reviews
        </Button>
      </Flex>
    </Flex>
  );
};

export default SupermarketItem;
