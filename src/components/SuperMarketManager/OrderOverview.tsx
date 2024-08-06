import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface OrderIdProps {
  status: string;
}

const OrderId = ({}: OrderIdProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openPopUp = () => {
    onOpen();
  };

  return (
    <>
      <Box width="100%" mb={10}>
        <Box
          bg="white"
          boxShadow="md"
          borderRadius="24"
          pt={7}
          pb={10}
          pl={20}
          pr={20}
          width="100%"
          maxWidth="1200px"
          mx="auto"
        >
          <Flex justify="space-between" align="center" flexWrap="wrap" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Order ID: 223345678
            </Text>
            <Flex align="center" gap={4} onClick={openPopUp}>
              <Button
                size="md"
                color="white"
                bg="primary"
                borderWidth={2}
                borderColor="primary"
                onClick={onOpen}
                borderRadius={10}
                _hover={{ bg: "white", color: "primary" }}
                _active={{
                  bg: "#E46C0A",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                Order Ready
              </Button>
            </Flex>
          </Flex>
          {/* <Box
              bg={
                status === "completed"
                  ? "#5BFF89"
                  : status === "ready"
                  ? "yellow.200"
                  : status === "active"
                  ? "blue.200"
                  : "red.200"
              }
              borderRadius="full"
              textAlign="center"
              p={1}
              maxWidth="200px"
            >
              <Text fontSize="md" fontWeight="bold">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Text>
            </Box> */}

          <Divider my={4} />

          <Flex flexDirection={{ base: "column", md: "row" }} gap={4} mb={4}>
            <Box
              flex="1"
              p={4}
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Order Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={2}>
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
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Driver Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={2}>
                <Text>Driver name</Text>
                <Text>: 12.04.2024</Text>
                <Text>Contact Number</Text>
                <Text>: Credit/Debit Card</Text>
                <Text>Vehicle Type</Text>
                <Text>: 2547.00 LKR</Text>
                <Text>Vehicle Number</Text>
                <Text>: 300.00 LKR</Text>
              </Grid>
            </Box>
          </Flex>

          <Divider my={4} />

          <Box p={4} borderWidth="1px" borderRadius="15" borderColor="gray.300">
            <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
              Shipping Details
            </Text>
            <Grid templateColumns="1fr 2fr" gap={2}>
              <Text>Shipping Address</Text>
              <Text>: Kaluthara, Western, Srilanka, 129987</Text>
              <Text>Contact Number</Text>
              <Text>: +993345887</Text>
              <Text>Name</Text>
              <Text>: Chathusika Ayantha</Text>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Track Order Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify={"space-between"}>
              <Text fontSize="xl" mb={4} textAlign="center" fontWeight={600}>
                Are you Sure to Confirm order?
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="center" gap={3}>
              <Button bg={"primary"}>Yes</Button>
              <Button onClick={onClose}>No</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default OrderId;
