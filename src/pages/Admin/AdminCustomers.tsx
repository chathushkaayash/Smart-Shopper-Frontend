import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai";
import { FaCartFlatbed, FaLocationDot } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import LineChart from "../../components/Charts/LineChart";


const AdminCustomers = () => {
  const cutomerCards = [
    {
      title: "Total Customers",
      value: "10.8 k",
      icon: IoMdPeople,
      mainColor: "orange",
      color: "orange.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "Current Customers",
      value: "5.8 k",
      icon: IoMdPeople ,
      mainColor: "red",
      color: "red.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "New Customers",
      value: "5.8 k",
      icon: IoMdPeople ,
      mainColor: "green",
      color: "green.100",
      percentage: "8.5% Down from yesterday",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateAreas={{
        base: `
            "head"
             "main"
             "footer"`,
        lg: `"head"
            "main"
            "footer"`,
      }}
      gridTemplateRows={"auto auto auto"}
      gridTemplateColumns={{ base: "1fr", lg: "auto" }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      height="100%"
      width="100%"
    >
      
      <GridItem pl="2" my={5} area={"head"} mx={10}>
        <Box bg="" m={10}>
          <Center>
            <HStack justifyContent='space-between' w='full'>
              {cutomerCards.map((card, index) => (
                <Card px={3} w={"20vw"} key={index}>
                  <CardBody>
                    <Flex gap={20}>
                      <Heading size="lg">{card.title}</Heading>
                      <Icon
                        as={card.icon}
                        boxSize={8}
                        color={card.mainColor}
                        bg={card.color}
                        borderRadius={5}
                      />
                    </Flex>
                    <Text fontSize="lg">{card.value}</Text>
                    <Flex mt={2}>
                      <Icon
                        as={AiOutlineRise}
                        boxSize={5}
                        color="green.400"
                        borderRadius={5}
                      />
                      <Text fontSize="sm" color="green.400" pl={2}>
                        {card.percentage}
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </HStack>
          </Center>
        </Box>
      </GridItem>

      <GridItem pl="2" bg={""} area={"main"} mx={20}>
        <Center>
          <LineChart topic="Customer Engagement" />
        </Center>
      </GridItem>

      <GridItem pl="2" bg={""} area={"footer"} my={5} mx={10}>
        <Box p={2} shadow="md" borderWidth="1px" m={10}>
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="lg">
              Customer Details
            </Heading>
            <Flex>
              <Box px={2}>
                <Select placeholder="Select option">
                  <option value="option1">August</option>
                  <option value="option2">September</option>
                  <option value="option3" selected>
                    October
                  </option>
                </Select>
              </Box>
              <Button bg="primary" size="sm">
                Add Customer
              </Button>
            </Flex>
          </Flex>

          <TableContainer
            width={{ base: "100%", lg: "90%" }}
            ml={{ base: "0%", lg: "1%" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Address</Th>
                  <Th>Contact Number</Th>
                  <Th>Email</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <HStack>
                      <Image
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="50%"
                        mr={4}
                      />
                      <Text>Kaveesha Hettige</Text>
                    </HStack>
                  </Td>
                  <Td>235/1,Kanampitiya Road,Galle</Td>
                  <Td>0766245650</Td>
                  <Td>kaveesha.hettige@gmail.com</Td>
                  <Td>
                    <Button bg="primary" size="sm" onClick={onOpen}>
                      View More
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack>
                      <Image
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="50%"
                        mr={4}
                      />
                      <Text>Kaveesha Hettige</Text>
                    </HStack>
                  </Td>
                  <Td>235/1,Kanampitiya Road,Galle</Td>
                  <Td>0766245650</Td>
                  <Td>kaveesha.hettige@gmail.com</Td>
                  <Td>
                    <Button bg="primary" size="sm">
                      View More
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td>
                    <HStack>
                      <Image
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="50%"
                        mr={4}
                      />
                      <Text>Kaveesha Hettige</Text>
                    </HStack>
                  </Td>
                  <Td>235/1,Kanampitiya Road,Galle</Td>
                  <Td>0766245650</Td>
                  <Td>kaveesha.hettige@gmail.com</Td>
                  <Td>
                    <Button bg="primary" size="sm">
                      View More
                    </Button>
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </GridItem>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box borderBottomWidth={"1px"} p={2}>
              <VStack>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="50%"
                  mr={4}
                />
                <Text fontSize={"xl"}>Kaveesha Hettige</Text>
                <Text fontSize={"sm"}>kaveesha.hettige@gmail.com</Text>
              </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <HStack>
                <Box mr={1}>
                  <VStack>
                    <Box mb={9}>
                      <Icon as={FaLocationDot} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={8}>
                      <Icon as={MdPayment} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={7}>
                      <Icon as={FaCartFlatbed} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={7}>
                      <Icon as={FaCartFlatbed} boxSize={5} color={"primary"} />
                    </Box>
                  </VStack>
                </Box>
                <Box ml={1}>
                  <VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Address
                      </Text>
                      <Text fontSize={"sm"}>235/1,Kanampitiya Road,Galle</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Payments
                      </Text>
                      <Text fontSize={"sm"}>Rs 9000</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        First Order
                      </Text>
                      <Text fontSize={"sm"}>2023.04.01</Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Latest Order
                      </Text>
                      <Text fontSize={"sm"}>2024.05.06</Text>
                    </VStack>
                  </VStack>
                </Box>
              </HStack>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

export default AdminCustomers;
