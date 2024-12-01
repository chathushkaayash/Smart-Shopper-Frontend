import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
  Badge,
  IconButton,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useOrders from "@/services/Orders/useOrders";
import { Order } from "@/services/types";
import { DateTime } from "@/utils/Time";

const statusColor: Record<Order["status"], string> = {
  ToPay: "red",
  Processing: "purple",
  Prepared: "green",
  Cancelled: "yellow",
  Completed: "blue",
};

const ConsumerOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("View All");

  const { data, isLoading, isError, error } = useOrders();
  if (isLoading) {
    return <Box className="p-5 h-screen bg-gray-100">Loading orders...</Box>;
  }

  if (isError) {
    return (
      <Box className="p-5 h-screen bg-gray-100">
        Error fetching orders:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </Box>
    );
  }

  const filteredOrders = () => {
    switch (activeTab) {
      case "To Pay":
        return data?.results.filter((order) => order.status === "ToPay") || [];
      case "Processed":
        return data?.results.filter((order) => order.status !== "ToPay") || [];
      default:
        return data?.results || [];
    }
  };

  return (
    <Box
      className="p-5 h-screen bg-gray-100"
      bg="background"
      pt={7}
      pb={10}
      pl={20}
      pr={20}
    >
      <Box className="p-5 h-screen bg-gray-100" bg="white" borderRadius={10}>
        <h1
          className="text-2xl mb-4 font-semibold"
          style={{ color: "primary" }}
        >
          Order Details
        </h1>
        <Tabs
          variant="enclosed"
          onChange={(index) =>
            setActiveTab(["View All", "To Pay", "Processed"][index])
          }
        >
          <TabList>
            <Tab>View All</Tab>
            <Tab>To Pay</Tab>
            <Tab>Processed</Tab>
          </TabList>
        </Tabs>
        <Box className="overflow-auto rounded-xl shadow-md hidden md:block">
          <Table className="w-full">
            <Thead className="bg-gray-50 border-b-2 border-gray-300">
              <Tr>
                {[
                  "Order",
                  "Date",
                  "Status",
                  "Collector",
                  "Total Cost",
                  "Actions",
                ].map((header) => (
                  <Th
                    key={header}
                    className="p-3 text-sm font-semibold tracking-wide text-center"
                    style={{ width: "16.666%" }}
                  >
                    {header}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody className="divide-y divide-gray-100">
              {filteredOrders().map((order, index) => (
                <Tr
                  key={order.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <Link
                      href="#"
                      className="font-bold text-blue-500 hover:underline"
                    >
                      #{order.id}
                    </Link>
                  </Td>
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {DateTime.toString(order.orderPlacedOn)}
                  </Td>
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                    <Badge
                      as="div"
                      colorScheme={statusColor[order.status]}
                      className="p-1.5 !px-2 text-xs font-medium uppercase tracking-wider !rounded-[5px]"
                    >
                      {order.status}
                    </Badge>
                  </Td>
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {order.shippingMethod}
                  </Td>
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    RS {order.totalCost}
                  </Td>
                  <Td className="p-3 text-sm text-gray-700 whitespace-nowrap flex">
                    <IconButton
                      icon={<ViewIcon />}
                      aria-label="View Order"
                      variant="outline"
                      colorScheme="blue"
                      onClick={() => navigate("/orders/" + order.id)}
                      mr={2}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      aria-label="Delete Order"
                      variant="outline"
                      colorScheme="red"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            {filteredOrders().length === 0 && (
              <Tbody>
                <Tr>
                  <Td colSpan={6} className="p-3 text-sm text-gray-700 ">
                    No orders found
                  </Td>
                </Tr>
              </Tbody>
            )}
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsumerOrders;
