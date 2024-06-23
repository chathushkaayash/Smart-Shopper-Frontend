import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
interface AddToCartIconBtnProps {
  onClick: () => void;
}

const AddToCartIconBtn: React.FC<AddToCartIconBtnProps> = ({}) => {
  return (
    <Button
      aria-label="Add to cart"
      w="full"
      bg="primary"
      color="white"
      _hover={{ bg: "primary" }}
    >
      <Icon as={FiShoppingCart} w={5} h={5} mr={2} />
      Add to cart
    </Button>
  );
};

export default AddToCartIconBtn;
