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
import { FaTruck } from "react-icons/fa";

import Keels from "../../assets/supermarket-icons/Keels.svg";
import Spar from "../../assets/supermarket-icons/Spar.svg";
import Arpico from "../../assets/supermarket-icons/Arpico.svg";

const OrderTrackingPopup = () => {
  const primaryColor = "orange.500";

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
          {[
            {
              status: "Order Placed",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
            {
              status: "Picked from Supermarket 1",
              location: "Keels Super, Matara",
              time: "11:45 PM",
            },
            {
              status: "Picked from Supermarket 2",
              location: "Spar Supermarket, Galle",
              time: "11:45 PM",
            },
            {
              status: "Way to home",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
            {
              status: "Delivered",
              location: "Berlin, Germany",
              time: "11:45 PM",
            },
          ].map((item, index) => (
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
                  bg={primaryColor}
                  borderRadius="full"
                  color="white"
                  fontWeight="bold"
                  position="relative"
                  zIndex={1}
                >
                  <Icon as={FaTruck} boxSize={5} />
                </Center>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="semibold">{item.status}</Text>
                  <Text fontSize="10px" fontWeight="regular">
                    {item.location}
                  </Text>
                </VStack>
              </HStack>
              <Text fontSize="10px" fontWeight="regular">
                {item.time}
              </Text>
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
          {[
            {
              name: "Keels Super",
              location: "Battaramulla Rd, Galle",
              status: "Packed",
              statusColor: primaryColor,
              image: Keels,
            },
            {
              name: "Spar Super Market",
              location: "Battaramulla Rd, Galle",
              status: "Packed",
              statusColor: primaryColor,
              image: Spar,
            },
            {
              name: "Arpico Supermarket",
              location: "Battaramulla Rd, Galle",
              status: "Not Packed",
              statusColor: "orange.200",
              image: Arpico,
            },
          ].map((item, index) => (
            <HStack
              key={index}
              width="100%"
              p={2}
              borderWidth="1px"
              borderColor={item.statusColor}
              borderRadius="12px"
              align="center"
              justify="space-between"
            >
              <HStack spacing={4} align="center">
                <Center width="40px" height="40px" borderRadius="full">
                  <Image src={item.image} />
                </Center>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.location}</Text>
                </VStack>
              </HStack>
              <Button
                size="sm"
                bg={item.statusColor}
                color="white"
                _hover={{ bg: item.statusColor }}
                _active={{ bg: item.statusColor }}
                borderRadius="full"
                px={3}
              >
                {item.status}
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default OrderTrackingPopup;
