import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";

interface Props {
    price: string;
    image: string;
    distance: string;
}

const SupermarketPriceRow = ({ price, image, distance }: Props) => {
  return (
    <Flex align="center" gap="40px"  alignSelf="flex-start" mb={4}>
      <Image src={image} />
      <Text fontSize="18px" fontWeight="semibold" >{price}</Text>
      <Text fontSize="18px" fontWeight="semibold" >{distance}</Text>
      <Button 
        height={26} 
        bg="#E46C0A" 
        borderColor="#E46C0A"
        color="#FFFFFF" 
        borderRadius="15px"
        border="2px"
        _hover={{ color: "#E46C0A", bg: "#FFFFFF", borderColor: "#E46C0A"}}
        _active={{
          color: "#E46C0A",
          bg: "#FFFFFF",
          transform: "scale(0.98)",
          borderColor: "#E46C0A",
        }}
      >Reviews</Button>
      <Box 
        fontSize="26px"
        as="button"
        _hover={{ color: "black", transform: 'scale(1.10)' }}
        _active={{ color: "black", transform: 'scale(1.10)' }}
      >
        <BsCartPlus />
      </Box>
    </Flex>
  );
}

export default SupermarketPriceRow;