import QR from "@/assets/qr_code.png";
import Banner from "@/assets/smart-shopper-banner.svg";
import AddDriverReview from "@/components/ViewOrders/AddDriverReview";
import DriverDetailsPopup from "@/components/ViewOrders/DriveDetails";
import OrderReceipt from "@/components/ViewOrders/OrderReceipt";
import TrackOrder from "@/components/ViewOrders/TrackOrder";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { Order } from "@/services/types";
import useAuthStore from "@/state-management/auth/store";
import { DateTime } from "@/utils/Time";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  HStack,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
interface Props {
  order: Order;
}
interface SupermarketInfoRowProps {
  supermarketId: number;
}

const statusColor: Record<Order["status"], string> = {
  ToPay: "red",
  Processing: "purple",
  Prepared: "green",
  Cancelled: "yellow",
  Completed: "blue",
};

const SupermarketInfoRow = ({ supermarketId }: SupermarketInfoRowProps) => {
  const supermarket = useSupermarket([supermarketId]);

  return (
    <Text textAlign="left" paddingLeft={10}>
      {supermarket[0].data?.name}
      <br />
    </Text>
  );
};

const OrderDetails = ({ order }: Props) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const supermarketList: number[] = order.supermarketOrders.map(
    (i) => i.supermarketId
  );
  console.log(order);

  const {
    isOpen: isReceiptOpen,
    onOpen: onReceiptOpen,
    onClose: onReceiptClose,
  } = useDisclosure();

  const {
    isOpen: isTrackOrderOpen,
    onOpen: onTrackOrderOpen,
    onClose: onTrackOrderClose,
  } = useDisclosure();

  const {
    isOpen: isDriverOpen,
    onOpen: onDriverOpen,
    onClose: onDriverClose,
  } = useDisclosure();

  const {
    isOpen: isAddReviewOpen,
    onOpen: onAddReviewOpen,
    onClose: onAddReviewClose,
  } = useDisclosure();

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
              Order ID: #{order.id}
            </Text>
            <Flex align="center" gap={4}>
              {order.status === "Processing" && (
                <Button
                  size="md"
                  color="primary"
                  bg="white"
                  borderWidth={2}
                  borderColor="primary"
                  onClick={onTrackOrderOpen}
                  borderRadius={10}
                  _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                  _active={{
                    bg: "#E46C0A",
                    color: "#FFFFFF",
                    transform: "scale(0.98)",
                    borderColor: "#E46C0A",
                  }}
                >
                  <MdOutlineLocationOn size={22} />
                  Track Order
                </Button>
              )}
              <Button
                size="md"
                color="primary"
                bg="white"
                borderWidth={2}
                borderColor="primary"
                onClick={onReceiptOpen}
                borderRadius={10}
                _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                _active={{
                  bg: "#E46C0A",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                <PiNotepad size={21} />
                Receipt
              </Button>
            </Flex>
          </Flex>
          <HStack>
            <Badge
              as="div"
              colorScheme={statusColor[order.status]}
              className="p-1.5 !px-2 text-xs font-medium uppercase tracking-wider !rounded-[5px]"
            >
              {order.status}
            </Badge>
            {order.status === "ToPay" && (
              <Button
                size="sm"
                color="primary"
                bg="white"
                borderWidth={2}
                borderColor="primary"
                onClick= {() => navigate("/payments/orders/" + order.id)}
                borderRadius={10}
                _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                _active={{
                  bg: "#E46C0A",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                Pay for the order.
              </Button>
            )}
          </HStack>

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
                <Text>: {DateTime.toString(order.orderPlacedOn)}</Text>
                <Text>Shipping Method</Text>
                <Text>: {order.shippingMethod}</Text>
                <Text>Delivery Cost</Text>
                <Text>: {order.deliveryFee} LKR</Text>
                <Text>Order Total</Text>
                <Text>: {order.totalCost} LKR</Text>
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
                Supermarkets
              </Text>
              <Box>
                {supermarketList.map((supermarketId) => (
                  <SupermarketInfoRow
                    key={supermarketId}
                    supermarketId={supermarketId}
                  />
                ))}
              </Box>
            </Box>
          </Flex>

          <Divider my={4} />

          {/* ------------------------------------ Driver Details ------------------------------------ */}
          {/* Hide in ToPay and Processing */}
          {!["ToPay", "Processing"].includes(order.status) && (
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="15"
              borderColor="gray.300"
              mb={4}
              bg="red"
            >
              <Flex
                justify="space-between"
                alignItems="center"
                mb={4}
                color={"primary"}
              >
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                    Driver Details
                  </Text>
                </Box>
                <Box onClick={onDriverOpen} cursor="pointer">
                  <RiArrowRightSLine size={27} />
                </Box>
              </Flex>
              <Flex justifyContent="space-between" flexWrap="wrap" gap={4}>
                <Flex align="center" gap={4}>
                  <Image
                    src="https://via.placeholder.com/79x86"
                    borderRadius="full"
                    boxSize="76px"
                  />
                  <Box>
                    <Text fontSize="xl" fontWeight="bold">
                      Bimsara Jayadewa
                    </Text>
                    <Text fontSize="md" fontWeight="semibold">
                      Jayadewa gedaratama service
                    </Text>
                    <Text>Driver ID: 22345667</Text>
                  </Box>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-end"
                  gap={2}
                >
                  <Text fontSize="xl" fontWeight="semibold">
                    +94 225566789
                  </Text>
                  <Button
                    size="md"
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
            </Box>
          )}

          {/* ------------------------------------ Shipping Details ------------------------------------ */}
          <Box p={4} borderWidth="1px" borderRadius="15" borderColor="gray.300">
            <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
              Shipping Details
            </Text>
            <Grid templateColumns="1fr 2fr" gap={2}>
              <Text>Shipping Address</Text>
              <Text>: {order.shippingAddress}</Text>
              <Text>Contact Number</Text>
              <Text>: {user?.number}</Text>
              <Text>Name</Text>
              <Text>: {user?.name}</Text>
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Track Order Modal */}
      <Modal
        isOpen={isTrackOrderOpen}
        onClose={onTrackOrderClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="24px" bg={"white"}>
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
            Order Tracking
          </ModalHeader>
          <ModalBody p={0}>
            <TrackOrder />
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="center">
              <Button
                width="70%"
                bg="primary"
                color="white"
                _hover={{ bg: "orange.600" }}
                _active={{ bg: "orange.700" }}
                borderRadius="12px"
                onClick={onTrackOrderClose}
              >
                Done
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Order Receipt Modal */}
      <Modal
        isOpen={isReceiptOpen}
        onClose={onReceiptClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <Center>
            <Image src={Banner} h={53} w={170} />
          </Center>
          <Divider mb={1} />
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="30">
            Order Receipt
          </ModalHeader>
          <Image src={QR} h={150} w={150} mx="auto" />
          <ModalBody>
            <OrderReceipt />
          </ModalBody>
          <ModalFooter gap={3}>
            <Flex width="100%" justifyContent="center">
              <Button
                w="70%"
                mb={2}
                onClick={onReceiptClose}
                variant="outline"
                borderColor="primary"
                border="2px"
                borderRadius="10px"
                fontSize="15px"
                fontWeight="bold"
                color="white"
                bg="primary"
                _hover={{ bg: "orange.600" }}
                _active={{ bg: "orange.700" }}
              >
                Download
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Driver Details Modal */}
      <Modal
        isOpen={isDriverOpen}
        onClose={onDriverClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
            Driver Details
          </ModalHeader>
          <ModalBody>
            <DriverDetailsPopup />
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="center" mt={-3}>
              <Button
                width="60%"
                bg="white"
                color="primary"
                borderColor={"primary"}
                borderWidth={1}
                _hover={{ bg: "primary", color: "white" }}
                _active={{ bg: "primary", color: "white" }}
                borderRadius="12px"
                onClick={onDriverClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Driver Review Modal */}
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
            <AddDriverReview
              driverImage="https://via.placeholder.com/50"
              driverName="Bimsara Anjana Jayadewa"
              courierCompany="Uber pvt limited."
              driverID={123456}
              driverNumber="+94719944045"
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
    </>
  );
};
export default OrderDetails;
