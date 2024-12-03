import { getPrice } from "@/lib/utils";
import useDriver from "@/services/Driver/useDriver";
import { Order } from "@/services/types";
import useAuthStore from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";
import { Box, Flex, Text, Grid } from "@chakra-ui/react";
interface OrderReceiptPopupProps {
  status : string;
  orderDetails: Order;
}

const OrderReceiptPopup = ({status, orderDetails}: OrderReceiptPopupProps) => {
  const driverId = orderDetails.opportunity[0]?.driverId;
  const user = useAuthStore((state) => state.user);
  const driver = useDriver([driverId])[0].data; 
  console.log(user);
  return (
    <Flex direction="column" fontWeight="md">
      <Box
        flex="1"
        p={4}
        pl={6}
        mb={4}
        borderWidth="1px"
        borderRadius="15"
        borderColor="gray.300"
      >
        <Text fontSize="lg"  fontWeight="semibold" color="black" mb={2}>
          Order Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Text>Order ID</Text>
          <Text>: {orderDetails?.id}</Text>
          <Text>Order Placed on</Text>
          <Text>: {DateTime.toString(orderDetails?.orderPlacedOn)}</Text>
          <Text>Payment method</Text>
          <Text>: {orderDetails?.shippingMethod}</Text>
          <Text>Order Total</Text>
          <Text>: {getPrice(orderDetails?.subTotal)} LKR</Text>
          <Text>Delivery Cost</Text>
          <Text>: {getPrice(orderDetails?.deliveryFee)} LKR</Text>
        </Grid>
      </Box>
      <Box
        flex="1"
        p={4}
        pl={6}
        mb={4}
        borderWidth="1px"
        borderRadius="15"
        borderColor="gray.300"
      >
        <Text fontSize="lg"  fontWeight="semibold" color="black" mb={2}>
          Shipping Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Text>Shipping Address</Text>
          <Text>: {orderDetails?.shippingAddress}</Text>
          <Text>Contact Number</Text>
          <Text>: {user?.number}</Text>
          <Text>Name</Text>
          <Text>: {user?.name}</Text>
        </Grid>
      </Box>
      {!["ToPay", "Processing", "Prepared"].includes(status) && (
        <Box
          flex="1"
          p={4}
          pl={6}
          mb={4}
          borderWidth="1px"
          borderRadius="15"
          borderColor="gray.300"
        >
          <Text fontSize="lg" fontWeight="semibold" color="black" mb={2}>
            Driver Details
          </Text>
          <Grid templateColumns="1fr 2fr" gap={2}>
            <Text>Name</Text>
            <Text>: {driver?.user?.name}</Text>
            <Text>Driver ID</Text>
            <Text>: {driver?.id}</Text>
            <Text>Payment method</Text>
            <Text>: Credit/Debit Card</Text>
            <Text>Company Name</Text>
            <Text>: {driver?.courierCompany}</Text>
          </Grid>
        </Box>
    )}
    </Flex>
  );
};

export default OrderReceiptPopup;
