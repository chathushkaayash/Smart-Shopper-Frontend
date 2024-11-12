import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaClipboardList, FaTruck, FaUser } from "react-icons/fa";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { NonVerifiedDriver } from "@/services/types";
import useNonVerifiedDrivers from "@/services/Driver/useNonVerifiedDrivers";
import DriverRequestPopup from "./DriverRequestPopup";

const CourierCompanyHome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [selectedPerson, setSelectedPerson] = useState<NonVerifiedDriver>();

  const driverRequests = useNonVerifiedDrivers().data?.results;

  const filteredRequests = driverRequests?.filter((request) =>
    [request.name, request.vehicleType, request.vehicleName]
      .some(field => field.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const handleViewClick = (person: NonVerifiedDriver) => {
    setSelectedPerson(person);
    onOpen();
  };
  const monthlyDeliveries = Array(12).fill(0);
  const options = {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };
  const chartData = [
    {
      name: "Deliveries",
      data: monthlyDeliveries,
    },
  ];

  return (
    <Box bg="gray.100">
      <Grid>
        <HStack h="90vh">
          <GridItem>
            <VStack w="22vw" py={4} gap="3vh">
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                w="90%"
              >
                <Stat>
                  <StatLabel>Current Delivery Personals</StatLabel>
                  <StatNumber>35</StatNumber>
                  <StatHelpText>8.5% Up from yesterday</StatHelpText>
                  <Icon as={FaUser} boxSize={8} color="purple.500" />
                </Stat>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                mt="7%"
                w="90%"
              >
                <Stat>
                  <StatLabel>Requests</StatLabel>
                  <StatNumber>{driverRequests?.length}</StatNumber>
                  <StatHelpText>1.3% Up from past week</StatHelpText>
                  <Icon as={FaClipboardList} boxSize={8} color="yellow.500" />
                </Stat>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="white"
                ml={4}
                mt="7%"
                w="90%"
              >
                <Stat>
                  <StatLabel>Deliveries Today</StatLabel>
                  <StatNumber>90</StatNumber>
                  <StatHelpText>4.3% Down from yesterday</StatHelpText>
                  <Icon as={FaTruck} boxSize={8} color="green.500" />
                </Stat>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Stack
              w="76vw"
              bg="white"
              py={4}
              pl={4}
              h="80vh"
              borderWidth="1px"
              borderRadius={15}
            >
              <HStack>
                <Text fontSize="xl" fontWeight="bold" mb={4} mr="50px">
                  Delivery Personal Requests
                </Text>
                {/* --------------- Search Bar --------------- */}
                <SearchBar
                  width="50%"
                  value={searchQuery}
                  setValue={setSearchQuery}
                />
              </HStack>
              <Container maxW="1330px" mb={4} maxH="70vH" overflowY="auto">
                <VStack spacing={6}>
                  {filteredRequests?.map((person, index) => (
                    <Center
                      key={index}
                      p={2}
                      boxShadow="md"
                      borderRadius={15}
                      display="flex"
                      w="100%"
                      borderWidth={1}
                    >
                      <Avatar src={person.profilePic} size="lg" />
                      <Box ml={4} flex="1">
                        <Text fontSize="lg" fontWeight="bold">
                          {person.name}
                        </Text>
                        <Text fontSize="sm">Vehicle: {person.vehicleName}</Text>
                        <Text fontSize="sm">Type: {person.vehicleType}</Text>
                      </Box>
                      <Button
                        colorScheme="orange"
                        variant="outline"
                        onClick={() => handleViewClick(person)}
                      >
                        View
                      </Button>
                    </Center>
                  ))}
                </VStack>
              </Container>
                {selectedPerson && (
        <DriverRequestPopup
          selectedPerson={selectedPerson}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
            </Stack>
          </GridItem>
        </HStack>
        <GridItem>
          <Center>
            <Box
              w="96vw"
              bg="white"
              p={4}
              mb={4}
              h="100%"
              borderWidth="1px"
              borderRadius={15}
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Customer Engagement
              </Text>
              <Center>
                <Box w="60%" borderRadius="md" boxShadow="md">
                  <ReactApexChart
                    options={options}
                    series={chartData}
                    type="area"
                    width="100%"
                  />
                </Box>
              </Center>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CourierCompanyHome;
