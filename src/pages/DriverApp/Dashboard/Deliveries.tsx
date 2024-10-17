import useOpportunities from "@/hooks/useOpportunities";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface SupermarketRowInterface {
  supermarketId: number;
}
export const SupermarketAddress = ({
  supermarketId,
}: SupermarketRowInterface) => {
  const supermarket = useSupermarket(supermarketId);
  return (
    <Text as="span" fontWeight="bold">
      {supermarket.data?.address}
      <br />
    </Text>
  );
};

const Deliveries = () => {
  const opportunities = useOpportunities({
    status: "Delivered",
    month: "",
  });

  // console.log(opportunities.data);
  const [isRotated, setIsRotated] = useState(false);
  const displayDetails = () => {
    setIsRotated(!isRotated);
  };

  const formatDateTime = (orderPlacedOn: any) => {
    const { day, hour, minute, month, year } = orderPlacedOn;
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <VStack spacing={4} mt={4} w="full" justifyContent="center">
      {opportunities.data?.results.map((opportunity, index) => (
        <Box
          bg="white"
          borderRadius="lg"
          shadow="md"
          p={4}
          w="90vw"
          key={index}
        >
          <HStack>
            <VStack align="start" flex="1">
              <Text fontWeight="bold">{opportunity.deliveryLocation}</Text>
              <Text color="gray.500" fontSize="sm">
                {formatDateTime(opportunity.orderPlacedOn)}
              </Text>
            </VStack>
            <Text fontWeight="bold" color="red.500">
              Rs.{opportunity.tripCost}
            </Text>
            <IconButton
              onClick={displayDetails}
              aria-label="Go to delivery"
              icon={<ChevronRightIcon />}
              variant="ghost"
              transform={isRotated ? "rotate(90deg)" : "rotate(0deg)"}
            />
          </HStack>

          {isRotated && (
            <Box>
              <HStack justify="space-between">
                <Text>Delivery Cost</Text>
                <Text>Rs.{opportunity.deliveryCost}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text>Number of Stops</Text>
                <Text>{opportunity.opportunitysupermarket.length}</Text>
              </HStack>

              {opportunity.opportunitysupermarket.map((i, index) => (
                <HStack justify="space-between" key={index}>
                  <Text>Supermarkets</Text>
                  <SupermarketAddress supermarketId={i.supermarketId} />
                </HStack>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </VStack>
  );
};

export default Deliveries;
