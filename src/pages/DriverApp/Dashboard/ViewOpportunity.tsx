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
import Map from "@/pages/Public/Map";
import useSupermarket from "@/services/Supermarket/useSupermarket";
import SupermarketLocation from "./SupermarketLocation";
import { getDecimal } from "@/lib/utils";

interface SupermarketRowInterface {
  supermarketIds: number[];
}
const ViewPendingMap = ({ supermarketIds }: SupermarketRowInterface) => {
  const supermarkets = useSupermarket(supermarketIds);
 
  const centers=supermarkets
  .map((supermarket) => supermarket.data?.location)
  .filter(Boolean)
  .map((location) => {
    const [lat, lng] = location?.split(",").map(Number) || [];
    return { lat, lng };
  });
    return <Map centers={centers} />;
};

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
    {
      label: "Total Distance",
      value: opportunity.data?.totalDistance
        ? `${getDecimal(opportunity.data?.totalDistance)} km`
        : "N/A",
    },
    {
      label: "Trip Cost",
      value: opportunity.data?.tripCost
        ? `Rs. ${getDecimal(opportunity.data?.tripCost)}`
        : "N/A",
    },
  ];

  const orderDetails = [
    {
      label: "Order Placed on",
      value: formatDateTime(opportunity.data?.orderPlacedOn),
    },
    { label: "Delivery Cost", value:opportunity.data?.deliveryCost ? `Rs. ${getDecimal(opportunity.data?.deliveryCost)}`: "N/A" },
    // { label: "Start Location", value: `${opportunity.data?.startLocation}` },
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
          <SubmitButton onClick={handleAccept} disabled={acceptedCount >= 1}>
            Accept
          </SubmitButton>
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
          <ViewPendingMap
            supermarketIds={
              opportunity.data?.opportunitysupermarket?.map(
                (s) => s.supermarketId
              ) || []
            }
          />
        </AspectRatio>
      </Box>
    </VStack>
  );
};

export default ViewOpportunity;
