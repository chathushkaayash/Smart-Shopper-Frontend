import APIClient from "@/services/api-client";
import useConsumers, { ConsumerQuery } from "@/services/Consumer/useConsumers";
import useProduct from "@/services/Products/useProduct";
import { DateTime } from "@/utils/Time";
import {
  Box,
  Button,
  Card,
  CardBody,
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
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import BarGraph from "../../components/Charts/BarGraph";
import DoughnutChart from "../../components/Charts/DoughnutChart";

export interface OrderItem {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
  _orderId: number;
}

export interface OrderWithRelations {
  orderItems: OrderItem[];
  id: number;
  consumerId: number;
  status: string;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  deliveryFee: number;
  orderPlacedOn: DateTime;
}

const AdminOverview = () => {
  const [consumerQuery, setConsumerQuery] = useState<ConsumerQuery>(
    {} as ConsumerQuery
  );
  console.log(setConsumerQuery);
  const [visibleCount, setVisibleCount] = useState(3);

  const consumers = useConsumers(consumerQuery);
  const totalConsumers = consumers.data?.results.length || 0;
  const activeConsumers =
    consumers.data?.results.filter((consumer) =>
      consumer.user.lastLogin !== null
        ? DateTime.getMoment(consumer.user.lastLogin).isAfter(30, "days")
        : false
    ).length || 0;
  const churnedCustomers = totalConsumers - activeConsumers;

  const { data: salesData } = useQuery({
    queryKey: ["sales"],
    queryFn: () =>
      new APIClient<OrderWithRelations>("stats/supermarket_sales").getAll({}),
    staleTime: 1000 * 5,
  });

  console.log('salesData', salesData);

  let totalSales = 0;
  const monthlySales: { [key: number]: number } = {};
  const productSales: { [key: string]: number } = {};

  salesData?.results.forEach((order) => {
    const { month, year } = order.orderPlacedOn;
    if (year === 2024) {
      const orderTotal = order.orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      totalSales += orderTotal;

      monthlySales[month] = (monthlySales[month] || 0) + orderTotal;

      order.orderItems.forEach((item) => {
        productSales[item.productId] =
          (productSales[item.productId] || 0) + item.quantity;
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

  const topProducts = Object.entries(productSales)
    .sort(([, qtyA], [, qtyB]) => qtyB - qtyA)
    .slice(0, 5);

  const productIds = topProducts.map(([productId]) => Number(productId));

  // Call useProduct to get data for the product IDs
  const productQueries = useProduct(productIds);

  // Extract data or loading/error states
  const productDetails = productQueries.map((query) => query.data);
  const isLoading = productQueries.some((query) => query.isLoading);
  const hasError = productQueries.some((query) => query.isError);

  useEffect(() => {
    console.log("Product Details:", productDetails);
  }, [productDetails]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading product details</div>;
  }

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more items each click
  };

  const customerCards = [
    {
      title: "Total Visits",
      icon: CgWebsite,
      color: "purple",
      background: "purple.100",
      value: "8",
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
      percentage: "1.3% Down from yesterday",
      rdicon: AiOutlineFall,
      rdiconColor: "red.400",
    },
    {
      title: "Total Sales",
      icon: FcSalesPerformance,
      color: "yellow",
      background: "yellow.100",
      value: `${totalSales} LKR`,
      percentage: "2.7% Up from yesterday",
      rdicon: AiOutlineRise,
      rdiconColor: "green.400",
    },
  ];

  return (
    <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
      <Flex w="full" gap={5}>
        <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
          <Heading as="h3" size="md" mb={1}>
            Monthly Sales
          </Heading>
          <Heading as="h3" size="sm" mb={4}>
            Total Sales - {totalSales.toLocaleString()} LKR
          </Heading>
          <BarGraph chartData={sales} labels={months} />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" w="40%" borderRadius={15}>
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
                />
              </HStack>
              <Text fontSize="sm">{card.value}</Text>
              <Flex mt={2}>
                <Icon as={card.rdicon} boxSize={5} color={card.rdiconColor} />
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

        <TableContainer mt={10} w="full">
          <Table size="lg" align="center">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Sales</Th>
              </Tr>
            </Thead>
            <Tbody>
              {topProducts.slice(0,visibleCount).map(([productId, quantity], index) => {
                console.log(productId); // Properly log the productId
                return (
                  <Tr key={index}>
                    <Td>
                      <HStack>
                        <Image
                          src={
                            productDetails[index]?.imageUrl ||
                            "https://via.placeholder.com/150"
                          }
                          alt="Product Image"
                          boxSize="40px"
                          objectFit="cover"
                          mr={2}
                        />
                        <Text>
                          {productDetails[index]?.name || "Loading..."}
                        </Text>
                      </HStack>
                    </Td>
                    <Td>
                      {productDetails[index]?.description || "Loading..."}
                    </Td>
                    <Td>
                      {productDetails[index]?.price + " LKR" || "Loading..."}
                    </Td>
                    <Td>{quantity}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        {visibleCount < topProducts.length && ( // Show button only if more items exist
          <Button
            size="md"
            mt={8}
            fontWeight="bold"
            bg="background"
            onClick={handleViewMore}
          >
            View More
          </Button>
        )}
      </Box>
    </VStack>
  );
};

export default AdminOverview;
