import SubmitButton from "@/components/Buttons/SubmitButton";
import { Box, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Request{
  id: number;
  name: string;
  location: string;
  nOS : number;
  totalDistance: number;
  tripCost : number;
}

const Opportunities = () => {
  const navigate = useNavigate();

  const requests:Request[] = [
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      nOS: 5,
      totalDistance: 100,
      tripCost: 1000,
    },
    {
      id: 2,
      name: "Jane Doe",
      location: "California",
      nOS: 3,
      totalDistance: 50,
      tripCost: 500,
    },
    {
      id: 3,
      name: "John Doe",
      location: "New York",
      nOS: 5,
      totalDistance: 100,
      tripCost: 1000,
    },
  ];
  const request = requests[0];

  const details = [
    { label: "Number of Super markets", value: request.nOS },
    { label: "Total Distance", value: `${request.totalDistance} km` },
    { label: "Trip Cost", value: `Rs.${request.tripCost}` },
  ];

  return (
    <>
      <VStack minH="100vh" px="8vw" pt="5vh" pb="10vh" gap="4vh">
        {requests.map((request, index) => (
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
              <Text fontWeight="bold">{request.name}</Text>
              <HStack>
                <Icon as={FaLocationDot} color="primary" />{" "}
                <Text>{request.location}</Text>
              </HStack>
              {details.map((request, index) => (
                <HStack key={index} w="full">
                  <Text>{request.label} : </Text>
                  <Spacer />
                  <Text>{request.value}</Text>
                </HStack>
              ))}
              <SubmitButton>Accept</SubmitButton>
            </VStack>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default Opportunities;
