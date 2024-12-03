import useAuthStore from "@/state-management/auth/store";
import {
  Box,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  VStack
} from "@chakra-ui/react";
import useAddresses from "@/services/Addresses/useAddresses";
import { getDefaultAddress } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const user  = useAuthStore((state) => state.user);
  const Address = useAddresses().data?.results || [];
  const defaultAddress = getDefaultAddress(Address);
  // console.log(defaultAddress);

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
          <Button
            w="auto"
            mr={4}
            mt={4}
            onClick={() => navigate('/profile/addresses')}
            variant="outline"
            color="white"
            borderColor="primary"
            border="2px"
            borderRadius="10px"
            fontSize="15px"
            fontWeight="semibold"
            bg="primary"
            _hover={{ bg: "white", color: "primary" }}
            _active={{
              bg: "white",
              color: "primary",
              transform: "scale(0.98)",
              borderColor: "primary",
            }}
          >
            Manage Address
          </Button>
        </Flex>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Address Line 1:
            </Text>
          </GridItem>
          <GridItem>
            {defaultAddress?.address.split(',')[0]}
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Address Line 2:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{defaultAddress?.address.split(',')[1]}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              City:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{defaultAddress?.city}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Phone number:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.number}</Text>
          </GridItem>
        </Grid>
      </VStack>
      {/* Edit Shipping Address Modal */}
      {/* <Modal
        isOpen={isAdd}
        onClose={onAddClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px" maxW="55vw">
          <ModalHeader
            textAlign="left"
            fontWeight="semibold"
            fontSize="20"
            color="primary"
          >
            Shipping Address
            <Flex justifyContent="flex-end">
              <Button
                w="auto"
                mt={0}
                py={2}
                onClick={addAddress}
                variant="outline"
                colorScheme="white"
                rightIcon={<AddIcon />}
                color="primary"
                borderColor="primary"
                border="1px"
                borderRadius="12px"
                fontSize="15px"
                fontWeight="bold"
                bg="white"
                _hover={{ bg: "primary", color: "white" }}
                _active={{
                  bg: "primary",
                  color: "white",
                  transform: "scale(0.98)",
                  borderColor: "primary",
                }}
              >
                Add New Address
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Box maxWidth="800px" margin="0 auto">
              {addresses.map((address, index) => (
                <Box
                  key={address.id}
                  borderWidth="1px"
                  borderRadius="md"
                  padding="3"
                  mb={2}
                  position="relative"
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" mb={3}>
                      {index === 0 ? "Default Address" : `Address ${index + 1}`}
                    </Text>
                    {index > 0 && (
                      <IconButton
                        aria-label="Remove Address"
                        icon={<MinusIcon />}
                        size="xs"
                        color="white"
                        bg="primary"
                        borderRadius="40%"
                        onClick={() => confirmDeleteAddress(address.id)}
                        _hover={{
                          bg: "white",
                          color: "primary",
                          borderColor: "primary",
                          borderWidth: 2,
                        }}
                        _active={{
                          bg: "white",
                          color: "primary",
                          transform: "scale(0.98)",
                          borderColor: "primary",
                        }}
                        position="absolute"
                        top="10px" 
                        right="-12px"
                      />
                    )}
                  </Flex>
                  <Stack spacing={4}>
                    <HStack spacing={4}>
                      <Input placeholder="Street Address" bgColor="#F9F9F9" />
                      <Input
                        placeholder="Apartment, Suit, Unit *"
                        bgColor="#F9F9F9"
                      />
                    </HStack>
                    <HStack spacing={4}>
                      <Select placeholder="Central" bgColor="#F9F9F9">
                        <option value="option1">Central</option>
                      </Select>
                      <Select placeholder="Kandy" bgColor="#F9F9F9">
                        <option value="option1">Kandy</option>
                      </Select>
                    </HStack>
                    <Input placeholder="Zip Code*" bgColor="#F9F9F9" />
                  </Stack>
                </Box>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="flex-end" gap={4} mt={0}>
              <Button
                width="auto"
                bg="primary"
                color="white"
                borderColor="primary"
                borderWidth={1}
                _hover={{ bg: "white", color: "primary" }}
                _active={{ bg: "white", color: "primary" }}
                borderRadius="12px"
                onClick={onAddClose}
              >
                Update
              </Button>
              <Button
                width="auto"
                bg="white"
                color="primary"
                borderColor="primary"
                borderWidth={1}
                _hover={{ bg: "primary", color: "white" }}
                _active={{ bg: "primary", color: "white" }}
                borderRadius="12px"
                onClick={onAddClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      {/* Confirm Delete Modal */}
      {/* <Modal
        isOpen={isConfirmOpen}
        onClose={onConfirmClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px" maxW="28vw" pr={0}>
          <ModalHeader
            textAlign="left"
            fontWeight="semibold"
            fontSize="20"
            color="primary"
          >
            Confirm Delete
          </ModalHeader>
          <ModalBody>
            <Text>Are you sure, you want to delete this address?</Text>
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="flex-end" gap={4} mt={2}>
              <Button
                width="auto"
                bg="primary"
                color="white"
                _hover={{
                  bg: "white",
                  color: "primary",
                  borderColor: "primary",
                  borderWidth: 1,
                }}
                _active={{ bg: "white", color: "primary" }}
                borderRadius="12px"
                onClick={deleteAddress}
              >
                Yes
              </Button>
              <Button
                width="auto"
                bg="white"
                color="primary"
                borderColor="primary"
                borderWidth={1}
                _hover={{ bg: "primary", color: "white" }}
                _active={{ bg: "primary", color: "white" }}
                borderRadius="12px"
                onClick={onConfirmClose}
              >
                No
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default ShippingAddress;
