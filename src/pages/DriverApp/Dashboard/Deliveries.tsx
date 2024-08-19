import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Deliveries = () => {
  const [isRotated, setIsRotated] = useState(false);
  const displayDetails = () => {
    setIsRotated(!isRotated);
  };

  return (
    <VStack spacing={4} mt={4} w="full" justifyContent="center">
      <Box bg="white" borderRadius="lg" shadow="md" p={4} w="90vw">
        <HStack>
          <VStack align="start" flex="1">
            <Text fontWeight="bold">Warrington, PA 76102</Text>
            <Text color="gray.500" fontSize="sm">
              Yesterday at 16:34
            </Text>
          </VStack>
          <Text fontWeight="bold" color="red.500">
            Rs 100
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
              <Text>Delivery cost</Text>
              <Text>100</Text>
            </HStack>
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default Deliveries;
