import SubmitButton from "@/components/Buttons/SubmitButton";
import {
  Box,
  HStack,
  Icon,
  Spacer,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuCircleDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface Opportunity {
  id: string;
  supermarketList: string[];
  totalDistance: number;
  tripCost: number;

  orderPlacedOn: string;
  customer: string;
  deliveryCost: number;
  startLocation: string;
  deliveryLocation: string;
}

const RequestDetails = () => {
  const navigate = useNavigate();

  const opportunity: Opportunity = {
    id: "1",
    supermarketList: ["New York", "Los Angeles"],
    totalDistance: 100,
    tripCost: 1000,
    orderPlacedOn: "2021-09-01",
    customer: "John Doe",
    deliveryCost: 100,
    startLocation: "Moratuwa",
    deliveryLocation: "Nugegoda",
  };

  const details = [
    { label: "Number of Stops", value: opportunity.supermarketList.length },
    { label: "Total Distance", value: `${opportunity.totalDistance} km` },
    { label: "Trip Cost", value: `Rs.${opportunity.tripCost}` },
  ];

  const orderDetails = [
    { label: "Order Placed on", value: opportunity.orderPlacedOn },
    { label: "Customer", value: `${opportunity.customer}` },
    { label: "Delivery Cost", value: `${opportunity.deliveryCost}` },
    { label: "Start Location", value: `${opportunity.startLocation}` },
    { label: "Delivery Location", value: `${opportunity.deliveryLocation}` },
  ];

  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <VStack minH="100vh" px="8vw" pt="3vh" pb="10vh" gap="4vh">
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          shadow="xl"
          borderWidth={1}
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
          <Text fontWeight="bold">{opportunity.customer}</Text>
          <HStack>
            <Icon as={FaLocationDot} color="primary" />{" "}
            <Text>{opportunity.deliveryLocation}</Text>
          </HStack>
          {details.map((detail, index) => (
            <HStack key={index} w="full" align="space-between">
              <Text>{detail.label} :</Text>
              <Spacer />
              <Text>{detail.value}</Text>
            </HStack>
          ))}
          <SubmitButton>Accept</SubmitButton>
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
      <Text fontWeight="bold">Route</Text>
      <Box shadow="xl" borderWidth={1} p={4} w="full" borderRadius="10">
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="200px"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator border={"none"}>
                <StepStatus
                  // complete={<LuCircleDot />}
                  incomplete={<FaLocationDot />}
                  active={<LuCircleDot />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
      <Text fontWeight="bold">Map</Text>
      <Box shadow="xl" borderWidth={1} p={4} w="full" borderRadius="10">
        Map
      </Box>
    </VStack>
  );
};

export default RequestDetails;
