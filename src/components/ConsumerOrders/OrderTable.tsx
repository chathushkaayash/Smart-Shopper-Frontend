import React, { useState } from "react";
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
  Button,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";

interface Order {
  id: string;
  details: string;
  status: "Active" | "Ready" | "Completed" | "Cancelled";
  date: string;
  deliveryPerson: string;
  collector: string;
  total: string;
}

const orders: Order[] = [
    {
        id: "10001",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Active",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "customer",
        total: "$200.00",
      },
      {
        id: "10002",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Ready",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "delivery person",
        total: "$200.00",
      },
      {
        id: "10003",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Completed",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "delivery person",
        total: "$200.00",
      },
      {
        id: "10003",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Cancelled",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "customer",
        total: "$200.00",
      },
      {
        id: "10003",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Cancelled",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "customer",
        total: "$200.00",
      },
      {
        id: "10003",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Cancelled",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "customer",
        total: "$200.00",
      },
      {
        id: "10003",
        details: "Kring New Fit office chair, mesh + PU, black",
        status: "Cancelled",
        date: "16/10/2021",
        deliveryPerson: "John Doe",
        collector: "customer",
        total: "$200.00",
      },
];

const statusColor: Record<Order["status"], string> = {
  Active: "active",
  Ready: "ready",
  Completed: "green",
  Cancelled: "red",
};

const OrderTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;


  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box className="overflow-auto rounded-xl shadow-md hidden md:block">
        <Table className="w-full">
          <Thead className="bg-gray-50 border-b-2 border-gray-300">
            <Tr>
              <Th className="w-20 p-3 text-sm font-semibold tracking-wide">
                Order
              </Th>
              <Th className="w-24 p-3 text-sm font-semibold tracking-wide">
                Date
              </Th>
              <Th className="w-24 p-3 text-sm font-semibold tracking-wide !text-center">
                Status
              </Th>
              <Th className="w-24 p-3 text-sm font-semibold tracking-wide">
                Delivery Person
              </Th>
              <Th className="w-24 p-3 text-sm font-semibold tracking-wide">
                Collector
              </Th>
              <Th className="w-32 p-3 text-sm font-semibold tracking-wide">
                Total Cost
              </Th>
              <Th className="w-32 p-3 text-sm font-semibold tracking-wide">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody className="divide-y divide-gray-100">
            {orders.map((order, index) => (
              <Tr
                key={order.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Link
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    {order.id}
                  </Link>
                </Td>
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {order.date}
                </Td>
                <Td className=" text-sm text-gray-700 whitespace-nowrap !text-center">
                  <Badge
                    as="div"
                    colorScheme={statusColor[order.status]}
                    className=" p-1.5 !px-2 text-xs font-medium uppercase tracking-wider !rounded-[5px] "
                  >
                    {order.status}
                  </Badge>
                </Td>
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {order.deliveryPerson}
                </Td>
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {order.collector}
                </Td>
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {order.total}
                </Td>
                <Td className="p-3 text-sm text-gray-700 whitespace-nowrap flex">
                  <IconButton
                    icon={<ViewIcon />}
                    aria-label="View Order"
                    variant="outline"
                    colorScheme="blue"
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
        </Table>
      </Box>
      <Flex justifyContent="space-between" mt={4} className="w-full">
        <Button variant="outline" colorScheme="blue">
          Previous
        </Button>
        <Box>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
              mx={1}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
        <Button variant="outline" colorScheme="blue">
          Next
        </Button>
      </Flex>
    </>
  );
};

export default OrderTable;