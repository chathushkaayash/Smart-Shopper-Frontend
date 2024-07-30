import { Order } from "@/hooks/useOrder";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import AddProductReview from "./AddProductReview";
import SupermarketItem from "./SupermarketItem";

interface Props {
  order: Order;
}

const OrderItems = ({ order }: Props) => {
  const {
    isOpen: isAddReviewOpen,
    onOpen: onAddReviewOpen,
    onClose: onAddReviewClose,
  } = useDisclosure();

  console.log(order);

  // const items = [
  //   {
  //     image: "https://via.placeholder.com/50",
  //     name: "Munchee Super Cream Cracker",
  //     price: 145,
  //     supermarket: "Keells",
  //     supermarketLogo: "https://via.placeholder.com/50",
  //   },
  //   {
  //     image: "https://via.placeholder.com/50",
  //     name: "Gradient Graphic T-shirt",
  //     price: 145,
  //     supermarket: "Spar",
  //     supermarketLogo: "https://via.placeholder.com/50",
  //   },
  // ];

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
      {order.orderItems.map((item, index) => (
        <SupermarketItem
          key={index}
          orderItem={item}
          onAddReviewOpen={onAddReviewOpen}
        />
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
            <AddProductReview
              productImage="https://via.placeholder.com/50"
              supermarketImage="https://via.placeholder.com/25"
              productName="Gradient Graphic T-shirt"
              price={45.6}
            />
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="center" columnGap={5}>
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
