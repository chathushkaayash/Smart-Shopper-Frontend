import { 
  Box,
  Grid,
  Spinner,
  Text
} from '@chakra-ui/react';
import React from 'react';
import useOrder from "@/hooks/useOrder";
import { getDateTime } from "@/utils/Time";
import TextButton from "@/components/Buttons/TextButton";

import { useNavigate } from 'react-router-dom';

interface props {
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
}

const OrderDetails = ({ id }: props) => {
  const { data: order, isLoading, isError } = useOrder(id);
  

//  onclick navigate to the order page
  const navigate = useNavigate();
  const btn = () => {
    navigate(`/orders/${id}`);
  };

  
  if (isLoading) return <><Spinner size='xl' /></>;
  if (isError ) return <p>Error loading order details.</p>;
  if (!order) return <p>No order data found.</p>;

  // Calculate the order total from order items
  const orderTotal = order.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
                  <Text>: {getDateTime(order.orderPlacedOn)}</Text>
                  <Text>Payment Method</Text>
                  <Text>: {order.shippingMethod}</Text>
                  <Text>Order Total</Text>
                  <Text>: {orderTotal.toFixed(2)}</Text>
                  <Text>Delivery Cost</Text>
                  <Text>: XXXXXX</Text> 
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
                  <Text>: Nethmi Kaveesha</Text> {/* This should ideally come from the order data */}
                  <Text>Contact Number</Text>
                  <Text>: 071122244</Text> {/* This should ideally come from the order data */}
                  <Text>Vehicle Type</Text>
                  <Text>: Bike</Text> {/* This should ideally come from the order data */}
                  <Text>Vehicle Number</Text>
                  <Text>: BAY 5050</Text> {/* This should ideally come from the order data */}
              </Grid>
          </Box>
          <TextButton
              text="View Order"
              hoverColor="primary"
              onClick={() => btn()}
            />
      </Box>
  );
};

export default OrderDetails;
