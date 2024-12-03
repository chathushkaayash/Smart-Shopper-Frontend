import ActionButton from "@/components/Buttons/ActionButton";
// import LineChart from "@/components/Charts/LineChart";
// import { itemsSold } from "@/data/itemsSold";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
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
import { FaShoppingBag } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import APIClient from "@/services/api-client";
import { OrderWithRelations } from "@/pages/Admin/AdminOverview";
import useProduct from "@/services/Products/useProduct";
import useSupermarketEarnings from "@/hooks/useSupermarketEarnings";
import PieChart from "@/components/Charts/PieChart";
import { useRef, useState } from "react";
import useAllOrders from "@/hooks/useAllOrders";
import useUser from "@/services/User/useUser";
import {
  BaseOpportunity,
  
  BaseOrderItem,
  BaseSupermarketOrder,
  BaseUser,
  
} from "@/services/types";

import { DateTime } from "@/utils/Time";
import useSupermarket from "@/services/Supermarket/useSupermarket";

const AdminOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visibleRows, setVisibleRows] = useState(5);
  const [selectedOrder, setSelectedOrder] =
    useState<OrdersWithUserData | null>();

  const handleClickMore = () => {
    setVisibleRows(visibleRows + 3);
  };

  const handleViewMore = (order: OrdersWithUserData) => {
    setSelectedOrder(order);
    onOpen();
  };

  const { data: salesData } = useQuery({
    queryKey: ["sales"],
    queryFn: () =>
      new APIClient<OrderWithRelations>("stats/supermarket_sales").getAll({}),
    staleTime: 1000 * 5,
  });

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

  const topProducts = Object.entries(productSales)
    .sort(([, qtyA], [, qtyB]) => qtyB - qtyA)
    .slice(0, 5);

  const productIds = topProducts.map(([productId]) => Number(productId));

  // Call useProduct to get data for the product IDs
  const productQueries = useProduct(productIds);
  console.log("productQueries", productQueries);

  const productDetails = productQueries.map((query) => query.data);

  console.log("top", topProducts);

  const earningBySupermarket = useSupermarketEarnings();
  console.log(earningBySupermarket.data);
  const names =
    earningBySupermarket.data?.results.map((item) => item.name) || [];
  const earnings =
    earningBySupermarket.data?.results.map((item) => item.earnings) || [];

  const orderBoxRef = useRef<HTMLDivElement>(null);
  const scrollToBox = () => {
    orderBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const allOrders = useAllOrders();
  const orders = allOrders.data?.results || [];

  console.log("Orders:", orders);

  // Extract consumer IDs
  const consumerIds = [...new Set(orders.map((order) => order.consumerId))]; // Avoid duplicates
  console.log("Consumer IDs:", consumerIds);

  // Fetch user data for all consumer IDs
  const users = useUser(consumerIds); // Assuming `useUser` supports bulk IDs
  console.log("Users:", users);

  // Combine orders with corresponding user data
  const ordersWithUserData = orders.map((order) => {
    // Ensure that users are accessed from the 'data' property
    const user =
      users.find((u) => u.data?.id === order.consumerId)?.data ||
      ({} as BaseUser);
    return {
      ...order,
      user,
    };
  });

  console.log("Orders with User Data:", ordersWithUserData);

  interface OrdersWithUserData {
    orderItems: BaseOrderItem[]; // Assuming orderItems uses BaseOrderItem[]
    supermarketOrders: BaseSupermarketOrder[]; // Using BaseSupermarketOrder
    opportunity: BaseOpportunity[]; // Using BaseOpportunity
    id: number;
    consumerId: number;
    shippingMethod: string;
    shippingAddress: string;
    deliveryFee: number;
    orderPlacedOn: DateTime; // Using your DateTime type
    status: string; // Assuming status is a simple string, as it matches OrderStatus enum
    user: BaseUser; // Using BaseUser for user data
  }

  
  const selectedOrderSMIds=selectedOrder?.supermarketOrders.map((order)=>order.supermarketId) || [];
  const supermarketDetails=useSupermarket(selectedOrderSMIds);


  return (
    <>
      <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
        <Flex w="full" gap={10}>
          <Box p={5} shadow="md" borderWidth="1px" w="60%" borderRadius={15}>
            <Heading size={"md"}>Orders by Supermarkets</Heading>
            <Box mt={5} w="80%">
              <PieChart
                chartData={earnings}
                labels={names}
                textPosition="right"
              />
            </Box>

            {/* <PieChart chartData={earnings} labels={names} /> */}
          </Box>

          {/* ------- Number of items Card ------- */}
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            w="40%"
            borderRadius={15}
            display="flex"
            flexDirection="column"
          >
            <Heading size="md">Top Items Sold</Heading>
            <VStack mt={5} flex="1" spacing={4}>
              {productDetails.slice(0, 3).map((company, index) => (
                <HStack
                  key={index}
                  w="full"
                  px="1vw"
                  h="10vh"
                  rounded={10}
                  borderWidth="1px"
                  borderColor="background"
                  shadow="md"
                >
                  <Image
                    src={company?.imageUrl}
                    alt="Product Image"
                    boxSize="40px"
                    objectFit="cover"
                  />
                  <Text ml="0.3rem">{company?.name}</Text>
                </HStack>
              ))}
            </VStack>
            <ActionButton
              inverted={true}
              className="!w-full mt-5"
              onClick={scrollToBox}
            >
              View All
            </ActionButton>
          </Box>
        </Flex>

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          w="full"
          borderRadius={15}
          ref={orderBoxRef}
        >
          <Flex justifyContent="space-between" px={20} py={10}>
            <Heading as="h3" size="md">
              Order Details
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
            </Flex>
          </Flex>

          <TableContainer
            width={{ base: "100%", lg: "90%" }}
            ml={{ base: "0%", lg: "5%" }}
          >
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Customer</Th>
                  <Th>Order ID</Th>
                  <Th>Date</Th>
                  <Th>Status</Th>
                  <Th>Price</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {ordersWithUserData
                  .slice(0, visibleRows)
                  .map((order, index) => (
                    <Tr key={index}>
                      <Td>
                        <HStack>
                          <Image
                            src="https://via.placeholder.com/150"
                            alt="Product Image"
                            boxSize="50px"
                            objectFit="cover"
                            borderRadius="50%"
                            mr={4}
                          />
                          <Text>{order.user?.name}</Text>
                        </HStack>
                      </Td>
                      <Td>{"#" + order.id}</Td>
                      <Td>
                        {new Date(
                          order.orderPlacedOn.year,
                          order.orderPlacedOn.month - 1, // Months are 0-based in JavaScript
                          order.orderPlacedOn.day,
                          order.orderPlacedOn.hour,
                          order.orderPlacedOn.minute,
                          Math.floor(order.orderPlacedOn.second) // Only the integer part of the seconds
                        ).toLocaleDateString()}
                      </Td>
                      <Td>
                        <HStack>
                          {order.status === "Processing" ? (
                            <>
                              <Circle bg="orange" size="10px"></Circle>
                              <Text>Processing</Text>
                            </>
                          ) : order.status === "ToPay" ? (
                            <>
                              <Circle bg="yellow" size="10px"></Circle>
                              <Text>ToPay</Text>
                            </>
                          ) : order.status === "Prepared" ? (
                            <>
                              <Circle bg="green" size="10px"></Circle>
                              <Text>Prepared</Text>
                            </>
                          ) : (
                            <Circle bg="red" size="10px"></Circle> // Error or unspecified status
                          )}
                        </HStack>
                      </Td>

                      <Td>
                        {" "}
                        {(
                          order.orderItems.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          ) + order.deliveryFee
                        ).toFixed(2) + " LKR"}
                      </Td>
                      <Td>
                        <Button
                          bg="primary"
                          size="sm"
                          onClick={() => handleViewMore(order)}
                        >
                          View More
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
            {ordersWithUserData && ordersWithUserData.length > visibleRows && (
              <Button
                size="md"
                mt={8}
                fontWeight="bold"
                bg="background"
                onClick={handleClickMore}
              >
                More
              </Button>
            )}
          </TableContainer>
        </Box>
      </VStack>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box borderBottomWidth={"1px"} p={2}>
              <VStack>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="50%"
                  mr={4}
                />
                <Text fontSize={"xl"}>{selectedOrder?.user.name}</Text>
                <Text fontSize={"sm"}>{selectedOrder?.user.email}</Text>
              </VStack>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center borderBottomWidth={"1px"} pb={6}>
              <Flex>
                <Box mr={1}>
                  <VStack>
                    <Box mb={8}>
                      <Icon as={MdPayment} boxSize={5} color={"primary"} />
                    </Box>
                    <Box mb={7}>
                      <Icon
                        as={GiStorkDelivery}
                        boxSize={5}
                        color={"primary"}
                      />
                    </Box>
                  </VStack>
                </Box>
                <Box ml={1}>
                  <VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Price
                      </Text>
                      <Text fontSize="sm">
                        {(
                          (selectedOrder?.orderItems?.reduce(
                            (sum, item) =>
                              sum + (item.price || 0) * (item.quantity || 0),
                            0
                          ) || 0) + (selectedOrder?.deliveryFee || 0)
                        ).toFixed(2) + " LKR"}
                      </Text>
                    </VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        Delivery Type
                      </Text>
                      <Text fontSize={"sm"}>
                        {selectedOrder?.shippingMethod}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>

                <Box mr={1} ml={6}>
                  <VStack>
                    <Box mb={7}>
                      <Icon as={FaShoppingBag} boxSize={5} color={"primary"} />
                    </Box>
                  </VStack>
                </Box>
                <Box ml={1}>
                  <VStack>
                    <VStack>
                      <Text fontSize={"lg"} fontWeight={"500"}>
                        No of Items
                      </Text>
                      <Text fontSize={"sm"}>
                        {selectedOrder?.orderItems.length}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </Flex>
            </Center>

            <Box mt={1}>
              <Heading fontSize={"md"} color="primary" fontWeight={"500"}>
                Super markets
              </Heading>
              <HStack>
              {supermarketDetails.map((query, index) => (
                query.data && (
                  <><Image
                    key={index}
                    src={query.data.logo}
                    alt="Product Image"
                    boxSize="30px"
                    objectFit="cover"
                    m={2}
                  />
                  <Heading fontSize={"md"} fontWeight={"500"}>
                    {query.data.name}
                  </Heading>
                  </>)
              ))}
              </HStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button bg="primary" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminOrders;
