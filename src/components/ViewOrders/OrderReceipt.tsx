import React from "react";
import { Box, Flex, Text, Grid } from "@chakra-ui/react";

const OrderReceiptPopup: React.FC = () => {
  return (
    <Flex direction="column" fontWeight="md">
      <Box
        flex="1"
        p={4}
        pl={6}
        mb={4}
        borderWidth="1px"
        borderRadius="15"
        borderColor="gray.300"
      >
        <Text fontSize="lg"  fontWeight="semibold" color="black" mb={2}>
          Order Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Text>Order ID</Text>
          <Text>: 12042024</Text>
          <Text>Order Placed on</Text>
          <Text>: 12.04.2024</Text>
          <Text>Payment method</Text>
          <Text>: Credit/Debit Card</Text>
          <Text>Order Total</Text>
          <Text>: 2547.00 LKR</Text>
          <Text>Delivery Cost</Text>
          <Text>: 300.00 LKR</Text>
        </Grid>
      </Box>
      <Box
        flex="1"
        p={4}
        pl={6}
        mb={4}
        borderWidth="1px"
        borderRadius="15"
        borderColor="gray.300"
      >
        <Text fontSize="lg"  fontWeight="semibold" color="black" mb={2}>
          Shipping Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Text>Shipping Address</Text>
          <Text>: Kaluthara, Western, Srilanka 129987</Text>
          <Text>Contact Number</Text>
          <Text>: 0719944045</Text>
          <Text>Name</Text>
          <Text>: Chathushka Ayantha</Text>
        </Grid>
      </Box>
      <Box
        flex="1"
        p={4}
        pl={6}
        mb={4}
        borderWidth="1px"
        borderRadius="15"
        borderColor="gray.300"
      >
        <Text fontSize="lg" fontWeight="semibold" color="black" mb={2}>
          Driver Details
        </Text>
        <Grid templateColumns="1fr 2fr" gap={2}>
          <Text>Name</Text>
          <Text>: Bimsara Jayadewa</Text>
          <Text>Driver ID</Text>
          <Text>: 12042024</Text>
          <Text>Payment method</Text>
          <Text>: Credit/Debit Card</Text>
          <Text>Company Name</Text>
          <Text>: Tarvels</Text>
          <Text>Company Number</Text>
          <Text>: 0773037722</Text>
        </Grid>
      </Box>
    </Flex>
  );
};

export default OrderReceiptPopup;
