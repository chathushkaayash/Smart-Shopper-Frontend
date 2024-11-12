import SubmitButton from "@/components/Buttons/SubmitButton";
import useOpportunity from "@/hooks/useOpportunity";
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Spacer,
  Stepper,
  Text,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import PickupLocation from "./PickupLocation";
import APIClient from "@/services/api-client";
import useOpportunities from "@/hooks/useOpportunities";

const ViewOpportunity = () => {
  const { id } = useParams(); // recieve the id from the url
  if (!id) return null;

  const acceptedOpportunities = useOpportunities({ status: "Accepted" });
  const acceptedCount = acceptedOpportunities.data?.results?.length || 0;

  const navigate = useNavigate();
  const opportunity = useOpportunity(Number(id));

  const supermarketsLength =
    opportunity.data?.opportunitysupermarket.length || 0;

  const formatDateTime = (orderPlacedOn: any) => {
    if (!orderPlacedOn) return "N/A";
    const { day, hour, minute, month, year } = orderPlacedOn;
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const details = [
    {
      label: "Number of Stops",
      value: supermarketsLength,
    },
    { label: "Total Distance", value: `${opportunity.data?.totalDistance} km` },
    { label: "Trip Cost", value: `Rs.${opportunity.data?.tripCost}` },
  ];

  const orderDetails = [
    {
      label: "Order Placed on",
      value: formatDateTime(opportunity.data?.orderPlacedOn),
    },
    { label: "Delivery Cost", value: `${opportunity.data?.deliveryCost}` },
    { label: "Start Location", value: `${opportunity.data?.startLocation}` },
    {
      label: "Delivery Location",
      value: `${opportunity.data?.deliveryLocation}`,
    },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: supermarketsLength,
  });

  const handleAccept = () => {
    const apiClient = new APIClient("/accept_opportunity/" + id);
    apiClient.create({});
    navigate("/driver/opportunities/viewmap/" + id);
  }; 

  return (
    <VStack minH="100vh" px="8vw" pt="3vh" pb="10vh" gap="4vh">
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          cursor="pointer"
          onClick={() => navigate("/driver/opportunities")}
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Opportunities
        </Text>
      </HStack>
      <Box
        shadow="xl"
        borderWidth={1}
        p={4}
        background="white"
        w="full"
        borderRadius="10"
      >
        <VStack align="start">
          <HStack>
            <Icon as={FaLocationDot} color="primary" />{" "}
            <Text>{opportunity.data?.deliveryLocation}</Text>
          </HStack>
          {details.map((detail, index) => (
            <HStack key={index} w="full" align="space-between">
              <Text>{detail.label} :</Text>
              <Spacer />
              <Text>{detail.value}</Text>
            </HStack>
          ))}
          <SubmitButton onClick={handleAccept} disabled={acceptedCount>=1} >Accept</SubmitButton>
        </VStack>
      </Box>
      <Box
        shadow="xl"
        borderWidth={1}
        p={4}
        background="primary"
        w="full"
        borderRadius="10"
      >
        <VStack color="white">
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
      <Text fontWeight="bold">Supermarkets</Text>
      <Box shadow="xl" borderWidth={1} p={4} w="full" borderRadius="10">
        <Stepper
          index={activeStep}
          orientation="vertical"
          height={`${
            supermarketsLength < 2 ? 6 : (supermarketsLength - 1) * 12
          }vh`}
          gap={0}
        >
          {opportunity.data?.opportunitysupermarket.map(
            (supermarket, index) => (
              <PickupLocation
                key={index}
                supermarketId={Number(supermarket.supermarketId)}
              />
            )
          )}
        </Stepper>
      </Box>
      <Text fontWeight="bold">Map</Text>

      <Box shadow="xl" borderWidth={1} p={2} w="full" borderRadius="10">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797499636!3d6.902205493097101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1721984297174!5m2!1sen!2slk"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </Box>
    </VStack>
  );
};

export default ViewOpportunity;

