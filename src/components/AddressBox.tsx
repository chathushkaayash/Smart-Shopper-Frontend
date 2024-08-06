import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface AddressBoxProps {
  Icon: React.ElementType;
  name: string;
}

const AddressBox = ({ Icon, name }: AddressBoxProps) => {
  return (
    <Box
      bg={"white"}
      p={{ base: 1, sm: 2 }}
      m={{ base: 1, sm: 2 }} 
      w={"full"}
      display={"flex"}
      alignItems={"center"}
      gap={2}
      justifyContent={"left"}
      borderWidth={1}
      borderRadius={10}
      _hover={{
        shadow: "md",
        cursor: "pointer",
      }}
      maxW={{ base: "100%", sm: "300px" }}
    >
      <Box
        bg="primary"
        p={1}
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={{ base: "20px", sm: "25px" }}
        height={{ base: "20px", sm: "25px" }}
      >
        <Text fontSize={{ base: "xs", sm: "sm" }} color="white">
          <Icon />
        </Text>
      </Box>
      <Text fontSize={{ base: "xs", sm: "sm" }} color="primary" ml={2} fontWeight={600}>
        {name}
      </Text>
    </Box>
  );
};

export default AddressBox;
