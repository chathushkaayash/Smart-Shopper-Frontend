import SubmitButton from "@/components/Buttons/SubmitButton";
import useOpportunities from "@/hooks/useOpportunities";
import { Box, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Opportunities = () => {
  const navigate = useNavigate();
  const opportunities = useOpportunities({status: "Pending"});

  return (
    <>
      <VStack minH="100vh" px="8vw" pt="5vh" pb="10vh" gap="4vh">
        {opportunities.data?.results?.map((opportunity, index) => (
          <Box
            key={index}
            shadow="xl"
            borderWidth={1}
            p={4}
            background="white"
            w="full"
            borderRadius="10"
          >
            <VStack align="start">
              {/* <Text fontWeight="bold">{opportunity.consumer.user.name}</Text> */}
              <HStack>
                <Icon as={FaLocationDot} color="primary" />{" "}
                <Text>{opportunity.deliveryLocation}</Text>
              </HStack>
              <HStack w="full">
                <Text>Number of Supermarkets </Text>
                <Spacer />
                <Text>{opportunity.opportunitysupermarket.length}</Text>
              </HStack>
              <HStack w="full">
                <Text>Total Distance </Text>
                <Spacer />
                <Text>{opportunity.totalDistance} km</Text>
              </HStack>
              <HStack w="full">
                <Text>Trip Cost </Text>
                <Spacer />
                <Text>{opportunity.tripCost}</Text>
              </HStack>

              <SubmitButton
                onClick={() =>
                  navigate("/driver/opportunities/" + opportunity.id)
                }
              >
                View Order
              </SubmitButton>
            </VStack>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default Opportunities;

