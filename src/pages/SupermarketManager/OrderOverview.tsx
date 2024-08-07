import { Order } from "@/hooks/useOrder";
import APIClient from "@/services/api-client";
import useAuthStore from "@/state-management/auth/store";
import { getDateTime } from "@/utils/Time";
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

const OrderOverview = ({ order }: Props) => {
  const user = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const openPopUp = () => {
    onOpen();
  };

  let totalAmount: number = order.orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const supermarketOrder = order.supermarketOrders?.find(
    (i) => i.supermarketId === user?.supermarketId
  );

  console.log(supermarketOrder);

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

    console.log("Order Ready");
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
                <Text>: {getDateTime(order.orderPlacedOn)}</Text>
                <Text>Order Total</Text>
                <Text>: {totalAmount} LKR</Text>
              </Grid>
            </Box>
            <Box
              flex="1"
              p={4}
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
              bg="red"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Driver Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={2}>
                <Text>Driver name</Text>
                <Text>: Nethmi Kaveesha</Text>
                <Text>Contact Number</Text>
                <Text>: 071122244</Text>
                <Text>Vehicle Type</Text>
                <Text>: Bike</Text>
                <Text>Vehicle Number</Text>
                <Text>: BAY 5050</Text>
              </Grid>
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
