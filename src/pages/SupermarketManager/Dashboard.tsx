import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoBagCheckSharp } from "react-icons/io5";

import OrderTable from "@/components/OrderTable";
import DashboardCard from "./DashboardCard";

const AdminMain = () => {
  

  return (
    <Flex w="full">
      <Box w="full">
        <VStack gap="8vh" my="5vh" px="2vw" w="full">
          <HStack justifyContent="space-between" w="full" gap={6}>
            
            <DashboardCard title="Total Orders" content="20" icon={<FaShoppingCart/>} background="blue.100" />
            <DashboardCard title="New Orders" content="17" icon={<BiSolidShoppingBag/>} background="green.100"/>
            <DashboardCard title="Completed Orders" content="3" icon={<IoBagCheckSharp/>} background="red.100"/>
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
