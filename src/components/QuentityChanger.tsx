import { Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const QuantityChanger = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="flex-end" p={3} gap={2}>
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
          onClick={handleDecrement}
          
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
          w="5ch"
          value={quantity}
        />
        <Box
          as="button"
          cursor="pointer"
          roundedRight="md"
          bg="gray.100"
          py="1"
          px="3"
          _hover={{ bg: "gray.200" }}
          onClick={handleIncrement}
        >
          +
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuantityChanger;
