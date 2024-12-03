import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import OrderTable from "@/components/OrderTable";
import DashboardCard from "./DashboardCard";

import { useSupermarketOrderStats } from "@/services/Supermarket/useSupermarketOrderStat";

const AdminMain = () => {
  const { data, error} = useSupermarketOrderStats(1);
  console


  

  // Handling the error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure the values from the data object (replace these with actual values from the API response)
  const { totOrders, totOrdersPaid, totOrdersMonth, Prepared, Processing } = data || {};

  return (
    <Flex w="full">
      <Box w="full">
        <VStack gap="8vh" my="5vh" px="2vw" w="full">
          <HStack justifyContent="space-between" w="full" gap={6}>
            <DashboardCard
              title="Total Orders"
              content={totOrders } // Dynamically use data
              icon={<FaShoppingCart />}
              background="blue.100"
            />
            <DashboardCard
              title="Prepared Orders"
              content={Prepared } // Dynamically use data
              icon={<BiSolidShoppingBag />}
              background="green.100"
            />
            <DashboardCard
              title="Completed Orders"
              content={totOrdersPaid } // Dynamically use data
              icon={<IoBagCheckSharp />}
              background="red.100"
            />
          </HStack>

          <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
            <Flex justifyContent="space-between">
              <Heading as="h3" size="lg" mb={4}>
                Orders
              </Heading>
            </Flex>
            <OrderTable />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminMain;
