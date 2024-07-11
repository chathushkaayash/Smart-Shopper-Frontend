import SubmitButton from "@/components/Buttons/SubmitButton";
import { Box, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

const Opportunities = () => {
  const requests = [
    {
      name: "John Doe",
      location: "New York",
      nOS: 5,
      totalDistance: 100,
      tripCost: 1000,
    },
  ];
  return (
    <>
        <VStack bg="background" h="93vh" p="10vw" gap="4vh">
      {requests.map((request) => (
          <Box boxShadow="md" p={4} background="white" w="full">
            <VStack align="start">
              <Text fontWeight="bold">{request.name}</Text>
              <HStack>
                <Icon as={FaLocationDot} color="primary" />{" "}
                <Text>{request.location}</Text>
              </HStack>
              <HStack w="full" align="space-between">
                <Text>Number of Stops:</Text>
                <Spacer />
                <Text>{request.nOS}</Text>
              </HStack>
              <HStack w="full">
                <Text>Total Distance:</Text>
                <Spacer />
                <Text>{request.totalDistance} km</Text>
              </HStack>
              <HStack w="full">
                <Text>Trip Cost:</Text>
                <Spacer />
                <Text>Rs.{request.tripCost}</Text>
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
