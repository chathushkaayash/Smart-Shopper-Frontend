import useOrder from "@/hooks/useOrder";
import OrderItemsTable from "@/pages/SupermarketManager/OrderItemsTable";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import OrderOverview from "./OrderOverview";

const SupermarketViewOrder = () => {
  const { id } = useParams();
  const order = useOrder(Number(id));

  if (order.isLoading) return <p>Loading...</p>;
  if (order.isError) return <p>Error</p>;

  return (
    <>
      <Box bg="background" h="100%" w="100%" pt={7} pb={10} pl={20} pr={20}>
        <OrderOverview order={order.data} />
        <OrderItemsTable order={order.data} />
      </Box>
    </>
  );
};

export default SupermarketViewOrder;
