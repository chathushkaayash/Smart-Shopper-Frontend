import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { FaClipboardList, FaTruck, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LineChart from "../../components/Charts/LineChart";

const deliveryPersonnel = [
  {
    name: "Kaveesha Hettige",
    phone: "0766345267",
    completed: 8,
    earnings: "$34,295",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Milinda Sandruwan",
    phone: "0981236782",
    completed: 1,
    earnings: "$34,295",
    avatar: "https://via.placeholder.com/150",
  },
  {
    name: "Bimsara Jaydewa",
    phone: "0762341567",
    completed: 8,
    earnings: "$34,295",
    avatar: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleViewMore = (person) => {
    navigate("/PersonalDetails", { state: { person } });
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="70vw">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={0}>
          <Box p={4} boxShadow="md" borderRadius="md" bg="white" mt={4}>
            <Stat>
              <StatLabel>Current Delivery Personals</StatLabel>
              <StatNumber>35</StatNumber>
              <StatHelpText>8.5% Up from yesterday</StatHelpText>
              <Icon as={FaUser} boxSize={8} color="purple.500" />
            </Stat>
          </Box>
          <Box p={4} boxShadow="md" borderRadius="md" bg="white" mt={4}>
            <Stat>
              <StatLabel>Requests</StatLabel>
              <StatNumber>12</StatNumber>
              <StatHelpText>1.3% Up from past week</StatHelpText>
              <Icon as={FaClipboardList} boxSize={8} color="yellow.500" />
            </Stat>
          </Box>
          <Box p={4} boxShadow="md" borderRadius="md" bg="white" mt={4}>
            <Stat>
              <StatLabel>Number of Deliveries</StatLabel>
              <StatNumber>90</StatNumber>
              <StatHelpText>4.3% Down from yesterday</StatHelpText>
              <Icon as={FaTruck} boxSize={8} color="green.500" />
            </Stat>
          </Box>
        </SimpleGrid>

        <Box
          px={5}
          pt={5}
          shadow="md"
          borderWidth="1px"
          w="100%"
          borderRadius={15}
          bg="white"
          mt={4}
          pl={40}
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Customer Engagement
          </Text>

          <LineChart width="80%" />
        </Box>

        <Box p={4} boxShadow="md" borderRadius="md" bg="white" mt={4}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Delivery Personal Details
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Contact Number</Th>
                <Th>Deliveries Completed</Th>
                <Th>Earnings</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {deliveryPersonnel.map((person, index) => (
                <Tr key={index}>
                  <Td>
                    <Avatar src={person.avatar} size="sm" mr={2} />
                    {person.name}
                  </Td>
                  <Td>{person.phone}</Td>
                  <Td>{person.completed}</Td>
                  <Td>{person.earnings}</Td>
                  <Td>
                    <Button
                      colorScheme="orange"
                      onClick={() => handleViewMore(person)}
                    >
                      View More
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
