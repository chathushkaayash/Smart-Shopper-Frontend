import useOrder from "@/services/Orders/useOrder";
import OrderDetails from "./OrderDetails";
import OrderItems from "./OrderItems";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CustomerViewOrder = () => {
  const { id } = useParams();
  const order = useOrder(id ? [Number(id)] : [])[0];

  if (!id || !order.data) return null;

  return (
    <Box bg="background" h="100%" pt={7} pb={10} pl={20} pr={20}>
      <OrderDetails order={order.data} />
      <OrderItems order={order.data} />
    </Box>
  );
};

export default CustomerViewOrder;
