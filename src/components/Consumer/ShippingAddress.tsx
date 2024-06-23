import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    HStack,
    Heading,
    Input,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ShippingAddress = () => {
    const [isEditable, setIsEditable] = useState(false);
  
    const toggleEdit = () => {
      setIsEditable((prev) => !prev);
    };
  
    return (
      <Box
        my={9}
        ml="7%"
        w="86%"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        py="30px"
        px="70px"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Heading size="md" color="primary">
            Shipping Address
          </Heading>
          <Flex>
            {!isEditable && (
              <Button
                w={90}
                mr={4}
                mt={10}
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
                Edit
              </Button>
            )}
          </Flex>
        </Flex>
        <FormControl mb={10}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <FormControl id="country">
                <FormLabel>Country / Region</FormLabel>
                <Select
                  variant="outline"
                  placeholder="Sri Lanka"
                  bg="background"
                  isReadOnly={!isEditable}
                  isDisabled={!isEditable}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="contact-info">
                <FormLabel>Contact Information</FormLabel>
                <HStack>
                  <Input
                    placeholder="Contact name"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                  <Input
                    placeholder="Contact number"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                </HStack>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="default-address">
                <FormLabel>Default Address</FormLabel>
                <HStack pb={4}>
                  <Input
                    placeholder="Street Address"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                  <Input
                    placeholder="Apartment, Suite, Units etc"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                </HStack>
                <HStack pb={4}>
                  <Select
                    variant="outline"
                    placeholder="Central"
                    bg="background"
                    isReadOnly={!isEditable}
                    isDisabled={!isEditable}
                  />
                  <Select
                    variant="outline"
                    placeholder="Kandy"
                    bg="background"
                    isReadOnly={!isEditable}
                    isDisabled={!isEditable}
                  />
                </HStack>
                <Box width="50%">
                <Input
                  placeholder="Zip Code*"
                  bg="background"
                  isReadOnly={!isEditable}
                />
              </Box>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="second-address">
                <FormLabel>Second Address</FormLabel>
                <HStack pb={4}>
                  <Input
                    placeholder="Street Address"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                  <Input
                    placeholder="Apartment, Suite, Units etc"
                    bg="background"
                    isReadOnly={!isEditable}
                  />
                </HStack>
                <HStack pb={4}>
                  <Select
                    variant="outline"
                    placeholder="Central"
                    bg="background"
                    isReadOnly={!isEditable}
                    isDisabled={!isEditable}
                  />
                  <Select
                    variant="outline"
                    placeholder="Kandy"
                    bg="background"
                    isReadOnly={!isEditable}
                    isDisabled={!isEditable}
                  />
                </HStack>
                <Box width="50%">
                <Input
                  placeholder="Zip Code*"
                  bg="background"
                  isReadOnly={!isEditable}
                />
              </Box>
              </FormControl>
            </GridItem>
          </Grid>
        </FormControl>
        <Flex justifyContent="flex-end">
          {isEditable && (
            <>
              <Button
                w={160}
                mr={4}
                // onClick={}
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
                Update Addresses
              </Button>
              <Button
                w={160}
                mr={10}
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
                Cancel
              </Button>
            </>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default ShippingAddress;
  