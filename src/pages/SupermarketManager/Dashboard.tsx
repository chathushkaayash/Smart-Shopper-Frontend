import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

import OrderTable from "@/components/OrderTable";

const AdminMain = () => {
  const customerCards = [
    {
      title: "Total Orders",
      value: "50",
      icon: IoBag,
      mainColor: "orange",
      color: "orange.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "New Orders",
      value: "20",
      icon: IoBag,
      mainColor: "red",
      color: "red.100",
      percentage: "8.5% Up from yesterday",
    },
    {
      title: "Completed Orders",
      value: "12",
      icon: IoBag,
      mainColor: "green",
      color: "green.100",
      percentage: "8.5% Down from yesterday",
    },
  ];

  return (
    <Flex w="full">
      <Box w="full">
        <VStack gap="8vh" my="5vh" px="2vw" w="full">
          <HStack justifyContent="space-between" w="full" gap={6}>
            {customerCards.map((card, index) => (
              <Card
                px={3}
                key={index}
                h="30vh"
                w="clamp(25vw,25vw,25vw)"
                shadow="lg"
                border="1px solid "
                borderColor="gray.200"
                borderRadius={15}
              >
                <CardBody>
                  <HStack>
                    <Stack w="80%">
                      <Heading size="lg">{card.title}</Heading>
                      <Text fontSize="xl">{card.value}</Text>
                    </Stack>
                    <Icon
                      as={card.icon}
                      boxSize={8}
                      color={card.mainColor}
                      bg={card.color}
                      borderRadius={5}
                    />
                  </HStack>
                </CardBody>
                <CardFooter>
                  <Flex>
                    <Icon
                      as={AiOutlineRise}
                      boxSize={5}
                      color="green.400"
                      borderRadius={5}
                    />
                    <Text fontSize="sm" color="green.400" pl={2}>
                      {card.percentage}
                    </Text>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
          </HStack>

          <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
            <Flex justifyContent="space-between">
              <Heading as="h3" size="lg" mb={4}>
                Orders
              </Heading>
            </Flex>
            <OrderTable />
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminMain;
