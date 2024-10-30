import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { CgMenuRound } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import QR from "@/assets/qr_code.png";

import SubmitButton from "@/components/Buttons/SubmitButton";
import useConsumer from "@/hooks/useConsumer";
import useOpportunity from "@/hooks/useOpportunity";
import APIClient from "@/services/api-client";
import useOrder from "@/services/Orders/useOrder";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import { BaseSupermarketOrder } from "@/services/types";
import { useState } from "react";

{
  /**********************************************Supermarket rows component****************************************/
}

interface SupermarketRowInterface {
  supermarketOrder: BaseSupermarketOrder;
}

const SupermarketRow = ({ supermarketOrder }: SupermarketRowInterface) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const supermarket = useSupermarket([supermarketOrder.supermarketId]);
  return (
    <>
      <HStack
        // zIndex={3000}
        w="full"
        cursor="pointer"
        onClick={() => {
          console.log(1);
          onOpen();
        }}
      >
        <Image src={QR} w="5vw" />
        <Text>{supermarket[0].data?.address}</Text>
        <Spacer />
        <Icon as={FaPhoneAlt} color="primary" />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width="80vw" pos={"absolute"}>
          <ModalCloseButton />
          <ModalBody>
            <VStack p={4}>
              <Text as="span" fontWeight="bold">
                {supermarket[0].data?.address}
                <br />
              </Text>
              <Image src={supermarketOrder.qrCode} w="40vw" h="40vw" />
              <HStack>
                <Text>Call</Text>
                <Icon as={FaPhoneAlt} color="primary" />
              </HStack>
              <Text as="span" fontWeight="bold">
                {supermarket[0].data?.contactNo}
                <br />
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

{
  /**********************************************Consumer Name component****************************************/
}

interface ConsumerInterface {
  consumerId: number;
}
const ConsumerName = ({ consumerId }: ConsumerInterface) => {
  const { data: consumer } = useConsumer(consumerId);
  return <Text>{consumer?.user.name}</Text>;
};

{
  /********************************************** Viewmap component***************************************************/
}
const ViewMap = () => {
  const { id } = useParams();
  if (!id) return null;
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const opportunity = useOpportunity(Number(id));
  const order = useOrder([opportunity.data?._orderId || 0])[0];

  const formatDateTime = (orderPlacedOn: any) => {
    if (!orderPlacedOn) return "N/A";
    const { day, hour, minute, month, year } = orderPlacedOn;
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const supermarketsLength = order.data?.supermarketOrders.length || 0;
  const orderDetails = [
    {
      label: "Order Placed on",
      value: formatDateTime(opportunity.data?.orderPlacedOn),
    },
    {
      label: "Customer",
      value: (
        <ConsumerName consumerId={opportunity.data?.consumer.userId || 0} />
      ),
    },
    { label: "Delivery Cost", value: `${opportunity.data?.deliveryCost}` },
    { label: "No of Supermarkets", value: supermarketsLength },
    { label: "Trip Cost", value: `${opportunity.data?.tripCost}` },
    { label: "Total Distance", value: `${opportunity.data?.totalDistance}` },
    {
      label: "Delivery Location",
      value: `${opportunity.data?.deliveryLocation}`,
    },
  ];

  const handleMenu = () => {
    setShowDetails(!showDetails);
  };

  const handleComplete = () => {
    const apiClient = new APIClient("/complete_delivery/" + id);
    apiClient.create({}).then;
    navigate("/driver");
  };

  return (
    <>
      <Box w="full" h="100vh">
        <Box
          pos="absolute"
          top={4}
          left={4}
          p={2}
          background="white"
          borderRadius="50%"
          shadow="md"
          cursor="pointer"
          onClick={() => navigate("/driver")}
          zIndex={10}
        >
          <Icon as={IoMdArrowRoundBack} w={8} h={8} />
        </Box>
        <AspectRatio
          ratio={9 / 20}
          h="93vh"
          style={{ pointerEvents: showDetails ? "none" : "auto" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797499636!3d6.902205493097101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1721984297174!5m2!1sen!2slk"
            loading="lazy"
          ></iframe>
        </AspectRatio>

        <Box
          bg="white"
          pos="absolute"
          bottom={0}
          w="full"
          h="8vh"
          borderTopRadius={10}
          p={4}
          zIndex={50}
        >
          <Flex alignItems="center" justifyContent="space-between">
            <SubmitButton onClick={handleComplete}>
              Delivery Completed
            </SubmitButton>
            <Icon
              ml={4}
              as={CgMenuRound}
              w={8}
              h={8}
              onClick={handleMenu}
              cursor="pointer"
            />
          </Flex>
        </Box>

        {/********************************** * Details Panel ***************************************/}

        {showDetails && (
          <Box
            zIndex={10}
            pos="absolute"
            bg="white"
            bottom="8vh"
            w="full"
            borderTopRadius={10}
          >
            <Box borderWidth={3} p={4} borderRadius="10" m={4}>
              <Stack>
                <HStack>
                  <Text fontWeight="bold">Scan QR</Text>
                  <Spacer />
                  <Text fontWeight="bold">Call</Text>
                </HStack>
                {order.data?.supermarketOrders.map((i, index) => (
                  <SupermarketRow key={index} supermarketOrder={i} />
                ))}
              </Stack>
            </Box>

            <Box p={4} m={4}>
              <VStack>
                <Text fontWeight="bold">Order Details</Text>
                {orderDetails.map((orderDetail, index) => (
                  <HStack key={index} w="full" align="space-between">
                    <Text>{orderDetail.label}</Text>
                    <Spacer />
                    <Text>{orderDetail.value}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
export default ViewMap;
