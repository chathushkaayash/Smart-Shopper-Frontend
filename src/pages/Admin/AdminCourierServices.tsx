import ActionButton from "@/components/Buttons/ActionButton";
import RatingStars from "@/components/Inputs/Rating";
import { numOfDrivers } from "@/data/numberOfDeivers";
import {
  Box,
  Button,
  Center,
  Flex,
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
import { IoBusiness, IoCall } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import LineChart from "../../components/Charts/LineChart";

const AdminCourierServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deliveryPersonPopup = [
    [
      {
        icon: <Icon as={SiCashapp} boxSize={5} color={"primary"} />,
        title: "Earning",
        value: "Rs 134 000",
      },
      {
        icon: <Icon as={MdFeedback} boxSize={5} color={"primary"} />,
        title: "Feedbacks",
        value: "23",
      },
    ],
    [
      {
        icon: <Icon as={TbTruckDelivery} boxSize={6} color={"primary"} />,
        title: "Deliveries",
        value: "80",
      },
      {
        icon: <Icon as={TbTruckDelivery} boxSize={6} color={"primary"} />,
        title: "Deliveries",
        value: "80",
      },
    ],
  ];

  return (
    <>
      <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
        <Flex w="full" gap={5}>
          {/* ------- Courier Company Earnings ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
            <Heading  size="md">
              Courier Company Earnings
            </Heading>

            <Center>
              <LineChart  width="80%"/>
            </Center>
          </Box>

          {/* ------- Number of Drivers Card ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
            <Heading size="md">Number of Drivers</Heading>
            {numOfDrivers.map((company, index) => (
              <VStack mt={5} key={index}>
                <HStack
                  w="full"
                  px="1vw"
                  h="10vh"
                  rounded={10}
                  borderWidth="1px"
                  borderColor="background"
                  shadow="md"
                >
                  <Image
                    src={company.image}
                    alt="Product Image"
                    boxSize="40px"
                    objectFit="cover"
                  />
                  <Text ml='0.3rem'>{company.name}</Text>
                  <Text ml="auto">{company.count}</Text>
                </HStack>
              </VStack>
            ))}
            <ActionButton inverted={true} className="!w-full mt-5">
              View All
            </ActionButton>
          </Box>
        </Flex>
        <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="md">
              Delivery Person Details
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
              {/* <ActionButton url="/addcustomer">Add Customer</ActionButton> */}
            </Flex>
          </Flex>

          <TableContainer
            width={{ base: "100%", lg: "90%" }}
            ml={{ base: "0%", lg: "5%" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Company</Th>
                  <Th>Contact Number</Th>
                  <Th>Deliveries Completed</Th>
                  <Th>Earning</Th>
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
                  <Td>Island Cabs</Td>
                  <Td>0766245650</Td>
                  <Td>45</Td>
                  <Td>Rs.2000</Td>
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
                  <Td>Island Cabs</Td>
                  <Td>0766245650</Td>
                  <Td>45</Td>
                  <Td>Rs.2000</Td>
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
                  <Td>Island Cabs</Td>
                  <Td>0766245650</Td>
                  <Td>45</Td>
                  <Td>Rs.2000</Td>
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

        {/* 
          Modal for viewing more details of the delivery person
         */}
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius={15}>
            <ModalHeader>
              <VStack borderBottomWidth={"1px"} p={2}>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="50%"
                  mr={4}
                />
                <Text fontSize={"xl"}>Kaveesha Hettige</Text>
                <Flex>
                  <Icon as={IoBusiness} boxSize={5} color={"primary"} />
                  <Text fontSize={"sm"} ml={2}>
                    Uber Deliveries
                  </Text>
                </Flex>

                <RatingStars value={4} />
                <HStack>
                  <Icon as={IoCall} boxSize={4} color={"primary"} />
                  <Text fontSize="sm">071 2216841</Text>
                </HStack>
              </VStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack gap="4vh">
                {deliveryPersonPopup.map((row, index) => (
                  <HStack w="80%" justifyContent="space-between" key={index}>
                    {/* ----------- One Description ----------- */}
                    {row.map((option, index) => (
                      <HStack gap={4} key={index}>
                        <Box w="1.5vw">{option.icon}</Box>
                        <Box w="6rem">
                          <Text fontSize={"lg"} fontWeight={"500"}>
                            {option.title}
                          </Text>
                          <Text fontSize={"sm"}>{option.value}</Text>
                        </Box>
                      </HStack>
                    ))}
                  </HStack>
                ))}
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Center w="full">
                <Button bg="primary" color="white" onClick={onClose}>
                  Close
                </Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </>
  );
};

export default AdminCourierServices;
