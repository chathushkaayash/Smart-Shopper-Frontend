
import useOpportunity from "@/hooks/useOpportunity";
import APIClient from "@/services/api-client";
import useDriver from "@/services/Driver/useDriver";
import { Order } from "@/services/types";
import useAuthStore from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface Props {
  order: Order;
}
interface Opportunity{
  
  id: number;
  driverId: number;


}

const OrderOverview = ({ order }: Props) => {
  console.log(order , "order");
  // const [driverId , setDriverId] = React.useState<number>(0);
  const opportunityClient = new APIClient<Opportunity>("opportunity_by_order_id");

  const opportunityId = order?.opportunity?.[0]?.id || 0;
  const { data: opportunity } = useOpportunity(opportunityId);
  const driverId = opportunity?.driverId || 0;
  const { data: driver } = useDriver(driverId ? [driverId] : [])[0] || {};

  console.log("Driver:", driver);




  opportunityClient.get(order.id)
  .then((data) => {
    console.log("Opportunity fetched", data);

  })
  .catch((error) => {
    console.error("Error fetching opportunity:", error);
  });


  const user = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const openPopUp = () => {
    onOpen();
  };

  const orderItems = order.orderItems.filter(
    (item) => item.supermarketId === user?.supermarketId
  );

  let totalAmount: number = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  totalAmount = Math.round(totalAmount * 100) / 100;

  const supermarketOrder = order.supermarketOrders?.find(
    (i) => i.supermarketId === user?.supermarketId
  );



  const handleSubmit = () => {
    const apiClient = new APIClient<{ supermarketOrderId: number }>(
      "/supermarket_order_ready"
    );

    apiClient
      .create({ supermarketOrderId: supermarketOrder?.id || -1 })
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["order", order.id] });
        navigate("/orders");
      });

    onClose();
  };

  return (
    <>
      <Box width="100%" mb={10}>
        <Box
          bg="white"
          boxShadow="md"
          borderRadius="24"
          px="3vw"
          py="5vh"
          width="100%"
          maxWidth="1200px"
          mx="auto"
        >
          <Flex justify="space-between" align="center" flexWrap="wrap" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Order ID: #{order.id}
            </Text>
            <Flex align="center" gap={4}>
              <Button
                size="md"
                color={
                  supermarketOrder?.status === "Processing"
                    ? "white"
                    : "primary"
                }
                bg={
                  supermarketOrder?.status === "Processing"
                    ? "primary"
                    : "white"
                }
                borderWidth={2}
                borderColor="primary"
                onClick={() => {
                  if (supermarketOrder?.status === "Processing") {
                    openPopUp();
                  }
                }}
                borderRadius={10}
                _hover={{ bg: "white", color: "primary" }}
                _active={{
                  bg: "primary",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                {supermarketOrder?.status === "Processing"
                  ? "Order Ready"
                  : "Processed"}
              </Button>
            </Flex>
          </Flex>

          <Divider my={4} />

          <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={4}>
            <Box
              flex="1"
              p={4}
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Order Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={2}>
                <Text>Order Placed on</Text>
                <Text>: {DateTime.toString(order.orderPlacedOn)}</Text>
                <Text>Order Total</Text>
                <Text>: {totalAmount?.toFixed(2)} LKR</Text>
          <Text>Payment Method</Text>
          <Text>: {order.shippingMethod}</Text>
          <Text>Delivery Cost</Text>
          <Text>: {order.deliveryFee?.toFixed(2) || "0.00"} LKR</Text>
          <Text>Shipping Address</Text>
          <Text>: {order.shippingAddress}</Text>
                
                
              </Grid>
            </Box>
            <Box
              flex="1"
              p={4}
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
              // bg="red"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Driver Details
              </Text>
              {driver ? (
                <Grid templateColumns="1fr 2fr" gap={2}>
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
              ) : (
                <Text>No Driver Assigned</Text>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Track Order Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify={"space-between"}>
              <Text fontSize="xl" mb={4} textAlign="center" fontWeight={600}>
                Are you Sure ?
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="center" gap={3}>
              <Button bg={"primary"} onClick={handleSubmit}>
                Yes
              </Button>
              <Button onClick={onClose}>No</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default OrderOverview;
