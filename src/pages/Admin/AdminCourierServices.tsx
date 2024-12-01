import ActionButton from "@/components/Buttons/ActionButton";
import RatingStars from "@/components/Inputs/Rating";
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
import { IoIosColorPalette } from "react-icons/io";
import { AiOutlineFieldNumber } from "react-icons/ai";
import LineChart from "../../components/Charts/LineChart";
import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";
import useDrivers from "@/services/Driver/useDrivers";
import { Driver } from "@/services/types";
const AdminCourierServices = () => {
  const drivers = useDrivers();
  const driverArray = drivers.data?.results;
  //console.log("drivers",drivers.data?.results);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDriver, setSelecteddriver] = useState<Driver | null>();

  const deliveryPersonPopup = [
    [
      {
        icon: <Icon as={SiCashapp} boxSize={5} color={"primary"} />,
        title: "Earning",
        value: "",
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
        icon: <Icon as={IoStarSharp} boxSize={6} color={"primary"} />,
        title: "Ratings",
        value: "4/5",
      },
    ],
    [
      {
        icon: <Icon as={IoIosColorPalette} boxSize={6} color={"primary"} />,
        title: "Vehicle Color",
        value: selectedDriver?.vehicleColor,
      },
      {
        icon: <Icon as={AiOutlineFieldNumber} boxSize={6} color={"primary"} />,
        title: "Vehicle Number",
        value: selectedDriver?.vehicleNumber,
      },
    ],
  ];

  const companyDriverCounts:any[] = [];

  const handleEditClick = (driver: Driver) => {
    setSelecteddriver(driver);
    onOpen();
  };

  return (
    <>
      <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
        <Flex w="full" gap={5}>
          {/* ------- Courier Company Earnings ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
            <Heading size="md">Courier Company Earnings</Heading>

            <Center>
              <LineChart width="80%" />
            </Center>
          </Box>

          {/* ------- Number of Drivers Card ------- */}
          <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
            <Heading size="md">Number of Drivers</Heading>
            {companyDriverCounts.slice(0, 3).map(( index) => (
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
                    src="https://via.placeholder.com/150"
                    alt="Product Image"
                    boxSize="40px"
                    objectFit="cover"
                  />
                  <Text ml="0.3rem">{"company.name"}</Text>
                  <Text ml="auto">{"company.count"}</Text>
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
                  <Th>Contact Number</Th>
                  <Th>Company</Th>
                  <Th>Vehicle Type</Th>
                  <Th>Vehicle Model</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {driverArray &&
                  Array.isArray(driverArray) &&
                  driverArray.map((driver) => (
                    <Tr>
                      <Td>
                        <HStack>
                          <Image
                            src={driver.user.profilePic}
                            alt="driver Image"
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="50%"
                            mr={4}
                          />
                          <Text>{driver.user.name}</Text>
                        </HStack>
                      </Td>
                      <Td>{driver.courierCompany}</Td>
                      <Td>{driver.user.number}</Td>
                      <Td>{driver.vehicleType}</Td>
                      <Td>{driver.vehicleName}</Td>
                      <Td>
                        <Button
                          bg="primary"
                          size="sm"
                          onClick={() => handleEditClick(driver)}
                        >
                          View More
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
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
                <Text fontSize={"xl"}>{selectedDriver?.user.name}</Text>
                <Flex>
                  <Icon as={IoBusiness} boxSize={5} color={"primary"} />
                  <Text fontSize={"sm"} ml={2}>
                    {selectedDriver?.courierCompany}
                  </Text>
                </Flex>

                <RatingStars value={4} />
                <HStack>
                  <Icon as={IoCall} boxSize={4} color={"primary"} />
                  <Text fontSize="sm">{selectedDriver?.user.number}</Text>
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
