import { CartItem } from "@/hooks/useCartItem";
import useCartStore from "@/state-management/cart/store";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  cartItem: CartItem;
}


const QuantityChanger = ({ cartItem }: Props) => {
  const { updateItem } = useCartStore();
  const queryClient = useQueryClient();

  const handleIncrement = (cartItem: CartItem) => {
    const newCartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
    if (newCartItem.quantity > 0) updateItem(newCartItem, invalidateQueries);
  };

  const handleDecrement = (cartItem: CartItem) => {
    const newCartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
    if (newCartItem.quantity > 0) updateItem(newCartItem, invalidateQueries);
  };

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ["carts"] });
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      p={3}
      pt={0}
      gap={2}
    >
      <Box>Quantity</Box>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Box
          as="button"
          cursor="pointer"
          px="2"
          onClick={() => handleDecrement(cartItem)}
        >
          <FaMinus />
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
          px="2"
          onClick={() => handleIncrement(cartItem)}
        >
          <FaPlus />
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuantityChanger;
