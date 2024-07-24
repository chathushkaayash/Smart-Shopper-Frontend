import { Box, Button, Flex, Text, Grid, GridItem, VStack } from "@chakra-ui/react";
import { useState } from "react";

const ShippingAddress = ({
  addressLine1= "123 Main St",
    addressLine2=  "Apt 4B",
    district= "Downtown",
    city= "Metropolis",
    phoneNumber= "123-456-7890",
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Box
      w="100%"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      p={5}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text color="primary" fontSize="xl" fontWeight="semibold" pl={5}>
          Shipping Address
        </Text>
        <Flex>
          {!isEditable && (
            <Button
              w="auto"
              mr={4}
              mt={4}
              onClick={toggleEdit}
              variant="outline"
              color="white"
              borderColor="primary"
              border="2px"
              borderRadius="10px"
              fontSize="15px"
              fontWeight="bold"
              bg="primary"
              _hover={{ bg: "white", color: "primary" }}
              _active={{
                bg: "white",
                color: "primary",
                transform: "scale(0.98)",
                borderColor: "primary",
              }}
            >
              Edit Shipping Address
            </Button>
          )}
        </Flex>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Address Line 1:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{addressLine1}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Address Line 2:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{addressLine2}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">District:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{district}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">City:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{city}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">Phone number:</Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{phoneNumber}</Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default ShippingAddress;