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

const Earnings = () => {
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
        <Button onClick={()=>navigate("../driver/deliveries")} variant="link" color="primary">
          Show more
        </Button>
      </HStack>

      {/********************* Delivered Item Card *********************/}

      <VStack spacing={4} mt={2} w="full">
        <Box bg="white" borderRadius="lg" shadow="md" p={4} w="full">
          <HStack>
            <VStack align="start"  flex="1">
              <Text fontWeight="bold">Warrington, PA 76102</Text>
              <Text color="gray.500" fontSize="sm">
                Yesterday at 16:34
              </Text>
            </VStack>
            <Text fontWeight="bold" color="red.500">
              Rs 100
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
                <Text>100</Text>
              </HStack>
              {/* <Text>Trip Cost</Text>
              <Text>No of Supermarkets</Text>
              <Text>Supermarkets</Text> */}
            </Box>
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

export default Earnings;
