import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import AddProductReview from "./AddProductReview";

const OrderItems = () => {
  const {
    isOpen: isAddReviewOpen,
    onOpen: onAddReviewOpen,
    onClose: onAddReviewClose,
  } = useDisclosure();

  const items = [
    {
      image: "https://via.placeholder.com/50",
      name: "Munchee Super Cream Cracker",
      price: 145,
      supermarket: "Keells",
      supermarketLogo: "https://via.placeholder.com/50",
    },
    {
      image: "https://via.placeholder.com/50",
      name: "Gradient Graphic T-shirt",
      price: 145,
      supermarket: "Spar",
      supermarketLogo: "https://via.placeholder.com/50",
    },
  ];

  return (
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
      <Text fontSize="xl" fontWeight="bold" mb={4} color="primary">
        Order Items
      </Text>
      {items.map((item, index) => (
        <Flex
          p={4}
          key={index}
          bg="background"
          borderRadius={10}
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Flex alignItems="center">
            <Image
              src={item.image}
              alt={item.name}
              boxSize="50px"
              borderRadius="md"
              mr={4}
            />
            <Box>
              <Text fontWeight="bold">{item.name}</Text>
              <Text color="gray.500">${item.price}</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={4}>
            <Image
              src={item.supermarketLogo}
              alt={item.supermarket}
              boxSize="50px"
            />
            <Button
              size="sm"
              color="primary"
              bg="white"
              borderWidth={2}
              borderColor="primary"
              borderRadius={10}
              onClick={onAddReviewOpen}
              _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
              _active={{
                bg: "#E46C0A",
                color: "#FFFFFF",
                transform: "scale(0.98)",
                borderColor: "#E46C0A",
              }}
            >
              Add Reviews
            </Button>
          </Flex>
        </Flex>
      ))}
      <Flex justifyContent="flex-end" mt={4}>
        <Text>
          Delivery Fee:{" "}
          <Text as="span" fontWeight="bold">
            200.00 LKR
          </Text>
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" mt={4}>
        <Text>
          Total:{" "}
          <Text as="span" fontWeight="bold">
            24 500.00 LKR
          </Text>
        </Text>
      </Flex>
      {/* Add Product Review Modal */}
      <Modal
        isOpen={isAddReviewOpen}
        onClose={onAddReviewClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="orange.500"
          >
            Add Product Review
          </ModalHeader>
          <ModalBody>
            <AddProductReview productImage="https://via.placeholder.com/50" supermarketImage="https://via.placeholder.com/25" productName="Gradient Graphic T-shirt" price={45.6} />
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="center" columnGap={5} >
              <Button
                variant="outline"
                colorScheme="orange"
                px={5}
                mr={3}
                onClick={onAddReviewClose}
              >
                Cancel
              </Button>
              <Button colorScheme="orange" px={5} onClick={onAddReviewClose}>
                Publish
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OrderItems;
