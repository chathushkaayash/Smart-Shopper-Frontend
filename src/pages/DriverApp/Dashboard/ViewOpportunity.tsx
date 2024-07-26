import SubmitButton from "@/components/Buttons/SubmitButton";
import data from "@/data/Driver/opportunity";
import {
  AspectRatio,
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

export interface Opportunity {
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

const ViewOpportunity = () => {
  const navigate = useNavigate();
  const opportunity: Opportunity = data[0];

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
          // shadow="xl"
          // borderWidth={1}
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
