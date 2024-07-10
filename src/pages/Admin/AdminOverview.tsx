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
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import BarGraph from "../../components/Charts/BarGraph";
import DoughnutChart from "../../components/Charts/DoughnutChart";

const AdminOverview = () => {
  const customerCards = [
    {
      title: "Total Visits",
      icon: CgWebsite,
      color: "purple",
      background: "purple.100",
      value: "5.8 k",
      percentage: "8.5% Up from yesterday",
      rdicon: AiOutlineRise,
      rdiconColor: "green.400",
    },
    {
      title: "Total Customers",
      icon: IoMdPeople,
      color: "primary",
      background: "orange.100",
      value: "10.8 k",
      percentage: "8.5% Down from yesterday",
      rdicon: AiOutlineFall,
      rdiconColor: "red.400",
    },
    {
      title: "Total Sales",
      icon: FcSalesPerformance,
      color: "yellow",
      background: "yellow.100",
      value: "102,000 Rupees",
      percentage: "8.5% Up from yesterday",
      rdicon: AiOutlineRise,
      rdiconColor: "green.400",
    },
  ];
  return (
    <VStack gap={"8vh"} color="blackAlpha.800" fontWeight="bold" my="5vh">
      <Flex w="full" gap={5}>
        {/*
          Monthly Sales Card 
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
          <Heading as="h3" size="lg" mb={1}>
            Monthly Sales
          </Heading>
          <Heading as="h3" size="sm" mb={4}>
            Total Revenue - 350000 LKR
          </Heading>
          <BarGraph />
        </Box>

        {/*
          Customers Card 
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
          <Box p={5}>
            <Heading as="h3" size="lg">
              Customers
            </Heading>

            <Center>
              <DoughnutChart />
            </Center>
          </Box>
        </Box>
      </Flex>

      <HStack w="full" justifyContent="space-between" h="25vh">
        {customerCards.map((card, index) => (
          <Card
            key={index}
            w="24vw"
            h="full"
            shadow="md"
            borderWidth="1.5px"
            borderColor="background"
            borderRadius={15}
          >
            <CardBody>
              <HStack gap={10} justifyContent="space-between">
                <Heading size="lg">{card.title}</Heading>
                <Icon
                  as={card.icon}
                  boxSize={10}
                  color={card.color}
                  bg={card.background}
                  borderRadius={5}
                  p={2}
                  mb="auto"
                />
              </HStack>
              <Text fontSize="lg">{card.value}</Text>
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
      </HStack>

      <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Heading as="h3" size="lg" my={4}>
          Top Products
        </Heading>

        <TableContainer
          // width={{ base: "100%", lg: "90%" }}
          mt={10}
          justifyContent="center"
          w="full"
        >
          <Table size="lg" align="center">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Inventory</Th>
                <Th>Sales</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <HStack>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="Product Image"
                      boxSize="40px"
                      objectFit="cover"
                      mr={2}
                    />
                    <Text>Munchee Cream Cracker</Text>
                  </HStack>
                </Td>
                <Td>45</Td>
                <Td>140</Td>
                <Td>300 Rupees</Td>
              </Tr>
              <Tr>
                <Td>
                  <HStack>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="Product Image"
                      boxSize="40px"
                      objectFit="cover"
                      mr={2}
                    />
                    <Text>Munchee Cream Cracker</Text>
                  </HStack>
                </Td>
                <Td>45</Td>
                <Td>140</Td>
                <Td>300 Rupees</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Center>
          <Box display="flex" justifyContent="flex-end" mr="60px" my={2}>
            <Button bg="primary" size="sm" color="white" p={4}>
              See More
            </Button>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
};

export default AdminOverview;
