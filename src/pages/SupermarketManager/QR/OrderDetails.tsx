import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import useOrder from "@/services/Orders/useOrder";
import useOpportunity from "@/hooks/useOpportunity";
import useDriver from "@/services/Driver/useDriver";
import TextButton from "@/components/Buttons/TextButton";

import { useNavigate } from "react-router-dom";
import { DateTime } from "@/utils/Time";

interface Props {
  id: number;
}

export interface OrderItem {
  id: number;
  supermarketId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface SupermarketOrder {
  id: number;
  status: string;
  qrCode: string;
  _orderId: number;
  supermarketId: number;
}

export interface Order {
  id: number;
  consumerId: number;
  status: string;
  shippingAddress: string;
  shippingMethod: string;
  location: string;
  orderItems: OrderItem[];
  supermarketOrders: SupermarketOrder[];
  orderPlacedOn: Date;
  deliveryFee?: number;
}

const OrderDetails = ({ id }: Props) => {
  const { data: order, isLoading, isError } = useOrder([id])[0] || {};
  const opportunityId = order?.opportunity?.[0]?.id || 0;
  const { data: opportunity } = useOpportunity(opportunityId);
  const driverId = opportunity?.driverId || 0;
  const { data: driver } = useDriver(driverId ? [driverId] : [])[0] || {};

  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (isError) {
    return <Text>Error loading order details.</Text>;
  }

  if (!order) {
    return <Text>No order data found.</Text>;
  }

  // Calculate the order total from order items
  const orderTotal = order.orderItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <Box
        flex="1"
        p={4}
        mt={3}
        borderWidth="1px"
        borderRadius="10"
        borderColor="gray.200"
      >
        <Grid templateColumns="1fr 2fr" gap={1}>
          <Text>Order Placed On</Text>
          <Text>: {DateTime.toString(order.orderPlacedOn)}</Text>
          <Text>Payment Method</Text>
          <Text>: {order.shippingMethod}</Text>
          <Text>Order Total</Text>
          <Text>: {orderTotal?.toFixed(2) || "0.00"}</Text>
          <Text>Delivery Cost</Text>
          <Text>: {order.deliveryFee || "0.00"}</Text>
          <Text>Shipping Address</Text>
          <Text>: {order.shippingAddress}</Text>
        </Grid>
      </Box>

      <Box
        flex="1"
        p={4}
        mt={3}
        borderWidth="1px"
        borderRadius="10"
        borderColor="gray.200"
      >
        <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
          Driver Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={1}>
          <Text>Driver Name</Text>
          <Text>: {driver?.user?.name || "Not Available"}</Text>
          <Text>Contact Number</Text>
          <Text>: {driver?.user?.number || "Not Available"}</Text>
          <Text>Vehicle Type</Text>
          <Text>: {driver?.vehicleType || "Not Available"}</Text>
          <Text>Vehicle Number</Text>
          <Text>
            : {driver?.vehicleName || "Unknown"} {driver?.vehicleNumber || ""}
          </Text>
        </Grid>
      </Box>

      <TextButton
        text="View Order"
        hoverColor="primary"
        onClick={() => navigate(`/orders/${id}`)}
      />
    </Box>
  );
};

export default OrderDetails;
