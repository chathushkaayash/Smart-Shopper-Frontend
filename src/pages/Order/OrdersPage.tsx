import OrderTable from "@/components/OrderTable";
import useAuthStore from "@/state-management/auth/store";
import { Box, Text } from "@chakra-ui/react";
import ConsumerOrders from "../Consumer/ConsumerOrders";

const OrdersPage = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role === "Consumer") return <ConsumerOrders />;

  if (user?.role === "Supermarket Manager")
    return (
      <>
        <Box
          p={8}
          borderRadius={15}
          shadow="lg"
          border={"1px solid"}
          borderColor={"gray.200"}
          m={5}
          minH={"80vh"}
        >
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Orders
          </Text>
          <OrderTable />
        </Box>
      </>
    );
};

export default OrdersPage;
