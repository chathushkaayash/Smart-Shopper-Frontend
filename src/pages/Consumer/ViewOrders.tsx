import useOrder from "@/hooks/useOrder";
import OrderId from "../../components/ViewOrders/OrderId";
import OrderItems from "../../components/ViewOrders/OrderItems";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ViewOrders = () => {
  const { id } = useParams();
  if (!id) return null;

  const order = useOrder(Number(id));

  if (!order.data) return null;

  return (
    <Box bg="background" h="100%" pt={7} pb={10} pl={20} pr={20}>
      <OrderId order={order.data} />
      <OrderItems order={order.data} />
    </Box>
  );
};

export default ViewOrders;
