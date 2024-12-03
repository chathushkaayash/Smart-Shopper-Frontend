import SearchBar from "@/components/SearchBar";
import { lastMonths } from "@/data/months";
import useConsumers, { ConsumerQuery } from "@/services/Consumer/useConsumers";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import LineChart from "../../components/Charts/LineChart";
import { DateTime } from "@/utils/Time";
// import LineChart from "@/components/Charts/LineChart";
import BarGraph from "@/components/Charts/BarGraph";

const AdminCustomers = () => {
  const navigate = useNavigate();
  const [consumerQuery, setConsumerQuery] = useState<ConsumerQuery>({
    searchText: "",
  });

  const consumers = useConsumers(consumerQuery);
  console.log("consumers", consumers.data?.results);

  const [chartData, setChartData] = useState<{ labels: string[]; ldata: number[] }>({
    labels: [],
    ldata: [],
  });

  const [visibleRows, setVisibleRows] = useState(5);

  const handleClickMore=()=>{
    setVisibleRows(visibleRows + 3);
  }

  // Set chart data only once after consumers are loaded
  useEffect(() => {
  if (consumers.data?.results) {
    const groupedData: { [key: string]: number } = {};

    consumers.data.results.forEach((consumer) => {
      const createdAt = consumer.user.createdAt;
      const dateKey = `${createdAt.year}-${String(createdAt.month).padStart(
        2,
        "0"
      )}`; // Group by year-month
      groupedData[dateKey] = (groupedData[dateKey] || 0) + 1;
    });

    const labels = Object.keys(groupedData).sort();
    const ldata = labels.map((label) => groupedData[label]);

    setChartData({ labels, ldata }); // Set the data once
  }
  }, [consumers.data?.results]); // Run only when consumers data changes

  console.log("labels", chartData.labels);
  console.log("ldata", chartData.ldata);

  const totalConsumers = consumers.data?.results.length || 0;

  const activeConsumers =
    consumers.data?.results.filter((consumer) =>
      consumer.user.lastLogin !== null
        ? DateTime.getMoment(consumer.user.lastLogin).isAfter(30, "days")
        : false
    ).length || 0;

  const consumerCards = [
    {
      title: "Total Customers",
      value: totalConsumers,
      icon: IoMdPeople,
      mainColor: "orange",
      color: "orange.100",
      percentage: "1.3% Down from yesterday",
      rdiconColor: "red.400",
      rdicon: AiOutlineFall,
    },
    {
      title: "Active Customers",
      value: activeConsumers,
      icon: IoMdPeople,
      mainColor: "red",
      color: "red.100",
      percentage: "8.5% Up from yesterday",
      rdiconColor: "green.400",
      rdicon: AiOutlineRise,
    },
    {
      title: "Churned Customers",
      value: totalConsumers - activeConsumers,
      icon: IoMdPeople,
      mainColor: "green",
      color: "green.100",
      percentage: "6.5% Down from yesterday",
      rdiconColor: "red.400",
      rdicon: AiOutlineFall,
    },
  ];

  return (
    <VStack
      gap="8vh"
      my="5vh"
      px={10}
      // justifyContent="center"
      w="full"
      fontWeight={"bold"}
    >
      <Flex width="full" gap='5%'>
        <Box
          px={5}
          pt={5}
          shadow="md"
          borderWidth="1px"
          // w="70%"
          w="65%"
          borderRadius={15}
        >
          <Heading size="md">Customer Engagement</Heading>

          
            {/* <LineChart width="80%" ldata={chartData.ldata} labels={chartData.labels} /> */}
            {/* <PieChart/> */}
          <BarGraph chartData={chartData.ldata} labels={chartData.labels} />
        </Box>

        <Box w="30%">
          <VStack w="full" gap={12}>
            {consumerCards.map((card, index) => (
              <Card px={3} w={"20vw"} key={index}>
                <CardBody>
                  <Flex gap={20}>
                    <Heading size="md">{card.title}</Heading>
                    <Icon
                      as={card.icon}
                      boxSize={8}
                      color={card.mainColor}
                      bg={card.color}
                      borderRadius={5}
                    />
                  </Flex>
                  <Text fontSize="sm">{card.value}</Text>
                  <Flex mt={2}>
                    <Icon
                      as={card.rdicon}
                      boxSize={5}
                      color={card.rdiconColor}
                      borderRadius={5}
                    />
                    <Text fontSize="sm" color={card.rdiconColor} pl={2}>
                      {card.percentage}
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box py={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Flex justifyContent="space-between" px={10} py={10}>
          <Heading as="h3" size="md">
            Customer Details
          </Heading>
          <SearchBar
            width="65%"
            value={consumerQuery.searchText}
            setValue={(value) => {
              if (value != consumerQuery.searchText)
                setConsumerQuery({ ...consumerQuery, searchText: value });
            }}
          />
          <Flex>
            <Box px={2}>
              <Select
                placeholder="Select option"
                value={consumerQuery.month}
                onChange={(e) => {
                  const value :Number= Number(e.target.value)
                  if (value != consumerQuery.month)
                    setConsumerQuery({
                      ...consumerQuery,
                      month: Number(value),
                    });
                }}
              >
                {lastMonths(7).map((month, index) => (
                  <option key={index} value={month.value}>
                    {month.name}
                  </option>
                ))}
              </Select>
            </Box>
            {/* <Button bg="primary" size="sm">
              Add Customer
            </Button> */}
          </Flex>
        </Flex>

        <Center>
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
              {consumers.data?.results
                    .slice(0, visibleRows)
                    .map((consumer, index) => (
                  <Tr key={index}>
                    <Td>
                      <HStack>
                        <Image
                          // consumer.user.profilePic
                          src={"https://via.placeholder.com/150"} //{consumer.user.profilePic}
                          alt="Consumer Image"
                          boxSize="50px"
                          objectFit="cover"
                          borderRadius="50%"
                          mr={4}
                        />
                        <Text>{consumer.user.name}</Text>
                      </HStack>
                    </Td>
                    <Td>
                      {consumer.addresses.length
                        ? consumer.addresses[0].address
                        : "-"}
                    </Td>
                    <Td>{consumer.user.number}</Td>
                    <Td>{consumer.user.email}</Td>
                    {/* <Td>
                      <Button
                        bg="primary"
                        size="sm"
                        onClick={() => navigate("/profile/" + consumer.userId)}
                        color="white"
                      >
                        View More
                      </Button>
                    </Td> */}
                  </Tr>
                ))}
                {consumers.data?.results.length === 0 &&
                  <Tr>
                    <Td colSpan={5}>No customers found</Td>
                  </Tr>
                }
              </Tbody>
            </Table>
            {consumers.data && consumers.data.count > visibleRows && (
            
                <Button
                 size="md" mt={8} fontWeight="bold" bg="background"
                  onClick={handleClickMore}
                  
                  >
                More Customers
                </Button>
              
      )}
       
          </TableContainer>
        </Center>
      </Box>
    </VStack>
  );
};

export default AdminCustomers;
