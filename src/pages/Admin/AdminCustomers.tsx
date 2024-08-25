import SearchBar from "@/components/SearchBar";
import { lastMonths } from "@/data/months";
import useConsumers, { ConsumerQuery } from "@/hooks/useConsumers";
import { getMoment } from "@/utils/Time";
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
import { useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import LineChart from "../../components/Charts/LineChart";

const AdminCustomers = () => {
  const navigate = useNavigate();
  const [consumerQuery, setConsumerQuery] = useState<ConsumerQuery>(
    {} as ConsumerQuery
  );

  const consumers = useConsumers(consumerQuery);

  const totalConsumers = consumers.data?.results.length || 0;

  const activeConsumers = consumers.data?.results.filter((consumer) =>
    consumer.user.lastLogin !== null
      ? getMoment(consumer.user.lastLogin).isAfter(30, "days")
      : false
  ).length || 0;

  const consumerCards = [
    {
      title: "Total Customers",
      value: totalConsumers,
      icon: IoMdPeople,
      mainColor: "orange",
      color: "orange.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "Active Customers",
      value: activeConsumers,
      icon: IoMdPeople,
      mainColor: "red",
      color: "red.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "Churned Customers",
      value: totalConsumers - activeConsumers,
      icon: IoMdPeople,
      mainColor: "green",
      color: "green.100",
      percentage: "6.5% Down from yesterday",
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
      <Flex width="full">
        <Box
          px={5}
          pt={5}
          shadow="md"
          borderWidth="1px"
          w="70%"
          borderRadius={15}
        >
          <Heading size="md">Customer Engagement</Heading>

          <Center>
            <LineChart width="70%" />
          </Center>
        </Box>

        <Box w="30%">
          <VStack w="full" gap={5}>
            {consumerCards.map((card, index) => (
              <Card px={3} w={"20vw"} key={index} bg={"green.200"}>
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
          </VStack>
        </Box>
      </Flex>

      <Box
        py={5}
        shadow="md"
        borderWidth="1px"
        w="full"
        borderRadius={15}
        bg="green.200"
      >
        <Flex justifyContent="space-between" px={10} py={10}>
          <Heading as="h3" size="md">
            Customer Details
          </Heading>
          <SearchBar
            width="65%"
            value={consumerQuery.searchText || ""}
            setValue={(value) => {
              setConsumerQuery({ searchText: value });
            }}
          />
          <Flex>
            <Box px={2}>
              <Select
                placeholder="Select option"
                value={consumerQuery.month || ""}
                onChange={(e) => {
                  setConsumerQuery({
                    ...consumerQuery,
                    month: Number(e.target.value),
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
                {consumers.data?.results.map((consumer, index) => (
                  <Tr key={index}>
                    <Td>
                      <HStack>
                        <Image
                          src={consumer.user.profilePic}
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
                        : "Not Found"}
                    </Td>
                    <Td>{consumer.user.number}</Td>
                    <Td>{consumer.user.email}</Td>
                    <Td>
                      <Button
                        bg="primary"
                        size="sm"
                        onClick={() => navigate("/profile/" + consumer.userId)}
                        color="white"
                      >
                        View More
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
      </Box>
    </VStack>
  );
};

export default AdminCustomers;
