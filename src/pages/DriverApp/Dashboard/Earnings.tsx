import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useOpportunities from "@/hooks/useOpportunities";
import { SupermarketAddress } from "./Deliveries";

const Earnings = () => {
  const opportunities = useOpportunities({
    status: "Delivered",
    month: "",
    limit: 2,
  });

  const formatDateTime = (orderPlacedOn: any) => {
    const { day, hour, minute, month, year } = orderPlacedOn;
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();
  const data = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100, 50, 60],
    },
  ];

  const options = {
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
  };

  const cards = [
    {
      title: "Total Income",
      value: "LKR634",
    },
    {
      title: "Completed Orders",
      value: "7",
    },
  ];

  const displayDetails = () => {
    setIsRotated(!isRotated);
  };
  return (
    <VStack bg="background" h="100vh" px="8vw" gap="2vh">
      <HStack w="full" justifyContent={"space-between"} mt="3vh">
        {cards.map((card, index) => (
          <VStack
            w="45%"
            p={4}
            borderRadius="md"
            boxShadow="md"
            h="12vh"
            key={index}
            bg="white"
          >
            <Heading size="sm" color="gray" lineHeight={1}>
              {card.title}
            </Heading>
            <Text fontSize="2xl" fontWeight="700" lineHeight={1}>
              {card.value}
            </Text>
          </VStack>
        ))}
      </HStack>
      <Box
        w="full"
        borderRadius="md"
        boxShadow="md"
        py="4vh"
        bg="white"
        px="2vw"
      >
        <ReactApexChart
          options={options}
          series={data}
          type="area"
          width="100%"
        />
      </Box>
      <HStack justify="space-between" align="center" w="full">
        <Text fontSize="lg" fontWeight="bold">
          Recent Deliveries
        </Text>
        <Button
          onClick={() => navigate("/driver/deliveries")}
          variant="link"
          color="primary"
        >
          Show more
        </Button>
      </HStack>

      {/********************* Delivered Item Card *********************/}

      <VStack spacing={4} mt={2} w="full">
        {opportunities.data?.results.map((opportunity, index) => (
          <Box
            bg="white"
            borderRadius="lg"
            shadow="md"
            p={4}
            w="full"
            key={index}
          >
            <HStack>
              <VStack align="start" flex="1">
                <Text fontWeight="bold">{opportunity.deliveryLocation}</Text>
                <Text color="gray.500" fontSize="sm">
                  {formatDateTime(opportunity.orderPlacedOn)}
                </Text>
              </VStack>
              <Text fontWeight="bold" color="red.500">
                Rs.{opportunity.tripCost}
              </Text>
              <IconButton
                onClick={displayDetails}
                aria-label="Go to delivery"
                icon={<ChevronRightIcon />}
                variant="ghost"
                transform={isRotated ? "rotate(90deg)" : "rotate(0deg)"}
              />
            </HStack>

            {isRotated && (
              <Box>
                <HStack justify="space-between">
                  <Text>Delivery cost</Text>
                  <Text>Rs.{opportunity.deliveryCost}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Number of Stops</Text>
                  <Text>{opportunity.opportunitysupermarket.length}</Text>
                </HStack>

                {opportunity.opportunitysupermarket.map((i, index) => (
                  <HStack justify="space-between" key={index}>
                    <Text>Supermarkets</Text>
                    <SupermarketAddress supermarketId={i.supermarketId} />
                  </HStack>
                ))}
              </Box>
            )}
          </Box> 
        ))}
      </VStack>
    </VStack>
  );
};

export default Earnings;

