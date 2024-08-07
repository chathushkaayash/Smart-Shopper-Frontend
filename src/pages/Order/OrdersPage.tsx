import OrderTable from "@/components/OrderTable";
import useAuthStore from "@/state-management/auth/store";
import { Box, Text } from "@chakra-ui/react";

const OrdersPage = () => {
  const user = useAuthStore((state) => state.user);

  if (user?.role === "supermarket")
    return (
      <>
        <Box
          p={3}
          bg={"white"}
          borderRadius={3}
          overflow="hidden"
          boxShadow="md"
          m={5}
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
