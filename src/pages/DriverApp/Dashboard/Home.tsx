import useOpportunities from "@/hooks/useOpportunities";
import { DateTime } from "@/utils/Time";
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
import moment from "moment";
import ReactApexChart from "react-apexcharts";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const pendingOpportunities = useOpportunities({
    status: "Pending",
  }).data?.results;

  const deliveredOpportunities = useOpportunities({
    status: "Delivered",
    month: "",
  }).data?.results;

  const acceptedOpportunity = useOpportunities({
    status: "Accepted",
    month: "",
  }).data?.results;

  const navigate = useNavigate();
  const monthlyDeliveries = Array(12).fill(0);

  const pendingTodayCount =
    pendingOpportunities && pendingOpportunities.length > 10
      ? "10+"
      : pendingOpportunities?.length || "None";

  const tripCount =
    deliveredOpportunities?.filter((opportunity) => {
      return DateTime.getMoment(opportunity.orderPlacedOn).isSame(
        moment(),
        "day"
      );
    }).length || "None";

  if (deliveredOpportunities) {
    deliveredOpportunities.map((opportunity) => {
      const monthIndex = opportunity.orderPlacedOn.month; // 0 is Jan, 11 is Dec
      monthlyDeliveries[monthIndex] += 1;
    });
  }

  const chartData = [
    {
      name: "Deliveries",
      data: monthlyDeliveries,
    },
  ];
  console.log(monthlyDeliveries);
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
      value: pendingTodayCount,
      icon: FaTruck,
      color: "rgb(244, 114, 30)",
      background: "rgba(244, 114, 30,0.1)",
    },
    {
      title: "Today's Trips",
      value: tripCount,
      icon: FaTruck,
      color: "rgb(255,3,255)",
      background: "rgba(255,3,255,0.1)",
    },
  ];

  return (
    <>
      <Center h="14vh">
        <Button
          colorScheme={acceptedOpportunity?.length ? "yellow" : "red"}
          size="lg"
          onClick={() =>
            acceptedOpportunity?.length
              ? navigate(
                  "/driver/opportunities/viewmap/" + acceptedOpportunity[0].id
                )
              : navigate("/driver/opportunities")
          }
        >
          {acceptedOpportunity?.length ? "Ongoing Orders" : "Let's get started"}
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
          {deliveredOpportunities && (
            <ReactApexChart
              options={options}
              series={chartData}
              type="area"
              width="100%"
            />
          )}
        </Box>
      </VStack>
    </>
  );
};

export default Home;
