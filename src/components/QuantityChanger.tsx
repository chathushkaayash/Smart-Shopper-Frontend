import { CartItem } from "@/services/Cart/useCartItems";
import { BaseCartItem } from "@/services/Cart/useCreateCartItems";
import useUpdateCartItems from "@/services/Cart/useUpdateCartItem";
import useDebounce from "@/utils/useDebounce";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  cartItem: CartItem;
}

const QuantityChanger = ({ cartItem }: Props) => {
  const updateCartItem = useUpdateCartItems();
  const [newBaseCartItem, setNewBaseCartItem] = useState<CartItem>(cartItem);

  const debouncedCartItem = useDebounce(newBaseCartItem);

  // -------------------------------------------- Increase and Decrease Quantity ------------------------------------------------
  useEffect(() => {
    if (debouncedCartItem.quantity !== cartItem.quantity) {
      const newBaseCartItem: BaseCartItem = {
        id: debouncedCartItem.id,
        consumerId: -1,
        productId: debouncedCartItem.productId,
        supermarketitemId: debouncedCartItem.supermarketItem.id || -1,
        quantity: debouncedCartItem.quantity,
      };
      if (newBaseCartItem.quantity > 0) updateCartItem.mutate(newBaseCartItem);
    }
  }, [debouncedCartItem]);

  // // -------------------------------------------- Increase Quantity ------------------------------------------------
  const handleIncrement = () => {
    setNewBaseCartItem({
      ...newBaseCartItem,
      quantity: newBaseCartItem.quantity + 1,
    });
  };

  // // -------------------------------------------- Decrease Quantity ------------------------------------------------
  const handleDecrement = () => {
    if (newBaseCartItem.quantity > 1)
      setNewBaseCartItem({
        ...newBaseCartItem,
        quantity: newBaseCartItem.quantity - 1,
      });
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
        {/* -------------------- Decrease Quantity ---------------------- */}
        <Box as="button" cursor="pointer" px="2" onClick={handleDecrement}>
          <FaMinus />
        </Box>

        {/* ----------------------- Quantity  ------------------------- */}
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
          value={newBaseCartItem?.quantity || 10}
          readOnly
        />

        {/* -------------------- Increase Quantity ---------------------- */}
        <Box as="button" cursor="pointer" px="2" onClick={handleIncrement}>
          <FaPlus />
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuantityChanger;
