import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Tab,
  Table,
  TabList,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";

import Face from "../../assets/CourierCompany/Face 1.svg";
import Stars from "../../assets/CourierCompany/stars.svg";
import MiddleContainer from "../../components/Containers/MiddleContainer";


interface Customer {
  name: string;
  phone: string;
  avatar: string;
}

interface Driver {
  name: string;
  phone: string;
  nic: string;
  avatar: string;
  deliveriesCompleted: number;
  revenue: number;
}

interface Delivery {
  order: string;
  date: string;
  status: string;
  customer: Customer;
  driver: Driver;
}

const Deliveries = () => {
  const [selectedStatus, setSelectedStatus] = useState("View All");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [currentDelivery, setCurrentDelivery] = useState<Delivery>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deliveries: Delivery[]= [
    {
      order: "#3066",
      date: "Jan 6, 2024 4.25pm",
      status: "Active",
      customer: {
        name: "Olivia Rhye",
        phone: "0765656590",
        avatar: "https://via.placeholder.com/50",
      },
      driver: {
        name: "Kaveesha Hettige",
        phone: "+947788905",
        nic: "763344567V",
        avatar: "https://via.placeholder.com/50",
        deliveriesCompleted: 8,
        revenue: 34.995,
      },
    },
    {
      order: "#3065",
      date: "Jan 6, 2024 3.20pm",
      status: "Active",
      customer: {
        name: "Phoenix Baker",
        phone: "0765656590",
        avatar: "https://via.placeholder.com/50",
      },
      driver: {
        name: "Phoenix Baker",
        phone: "0765656590",
        avatar: "https://via.placeholder.com/50",
        nic: "763344567V",
        deliveriesCompleted: 8,
        revenue: 34.995,
      },
    },
    {
      order: "#3064",
      date: "Jan 6, 2024 3.10pm",
      status: "Completed",
      customer: {
        name: "Lana Steiner",
        phone: "0765656590",
        avatar: "https://via.placeholder.com/50",
      },
      driver: {
        name: "Lana Steiner",
        phone: "0765656590",
        nic: "763344567V",
        avatar: "https://via.placeholder.com/50",
        deliveriesCompleted: 8,
        revenue: 34.995,
      },
    },
    {
      order: "#3063",
      date: "Jan 6, 2024 12.30pm",
      status: "Completed",
      customer: {
        name: "Demi Wilkinson",
        phone: "0765656590",
        avatar: "https://via.placeholder.com/50",
      },
      driver: {
        name: "Demi Wilkinson",
        phone: "0765656590",
        nic: "763344567V",
        avatar: "https://via.placeholder.com/50",
        deliveriesCompleted: 8,
        revenue: 34.995,
      },
    },
    // Add more delivery data here
  ];

  const filteredDeliveries = deliveries.filter((delivery) => {
    if (selectedStatus === "View All") return true;
    return delivery.status === selectedStatus;
  });

  const handleViewClick = (delivery: Delivery) => {
    setCurrentDelivery(delivery);
    onOpen();
  };

  return (
    <MiddleContainer width="90vw">
      <Heading as="h4" size="md" mt={7} pl={7}>
        Delivery Details
      </Heading>
      <Container maxW="1330px" mt={4}>
        <Flex mb={4}>
          <Select
            placeholder="January"
            maxW="200px"
            mr={4}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Select>
          <Spacer />
          <Box display="flex" justifyContent="center" w="100%">
            <Tabs
              variant="enclosed"
              onChange={(index) => {
                const status =
                  index === 0
                    ? "View All"
                    : index === 1
                    ? "Active"
                    : "Completed";
                setSelectedStatus(status);
              }}
            >
              <TabList mr={300}>
                <Tab>View All</Tab>
                <Tab>Active</Tab>
                <Tab>Completed</Tab>
              </TabList>
            </Tabs>
          </Box>
          <Spacer />
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>Order</Th>
              <Th>Start Date, Time</Th>
              <Th>Status</Th>
              <Th>Customer</Th>
              <Th>Driver</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDeliveries.map((delivery, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox />
                </Td>
                <Td>{delivery.order}</Td>
                <Td>{delivery.date}</Td>
                <Td>
                  <Text
                    color={
                      delivery.status === "Active" ? "green.400" : "red.500"
                    }
                  >
                    {delivery.status}
                  </Text>
                </Td>
                <Td>
                  <HStack>
                    <Avatar src={delivery.customer.avatar} size="sm" />
                    <Box>
                      <Text>{delivery.customer.name}</Text>
                      <Text>{delivery.customer.phone}</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <Avatar src={delivery.driver.avatar} size="sm" />
                    <Box>
                      <Text>{delivery.driver.name}</Text>
                      <Text>{delivery.driver.phone}</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <Button
                    onClick={() => handleViewClick(delivery)}
                    width="full"
                    bg="primary"
                    color="white"
                    mt={3}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Flex mt={4} justify="space-between">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </Flex>
      </Container>

      {/* Modal for View Button */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delivery Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentDelivery && (
              <Box>
                <Box borderWidth="2px" borderRadius="lg" p={4} mb={4}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Order Details
                  </Text>

                  <Box mb={4}>
                    <Text>
                      <strong>Order Placed on:</strong> 12.04.2024
                    </Text>
                    <Text>
                      <strong>Customer:</strong> Kaveesha Hettige
                    </Text>
                    <Text>
                      <strong>Contact Number:</strong> 0764562901
                    </Text>
                    <Text>
                      <strong>Delivery Cost:</strong> 300.00 LKR
                    </Text>
                  </Box>
                </Box>

                <Flex borderWidth="2px" borderRadius="lg" p={4} mb={4}>
                  <Image src={Face} mr={4} />

                  <Box>
                    <Text fontSize="xl" fontWeight="bold" mb={2}>
                      Delivery Personal Details
                    </Text>
                    <Text>
                      <strong>Name:</strong> {currentDelivery?.driver.name}
                    </Text>
                    <Text>
                      <strong>NIC Number:</strong> {currentDelivery.driver.nic}
                    </Text>
                    <Text>
                      <strong>Contact No:</strong>{" "}
                      {currentDelivery.driver.phone}
                    </Text>
                  </Box>
                </Flex>

                <Heading as="h5" size="sm" mb={2}>
                  Feedbacks
                </Heading>
                <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                  <Text fontSize="sm" color="gray.500">
                    October 21, 2020
                  </Text>
                  <Box width="80px" height="40px">
                    <Image src={Stars} alt="Stars" boxSize="100%" />
                  </Box>

                  <Text>Arrived on time. Good in delivery.</Text>
                  <Flex mt={2}></Flex>
                </Box>
              </Box>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </MiddleContainer>
  );
};

export default Deliveries;
