import useDriver from "@/services/Driver/useDriver";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { Order } from "@/services/types";
import { FaTruck } from "react-icons/fa";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Center,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";

interface OrderItem {
  order: Order;
}

const OrderTrackingPopup = ({order}:OrderItem ) => {
  const primaryColor = "orange.500";
  const supermarketOrders = order.supermarketOrders;
  const supermarketIds = supermarketOrders.map((order) => order.supermarketId);
  const supermarket = useSupermarket(supermarketIds);
  const driver = order.opportunity[0].driverId;
  const driverName = useDriver([driver])[0].data;
  console.log(order);

  const getTrackingSteps = () => {
    const steps = [
      {
      status: "Order Placed",
      location: "Your order has been placed",
      active: ["ToPay", "Processing", "Prepared", "Picked", "Completed"].includes(order.status)
      },
      {
      status: "Ready in Supermarkets",
      location: (
        <>
          {supermarket.map((item) => (
            <Text key={item.data?.id}>{item.data?.name}, {item.data?.city}</Text>
          ))}
        </>
      ),
      active: ["Prepared", "Picked", "Completed"].includes(order.status)
      },
      {
      status: "Picked by Driver",
      location: (
        <>
          Your order is on the way {driverName?.user?.name}
          <br />
          {driverName?.user?.number}
        </>
      ),
      active: ["Picked", "Completed"].includes(order.status)
      },
      {
      status: "Way to home",
      location: `Address: ${order.shippingAddress}`,
      active: ["Picked", "Completed"].includes(order.status)
      },
      {
      status: "Completed",
      location: "Order has been delivered",
      active: ["Completed"].includes(order.status)
      }
    ];

    return steps;
  };


  return (
    <Flex
      mt={5}
      direction="column"
      alignItems="center"
      padding={5}
      bg="white"
      borderRadius="24px"
      margin="0"
      width="100%"
    >
      <Box
        width="100%"
        mb={4}
        p={4}
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="15px"
      >
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Driver Tracking
        </Text>
        <VStack align="start" spacing={4} position="relative">
          <Box
            position="absolute"
            top="15px"
            left="27px"
            bottom="20px"
            width="3px"
            bg={primaryColor}
          ></Box>
          {getTrackingSteps().map((item, index) => (
            <HStack
              key={index}
              width="100%"
              p={2}
              borderRadius="12px"
              align="center"
              justifyContent="space-between"
              position="relative"
            >
              <HStack spacing={4} align="center">
                <Center
                  width="45px"
                  height="45px"
                  borderRadius="full"
                  borderWidth={item.active ? "2px" : "1px"}
                  fontWeight="bold"
                  position="relative"
                  zIndex={1}
                  bg={item.active ? primaryColor : "white"}
                  borderColor={item.active ? primaryColor : "gray.300"}
                  color={item.active ? "white" : primaryColor}
                >
                  <Icon as={FaTruck} boxSize={5} />
                </Center>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold">{item.status}</Text>
                  <Text fontSize="10px" fontWeight="regular">
                    {Array.isArray(item.location) ? item.location.join(", ") : item.location}
                  </Text>
                </VStack>
              </HStack>
            </HStack>
          ))}
        </VStack>
      </Box>

      <Box
        width="100%"
        mb={4}
        p={4}
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius="15px"
      >
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Supermarket Order Packing
        </Text>
        <VStack align="start" spacing={4}>
          {supermarket.map((item, index) => (
            <HStack
              key={index}
              width="100%"
              p={2}
              borderWidth="1px"
              borderRadius="12px"
              align="center"
              justify="space-between"
            >
              <HStack spacing={2} align="center">
                <Center width="70px" height="70px" borderRadius="full">
                  <Image src={item.data?.logo} />
                </Center>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{item.data?.name}</Text>
                  <Text>{item.data?.address}</Text>
                </VStack>
              </HStack>
              <Button
                size="sm"
                bg={supermarketOrders[index].status === "Ready" ? "green" : "purple"}
                color="white"
                _hover={{ bg: supermarketOrders[index].status === "Ready" ? "green" : "purple" }}
                _active={{ bg: supermarketOrders[index].status === "Ready" ? "green" : "purple" }}
                borderRadius="full"
                px={5}
              >
                {supermarketOrders[index].status === "Ready" ? "Prepared" : "Processing"}
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default OrderTrackingPopup;
