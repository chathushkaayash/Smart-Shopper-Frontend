import SubmitButton from "@/components/Buttons/SubmitButton";
import { Box, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import opportunities from "@/data/Driver/opportunity";

const Opportunities = () => {
  const navigate = useNavigate();

  return (
    <>
      <VStack minH="100vh" px="8vw" pt="5vh" pb="10vh" gap="4vh">
        {opportunities.map((request, index) => (
          <Box
            key={index}
            shadow="xl"
            borderWidth={1}
            p={4}
            background="white"
            w="full"
            borderRadius="10"
            onClick={() => navigate("/driver/opportunities/" + request.id)}
          >
            <VStack align="start">
              <Text fontWeight="bold">{request.customer}</Text>
              <HStack>
                <Icon as={FaLocationDot} color="primary" />{" "}
                <Text>{request.deliveryLocation}</Text>
              </HStack>
              <HStack w="full">
                <Text>Number of Supermarkets </Text>
                <Spacer />
                <Text>{request.supermarketList.length}</Text>
              </HStack>
              <HStack w="full">
                <Text>Total Distance </Text>
                <Spacer />
                <Text>{request.totalDistance}</Text>
              </HStack>
              <HStack w="full">
                <Text>Trip Cost </Text>
                <Spacer />
                <Text>{request.tripCost}</Text>
              </HStack>
              <SubmitButton>Accept</SubmitButton>
            </VStack>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default Opportunities;
