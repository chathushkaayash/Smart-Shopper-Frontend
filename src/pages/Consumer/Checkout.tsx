import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
  HStack,
  Stack,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, InfoIcon } from "@chakra-ui/icons";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Checkout = () => {
  return (
    <ChakraProvider>
      <Box maxWidth="1200px" margin="0 auto" padding="4">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Button variant="link" size="xxl" color={"black"}>
            <IoIosArrowBack />
          </Button>
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={4}>
          {/* Left Column */}
          <Box flex="2">
            <VStack align="stretch" spacing={4}>
              {/* Delivery Options */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md" color="orange.400">
                    Delivery options
                  </Heading>
                </HStack>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between">
                    <Box>
                      <HStack>
                        <FaRegUser />
                        <VStack ml={3} alignItems={"unset"} spacing={0}>
                          <Text fontWeight="bold">Meet at my door</Text>
                          <Text>Add delivery instructions</Text>
                        </VStack>
                      </HStack>
                    </Box>
                    <Button
                      variant="outline"
                      colorScheme="white"
                      color="orange.400"
                      borderColor="orange.400"
                      border="1px"
                      borderRadius="12px"
                      fontSize="15px"
                      fontWeight="bold"
                      bg="white"
                      _hover={{ bg: "orange.400", color: "white" }}
                      _active={{
                        bg: "orange.400",
                        color: "white",
                        transform: "scale(0.98)",
                        borderColor: "orange.400",
                      }}
                      size="sm"
                      rightIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Delivery Details */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md" color="orange.400">
                  Delivery details
                </Heading>
                <Divider my={2} />
                <HStack justify="space-between">
                    <Box>
                      <HStack>
                        <MdOutlineLocationOn />
                        <VStack ml={3} alignItems={"unset"} spacing={0}>
                          <Text fontWeight="bold">Bandaragama Junction</Text>
                          <Text textAlign={"right"}>
                            66 Pandura Rd, Bandaragama
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                    <Button
                      size="sm"
                      rightIcon={<EditIcon />}
                      variant="outline"
                      colorScheme="white"
                      color="orange.400"
                      borderColor="orange.400"
                      border="1px"
                      borderRadius="12px"
                      fontSize="15px"
                      fontWeight="bold"
                      bg="white"
                      _hover={{ bg: "orange.400", color: "white" }}
                      _active={{
                        bg: "orange.400",
                        color: "white",
                        transform: "scale(0.98)",
                        borderColor: "orange.400",
                      }}
                    >
                      Edit
                    </Button>
                  </HStack>
              </Box>

              {/* Continue to payment */}
              <Button bg="black" size="lg" width="full" color="white">
                Continue to payment
              </Button>
              
              {/* Note */}
              <Text fontSize="sm">
              If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.
              </Text>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box flex="1">
            <VStack align="stretch" spacing={4}>
              {/* Order Summary */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Image
                    borderRadius="50%"
                    src="https://via.placeholder.com/60"
                    alt="Order Item"
                  />
                  <VStack>
                    <Heading size="md" color="orange.400">
                      Arpico Supermarket
                    </Heading>
                    <Text>Mirisswaththa, Piliyandala</Text>
                  </VStack>
                  <IconButton
                    aria-label="Restaurant Info"
                    icon={<InfoIcon />}
                    size="md"
                    variant={"outline"}
                    colorScheme="white"
                    border="1px"
                    borderRadius="12px"
                    fontSize="15px"
                    fontWeight="bold"
                    bg="white"
                    _hover={{ bg: "orange.400", color: "white" }}
                    _active={{
                      bg: "orange.400",
                      color: "white",
                      transform: "scale(0.98)",
                      borderColor: "orange.400",
                    }}
                  />
                </HStack>
              </Box>

              {/* Order Total */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md" color="orange.400">
                  Order total
                </Heading>
                <Divider my={2} />
                <Stack spacing={1}>
                  <HStack justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>LKR 1,680.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Delivery Fee</Text>
                    <Text>LKR 54.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Taxes & Other Fees</Text>
                    <Text>LKR 386.40</Text>
                  </HStack>
                  <Divider my={2} />
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Total</Text>
                    <Text fontWeight="bold">LKR 2,120.40</Text>
                  </HStack>
                </Stack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Checkout;
