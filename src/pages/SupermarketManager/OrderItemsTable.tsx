import Logo from "@/assets/logo.svg";
import SubmitButton from "@/components/Buttons/SubmitButton";
import { Order, OrderItem } from "@/hooks/useOrder";
import useProduct from "@/hooks/useProduct";
import useAuthStore from "@/state-management/auth/store";
import { getDateTime } from "@/utils/Time";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { PiNotepad } from "react-icons/pi";
import { useReactToPrint } from "react-to-print";

interface Props {
  order: Order;
}

const OrderItemsTable = ({ order }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useAuthStore((state) => state.user);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const orderItems = order.orderItems.filter(
    (item) => item.supermarketId === user?.supermarketId
  );

  return (
    <>
      <Box
        bg="white"
        boxShadow="md"
        borderRadius="24"
        px="3vw"
        py="5vh"
        width="100%"
        maxWidth="1200px"
        mx="auto"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={10}>
          <Text fontSize="xl" fontWeight="bold" mb={4} color="primary">
            Order Items
          </Text>
          <Flex align="center" gap={4}>
            <Button
              size="md"
              color="primary"
              bg="white"
              borderWidth={2}
              borderColor="primary"
              borderRadius={10}
              _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
              _active={{
                bg: "#E46C0A",
                color: "#FFFFFF",
                transform: "scale(0.98)",
                borderColor: "#E46C0A",
              }}
              onClick={() => onOpen()}
            >
              <PiNotepad size={21} />
              Print
            </Button>
          </Flex>
        </Flex>

        {orderItems.map((item, index) => (
          <OrderItemRow key={index} orderItem={item} />
        ))}
      </Box>

      {/* --------------------- print order ------------------------- */}
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={Logo} alt="logo" width={50} height={50} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={componentRef}>
            <Divider mt={0} mb={3} />
            <Flex justify={"space-between"}>
              <Text fontSize="xl" mb={4} textAlign="center" fontWeight={600}>
                Product List
              </Text>
            </Flex>
            <DetailsBox
              orderId={order.id}
              orderPlacedOn={getDateTime(order.orderPlacedOn)}
              shippingMethod={order.shippingMethod}
              orderCost={123}
            />
            {/* Order Item List */}
            {orderItems.map((item, index) => (
              <OrderItemRow key={index} orderItem={item} />
            ))}
          </ModalBody>
          <ModalFooter>
            <SubmitButton onClick={handlePrint}>Print</SubmitButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const OrderItemRow = ({ orderItem }: { orderItem: OrderItem }) => {
  const product = useProduct(orderItem.productId);
  const orderItemPrice = orderItem.price * orderItem.quantity;

  return (
    <Flex
      p={4}
      bg="background"
      borderRadius={10}
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Flex alignItems="center">
        <Image
          src={product.data?.imageUrl}
          alt={product.data?.name}
          boxSize="50px"
          borderRadius="md"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold">{product.data?.name}</Text>
          <Text color="gray.500">
            {orderItem.price} LKR x {orderItem.quantity}
          </Text>
        </Box>
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Text>{orderItemPrice} LKR</Text>
      </Flex>
    </Flex>
  );
};

interface DetailsBoxProps {
  orderId: number;
  orderPlacedOn: string;
  shippingMethod: string;
  orderCost: number;
}
const DetailsBox = ({
  orderId,
  orderPlacedOn,
  shippingMethod,
  orderCost,
}: DetailsBoxProps) => {
  return (
    <>
      <Box
        className="product-card border m-5"
        borderColor={"gray-300"}
        border={"rounded"}
        maxW={{ base: "100%" }}
        p={{ base: 2, md: 4 }}
        m={0}
        mb={4}
        borderRadius={10}
      >
        <Grid templateColumns="2fr 3fr" gap={3}>
          <GridItem fontWeight={"bold"}>Order ID</GridItem>
          <GridItem>: #{orderId}</GridItem>
          <GridItem fontWeight={"bold"}>Order Placed On</GridItem>
          <GridItem>: {orderPlacedOn}</GridItem>
          <GridItem fontWeight={"bold"}>Shipping Method</GridItem>
          <GridItem>: {shippingMethod}</GridItem>
          <GridItem fontWeight={"bold"}>Order Total</GridItem>
          <GridItem>: {orderCost}</GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default OrderItemsTable;
