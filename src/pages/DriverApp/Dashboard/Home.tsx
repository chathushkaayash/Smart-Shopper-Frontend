import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { FaTruck } from "react-icons/fa";

const Home = () => {
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
      title: "Order Requests",
      value: "10+",
      icon: FaTruck,
      color: "rgb(244, 114, 30)",
      background: "rgba(244, 114, 30,0.1)",
    },
    {
      title: "Today's Trips",
      value: "25",
      icon: FaTruck,
      color: "rgb(255,3,255)",
      background: "rgba(255,3,255,0.1)",
    },
  ];

  return (
    <>
      <Center h="14vh">
        <Button colorScheme="red" size="lg">
          Go Offline
        </Button>
      </Center>
      <VStack bg="background" h="80vh" px="8vw" gap="4vh">
        <HStack w="full" h="20vh" justifyContent={"space-between"} mt="2vh">
          {cards.map((card, index) => (
            <VStack
              w="45%"
              p={4}
              borderRadius="md"
              boxShadow="md"
              h="18vh"
              key={index}
              bg="white"
              justifyContent={"space-between"}
            >
              <Icon
              rounded={"lg"}
                as={card.icon}
                w={16}
                h={16}
                color={card.color}
                bg={card.background}
                p={4}
              />
              <Heading size="sm" color="gray" lineHeight={1}>
                {card.title}
              </Heading>
              <Text fontSize="4xl" fontWeight="700" lineHeight={1}>
                {card.value}
              </Text>
            </VStack>
          ))}
        </HStack>
        <Box
          w="full"
          borderRadius="md"
          boxShadow="md"
          py="10vh"
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
      </VStack>
    </>
  );
};

export default Home;
