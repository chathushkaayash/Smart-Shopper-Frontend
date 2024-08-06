import OrderItems from "@/components/SuperMarketManager/OrderItems";
import OrderOverView from "@/components/SuperMarketManager/OrderOverview";
import { Box } from "@chakra-ui/react";

const OrderList = () => {
  
    return (
        <>
            <Box
      bg="background"
      h="100%"
      pt={7}
      pb={10}
      pl={20}
      pr={20}
    >
      <OrderOverView status="completed"/>
      <OrderItems  />
    </Box>
        </>
    );
};

export default OrderList;