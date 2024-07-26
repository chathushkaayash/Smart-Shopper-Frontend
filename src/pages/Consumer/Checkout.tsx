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
  useDisclosure,
  Icon,
  ModalHeader,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { EditIcon, InfoIcon, SearchIcon } from "@chakra-ui/icons";
import { IoIosArrowBack } from "react-icons/io";
import {  MdOutlineLocationOn } from "react-icons/md";
import {  FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import deliveryLoc from "../../../src/assets/deliveryToLocation.png";
import delHome from "../../../src/assets/delHome.png";

const Checkout = () => {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

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
                      onClick={onOpen2}
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
                      onClick={onOpen1}
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
       {/* /////////modal1 */}

       <Modal blockScrollOnMount={false} isOpen={isOpen1} onClose={onClose1}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} my={6}>
              <Heading fontSize={"lg"} my={2}>
                Addresses
              </Heading>

              <Box mb={3}>
                <InputGroup>
                  <InputLeftAddon>
                    <Icon as={SearchIcon} boxSize={5} />
                  </InputLeftAddon>
                  <Input variant="filled" placeholder="Search for an address" />
                </InputGroup>
              </Box>

              <Heading fontSize={"lg"} my={2}>
                Saved Addresses
              </Heading>
              <Flex bg="gray.100" shadow={"sm"} px={2} py={2} borderRadius={5}>
                <HStack>
                  <Icon as={FaLocationDot} boxSize={5} />
                  <Text>Kiribathgoda</Text>
                </HStack>
                <Spacer />
                <Box>
                  <Icon as={EditIcon} boxSize={5} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* /////////modal1/////// */}

      {/* /////////modal2 */}

      <Modal blockScrollOnMount={false} isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"}>
              <Heading fontSize={"xl"} my={2}>
                Drop off options
              </Heading>
              <Text fontSize={"xs"}>Delivery to Kiribathgoda</Text>

              <Box
                p={2}
                border="2px"
                borderColor={"black"}
                borderRadius={10}
                my={2}
              >
                <Flex alignItems={"center"}>
                  <Image src={delHome} boxSize={9} />
                  <Text mx={"2%"} fontWeight={"500"} fontSize="lg">
                    Hand it to me
                  </Text>
                </Flex>

                <RadioGroup colorScheme="blackAlpha" defaultValue="door">
                  <Stack direction="column" fontWeight="500">
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet at my door</Text>
                      <Radio value="door" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet outside</Text>
                      <Radio value="outside" />
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      px={3}
                      py={2}
                      borderRadius={5}
                    >
                      <Text>Meet in the lobby</Text>
                      <Radio value="lobby" />
                    </Flex>
                  </Stack>
                </RadioGroup>
              </Box>

              <Flex
                alignItems={"center"}
                p={2}
                py={3}
                boxShadow={"xs"}
                borderRadius={5}
              >
                <Image src={deliveryLoc} boxSize={9} />
                <Text mx={"2%"} fontWeight={"500"} fontSize="lg">
                  Leave at location
                </Text>
              </Flex>

              <Text fontWeight={"500"} fontSize={"sm"} my={3}>
                Instructions for Delivery Person
              </Text>

              <Textarea
                // value={value}
                //onChange={handleInputChange}
                placeholder="Example : please knock instead of ringing the doorbell"
                size="sm"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button bg="#ff7708" mr={3} color="white">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* /////////modal2/////// */}
    </ChakraProvider>
  );
};

export default Checkout;
