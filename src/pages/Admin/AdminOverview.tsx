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
import useConsumers, { ConsumerQuery } from "@/services/Consumer/useConsumers";
import { useState } from "react";
import { getMoment } from "@/utils/Time";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import useProduct from "@/hooks/useProduct";

interface OrderItem {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
  _orderId: number;
}

interface OrderWithRelations {
  orderItems: OrderItem[];
  id: number;
  consumerId: number;
  status: string;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  deliveryFee: number;
  orderPlacedOn: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
  };
}

const AdminOverview = () => {
  const [consumerQuery, setConsumerQuery] = useState<ConsumerQuery>(
    {} as ConsumerQuery
  );
  const consumers = useConsumers(consumerQuery);

  const totalConsumers = consumers.data?.results.length || 0;

  const activeConsumers =
    consumers.data?.results.filter((consumer) =>
      consumer.user.lastLogin !== null
        ? getMoment(consumer.user.lastLogin).isAfter(30, "days")
        : false
    ).length || 0;

  const churnedCustomers = totalConsumers - activeConsumers;

  //   const earnings=useSupermarketEarnings();
  //   //console.log("earnings",earnings.data?.results);
  // const totalSales=earnings.data?.results.map((results)=>results.earnings).reduce((a,b)=>a+b,0);
  //console.log("sales",totalSales);

  const salesData = () => {
    const apiClient = new APIClient<OrderWithRelations>(
      "stats/supermarket_sales"
    );
    return useQuery({
      queryKey: ["sales"],
      queryFn: () => apiClient.getAll({}),
      staleTime: 1000 * 5, // 5 seconds
    });
  };

  console.log("sales", salesData().data?.results);

  let totalSales = 0;
  const monthlySales: { [key: number]: number } = {};
  const productSales: { [key: string]: number } = {};

  salesData().data?.results.forEach((order) => {
    const { month, year } = order.orderPlacedOn;
    if (year === 2024) {
      // Replace with the year you want to filter by
      const orderTotal = order.orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      totalSales += orderTotal;
      if (monthlySales[month]) {
        monthlySales[month] += orderTotal;
      } else {
        monthlySales[month] = orderTotal;
      }

      // Update product sales
      order.orderItems.forEach((item) => {
        if (productSales[item.productId]) {
          productSales[item.productId] += item.quantity;
        } else {
          productSales[item.productId] = item.quantity;
        }
      });
    }
  });
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const months = Object.keys(monthlySales).map(
    (monthNum) => monthNames[Number(monthNum) - 1]
  );
  const sales = Object.values(monthlySales);

  //products with id and quantity
  const topProducts = Object.entries(productSales)
    .sort(([, qtyA], [, qtyB]) => qtyB - qtyA)
    .slice(0, 5); // Get top 5 products

  console.log("topProducts", topProducts);

  //for each for get data of top products
  // topProducts.forEach(([productId, quantity]) => {
  //   console.log("productId",productId);
  //   const productDetail=useProduct(Number(productId));

  // });

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
      value: totalConsumers,
      percentage: "8.5% Down from yesterday",
      rdicon: AiOutlineFall,
      rdiconColor: "red.400",
    },
    {
      title: "Total Sales",
      icon: FcSalesPerformance,
      color: "yellow",
      background: "yellow.100",
      value: totalSales + " LKR",
      percentage: "8.5% Up from yesterday",
      rdicon: AiOutlineRise,
      rdiconColor: "green.400",
    },
  ];

  return (
    <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
      <Flex w="full" gap={5}>
        {/*
          Monthly Sales Card 
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
          <Heading as="h3" size="md" mb={1}>
            Monthly Sales
          </Heading>
          <Heading as="h3" size="sm" mb={4}>
            Total Sales - {totalSales.toLocaleString()} LKR
          </Heading>
          <BarGraph chartData={sales} labels={months} />
        </Box>

        {/*
          Customers Card 
        */}
        <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
          <Box>
            <Heading as="h3" size="md">
              Customer Enrollment
            </Heading>

            <DoughnutChart
              chartData={[totalConsumers, activeConsumers, churnedCustomers]}
              labels={[
                "Total Customers",
                "Active Customers",
                "Churned Customers",
              ]}
            />
          </Box>
        </Box>
      </Flex>

      <HStack w="full" justifyContent="space-between" h="25vh">
        {customerCards.map((card, index) => (
          <Card
            key={index}
            w="24vw"
            h="auto"
            shadow="md"
            borderWidth="1.5px"
            borderColor="background"
            borderRadius={15}
          >
            <CardBody>
              <HStack gap={10} justifyContent="space-between">
                <Heading size="md">{card.title}</Heading>
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
      </HStack>

      <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Heading as="h3" size="md" my={4}>
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
                <Th>Super Market</Th>
                <Th>Branch</Th>
                <Th>Sales</Th>
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
                <Td>Keels</Td>
                <Td>Maharagama</Td>
                <Td>250</Td>
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
                    <Text>Prima kottu mee</Text>
                  </HStack>
                </Td>
                <Td>Cargills</Td>
                <Td>Galle</Td>
                <Td>270</Td>
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
