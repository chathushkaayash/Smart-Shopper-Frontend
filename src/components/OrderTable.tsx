import useOrders from "@/hooks/useOrders";
import { getDateTime } from "@/utils/Time";
import {
  Badge,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OrderTable = () => {
  const orders = useOrders();

  return (
    <>
      <Box overflowX="auto" shadow="md" rounded="lg" border={1}>
        <Table
          variant="simple"
          colorScheme="gray"
          width="100%"
          size="sm"
          textAlign="left"
        >
          <Thead
            fontSize="xs"
            textTransform="uppercase"
            bg="gray.50"
            color="gray.700"
          >
            <Tr>
              <Th px={6} py={3}>
                Order ID
              </Th>
              <Th px={6} py={3}>
                Order Placed On
              </Th>
              <Th px={6} py={3}>
                Status
              </Th>
              <Th px={6} py={3}>
                Collection Method
              </Th>
              <Th px={6} py={3}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.data?.results.map((order, index) => (
              <Tr
                key={index}
                bg="white"
                borderBottom="1px"
                borderColor="gray.200"
                _hover={{ bg: "gray.50" }}
              >
                <Td px={6} py={4}>
                  #{order.id}
                </Td>
                <Td px={6} py={4}>
                  {getDateTime(order.orderPlacedOn)}
                </Td>
                <Td px={6} py={4}>
                  {order.status}
                </Td>
                <Td px={6} py={4}>
                  {order.shippingMethod}
                </Td>
                <Td px={6} py={4}>
                  <Link to={"/orders/" + order.id}>
                    <Badge
                      bg="primary"
                      textColor="white"
                      p={1}
                      px={4}
                      borderRadius="20"
                    >
                      <Text>View Order</Text>
                    </Badge>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default OrderTable;
