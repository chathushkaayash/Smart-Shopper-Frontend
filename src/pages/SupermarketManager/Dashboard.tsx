
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,

  Text,

  VStack
} from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

import OrderList from "@/components/OrderTable";

const AdminMain = () => {
  const cutomerCards = [
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
      {/* <Box w="16vw" top="10vh" bg="white">
        <SideBar/>
      </Box> */}
      <Box w="full" px="2%">
      <VStack
      gap="8vh"
      my="5vh"
      px="2vw"
      // justifyContent="center"
      w="full"
    >
      <HStack justifyContent="space-between" w="full" gap={6}>
        {cutomerCards.map((card, index) => (
          <Card px={3}  key={index}>
            <CardBody >
              <Flex gap={20}>
                <Heading size="lg">{card.title}</Heading>
                <Icon
                  as={card.icon}
                  boxSize={8}
                  color={card.mainColor}
                  bg={card.color}
                  borderRadius={5}
                />
              </Flex>
              <Text fontSize="xl">{card.value}</Text>
              <Flex mt={2}>
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
            </CardBody>
          </Card>
        ))}
      </HStack>

      <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Flex justifyContent="space-between" >
          <Heading as="h3" size="lg" mb={4}>
            Orders
          </Heading>
        </Flex>

        {/* <TableContainer
          width={{ base: "100%", lg: "90%" }}
          ml={{ base: "0%", lg: "1%" }}
        > */}

          <OrderList />
          
        {/* </TableContainer> */}
      </Box>

      {/* --------------- POP UP --------------- */}
      
    </VStack> 

        
      </Box>
    </Flex>
  );
};

export default AdminMain;
