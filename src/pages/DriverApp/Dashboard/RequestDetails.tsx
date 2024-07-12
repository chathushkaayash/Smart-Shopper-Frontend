import SubmitButton from "@/components/Buttons/SubmitButton";
import { Box, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

const RequestDetails = () => {
  const requests = [
    {
      name: "John Doe",
      location: "New York",
      nOS: 5,
      totalDistance: 100,
      tripCost: 1000,
    },
  ];

  const request = requests[0];

  const details = [
    { label: "Number of Stops", value: request.nOS },
    { label: "Total Distance", value: `${request.totalDistance} km` },
    { label: "Trip Cost", value: `Rs.${request.tripCost}` },
  ];

  const orderDetails = [
    { label: "Order Placed on", value: request.nOS },
    { label: "Customer", value: `${request.totalDistance} km` },
    { label: "Contact number", value: `${request.totalDistance} km` },
    { label: "Delivery Cost", value: `${request.totalDistance} km` },
    { label: "Pickup Location", value: `${request.totalDistance} km` },
    { label: "Delivery Location", value: `${request.totalDistance} km` },
  ];

  return (
    <VStack minH="100vh" px="8vw" pt="3vh" pb="10vh" gap="4vh">
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          shadow="xl"
          borderWidth={1}
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Opportunities
        </Text>
      </HStack>
      <Box
        shadow="xl"
        borderWidth={1}
        p={4}
        background="white"
        w="full"
        borderRadius="10"
      >
        <VStack align="start">
          <Text fontWeight="bold">{request.name}</Text>
          <HStack>
            <Icon as={FaLocationDot} color="primary" />{" "}
            <Text>{request.location}</Text>
          </HStack>
          {details.map((detail, index) => (
            <HStack key={index} w="full" align="space-between">
              <Text>{detail.label} :</Text>
              <Spacer />
              <Text>{detail.value}</Text>
            </HStack>
          ))}
          <SubmitButton>Accept</SubmitButton>
        </VStack>
        
      </Box>
      <Box
        shadow="xl"
        borderWidth={1}
        p={4}
        background="primary"
        w="full"
        borderRadius="10"
      >
        <VStack color="white">
          <Text fontWeight="bold">Order Details</Text>
          {orderDetails.map((orderDetail, index) => (
            <HStack key={index} w="full" align="space-between">
              <Text>{orderDetail.label}</Text>
              <Spacer />
              <Text>{orderDetail.value}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default RequestDetails;
