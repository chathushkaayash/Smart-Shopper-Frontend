import {
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaClipboardList, FaTruck, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LineChart from "../../components/Charts/LineChart";
import useDrivers from "@/services/Driver/useDrivers";
import { Driver } from "@/services/types";

const CourierCompanyHome = () => {
  const navigate = useNavigate();
  const drivers = useDrivers();
  const handleViewMore = (person: Driver) => {
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
                <Th>Email</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {drivers.data?.results.map((driver, index) => (
                <Tr key={index}>
                  <Td>
                    <Avatar
                      src="https://via.placeholder.com/150"
                      size="sm"
                      mr={2}
                    />
                    {driver.user.name}
                  </Td>
                  <Td>{driver.user.number}</Td>
                  <Td>{driver.user.email}</Td>
                  <Td>
                    <Button
                      colorScheme="orange"
                      onClick={() => handleViewMore(driver)}
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

export default CourierCompanyHome;
