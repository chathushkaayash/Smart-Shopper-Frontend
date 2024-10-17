import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

import useSuperMarkets from "@/services/Supermarket/useSupermarkets";

interface Supermarket {
  id: number;
  name: string;
  location: string;
  address: string;
  contactNo: string;
  logo: string;
  supermarketmanagerId: number;
}

const Supermarkets = () => {
  const { data, isLoading, isError } = useSuperMarkets();
  console.log(data);
  const supermarkets: Supermarket[] = Array.isArray(data) ? data : [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading supermarkets</div>;

  return (
    <VStack gap={"8vh"} fontWeight="bold" my="5vh" px={10}>
      <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
        <Flex w="full" gap={5} align={"center"} justify={"space-between"}>
          <Heading as="h3" size="md" my={4}>
            Top Products
          </Heading>
          <Button bg="primary" size="sm" color="white" p={4}>
            Add Supermarket
          </Button>
        </Flex>

        <TableContainer
          // width={{ base: "100%", lg: "90%" }}
          mt={10}
          justifyContent="center"
          w="full"
        >
          <Table size="lg" align="center">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Location</Th>
                <Th>Address</Th>
                <Th>Contact Number</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {supermarkets.map((supermarket) => (
                <Tr key={supermarket.id}>
                  <Td>{supermarket.name}</Td>
                  <Td>{supermarket.supermarketmanagerId}</Td>
                  <Td>{supermarket.contactNo}</Td>
                  <Td>250</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Center>
          <Box display="flex" justifyContent="flex-end" mr="60px" my={2}>
            <Button bg="primary" size="sm" color="white" p={4}>
              See More
            </Button>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
};

export default Supermarkets;
