import useCartStore, { CartItem } from "@/state-management/cart/store";
import { Box, Flex, Input } from "@chakra-ui/react";

interface Props {
  cartItem: CartItem;
}

const QuantityChanger = ({ cartItem }: Props) => {
  const { incrementQuantity, decrementQuantity } = useCartStore();

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      p={3}
      gap={2}
    >
      <Box>Quantity</Box>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Box
          as="button"
          cursor="pointer"
          roundedLeft="md"
          bg="gray.100"
          py="1"
          px="3.5"
          _hover={{ bg: "gray.200" }}
          onClick={() =>
            decrementQuantity(cartItem.supermarketItem?.productId || -1)
          }
        >
          -
        </Box>
        <Input
          textAlign="center"
          bg="white"
          border="1px"
          borderColor="gray.200"
          outline="none"
          type="number"
          min="1"
          size="md"
          w="8ch"
          value={cartItem.quantity}
          readOnly
        />
        <Box
          as="button"
          cursor="pointer"
          roundedRight="md"
          bg="gray.100"
          py="1"
          px="3"
          _hover={{ bg: "gray.200" }}
          onClick={() =>
            incrementQuantity(cartItem.supermarketItem?.productId || -1)
          }
        >
          +
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuantityChanger;
