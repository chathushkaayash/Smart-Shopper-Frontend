import MiddleContainer from "@/components/Containers/MiddleContainer";
import useAddresses from "@/services/Addresses/useAddresses";
import useUpdateDefaultAddress from "@/services/Addresses/useUpdateDefaultAddress";
import { BaseAddress } from "@/services/types";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ManageAddresses = () => {
  const addresses = useAddresses();

  // default address has the max priority
  const allAddresses: BaseAddress[] = [...(addresses.data?.results || [])];
  let defaultAddress: number = -1;
  if (allAddresses.length > 0) {
    defaultAddress = allAddresses.sort((a, b) => b.priority - a.priority)[0].id;
  }

  const updateDefaultAddress = useUpdateDefaultAddress();

  return (
    <MiddleContainer>
      <Box mx={"4vw"} my={"5vh"}>
        <HStack justifyContent={"space-between"}>
          <Heading>Manage Addresses</Heading>
          <Link to="/profile/addresses/create">
            <Badge
              bg="gray.700"
              textColor="white"
              p={1}
              px={4}
              borderRadius="20"
            >
              <Text>Add New Address</Text>
            </Badge>
          </Link>
        </HStack>
        <Table
          mt={4}
          variant="simple"
          colorScheme="gray"
          width="100%"
          size="sm"
          textAlign="left"
        >
          <Thead
            fontSize="xs"
            textTransform="uppercase"
            bg="gray.50"
            color="gray.700"
          >
            <Tr>
              <Th px={6} py={3}>
                Name
              </Th>
              <Th px={6} py={3}>
                Address
              </Th>
              <Th px={6} py={3}>
                City
              </Th>
              <Th px={6} py={3}></Th>
              <Th px={6} py={3}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {addresses.data?.results.map((address, index) => (
              <Tr
                key={index}
                bg="white"
                borderBottom="1px"
                borderColor="gray.200"
                _hover={{ bg: "gray.50" }}
              >
                <Td px={6} py={4} fontWeight={"bold"}>
                  {address.addressName}
                </Td>
                <Td px={6} py={4}>
                  {address.address}
                </Td>
                <Td px={6} py={4}>
                  {address.city}
                </Td>
                <Td px={6} py={4} textAlign="center">
                  {defaultAddress === address.id ? (
                    <Badge
                      bg="primary"
                      textColor="white"
                      p={1}
                      px={4}
                      borderRadius="20"
                    >
                      <Text>Default</Text>
                    </Badge>
                  ) : (
                    <Badge
                      bg="gray"
                      cursor={"pointer"}
                      textColor="white"
                      p={1}
                      px={4}
                      borderRadius="20"
                      onClick={() => {
                        updateDefaultAddress.mutate(address);
                      }}
                    >
                      <Text>set as Default</Text>
                    </Badge>
                  )}
                </Td>
                <Td px={6} py={4}>
                  <Link to={"/orders/" + address.id}>
                    <DeleteIcon
                      verticalAlign={"center"}
                      cursor="pointer"
                      boxSize={4}
                      _hover={{ color: "red.600" }}
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </MiddleContainer>
  );
};

export default ManageAddresses;
