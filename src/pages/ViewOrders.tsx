import OrderId from "../components/ViewOrders/OrderId";
import OrderItems from "../components/ViewOrders/OrderItems";
import { Box } from "@chakra-ui/react";

const ViewOrders = () => {
  return (
    <Box
      bg="background"
      h="100%"
      pt={7}
      pb={10}
      pl={20}
      pr={20}
    >
      <OrderId status="completed"/>
      <OrderItems />
    </Box>
  );
};

export default ViewOrders;
