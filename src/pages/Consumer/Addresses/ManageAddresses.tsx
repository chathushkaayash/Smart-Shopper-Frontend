import MiddleContainer from "@/components/Containers/MiddleContainer";
import useAddresses from "@/services/Addresses/useAddresses";
import useDeleteAddress from "@/services/Addresses/useDeleteAddress";
import useUpdateDefaultAddress from "@/services/Addresses/useUpdateDefaultAddress";
import { BaseAddress } from "@/services/types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FaArrowLeft } from "react-icons/fa6";
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
  Tr,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const ManageAddresses = () => {
  const addresses = useAddresses();
  const navigate = useNavigate();

  // default address has the max priority
  const allAddresses: BaseAddress[] = [...(addresses.data?.results || [])];
  let defaultAddress: number = -1;
  if (allAddresses.length > 0) {
    defaultAddress = allAddresses.sort((a, b) => b.priority - a.priority)[0].id;
  }

  const updateDefaultAddress = useUpdateDefaultAddress();
  const deleteAddress = useDeleteAddress();

  const BackToPage = () => {
    navigate("/profile"); 
  };
  return (
    <MiddleContainer>
      <FaArrowLeft onClick={BackToPage} fontSize={25} style={{ margin: "10px 0px 0px 10px", cursor: "pointer" }}/>
      <Box mx={"4vw"} mb={"5vh"} mt={"2vh"}>
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
                  <EditIcon
                    verticalAlign={"center"}
                    cursor="pointer"
                    boxSize={4}
                    onClick={() => navigate(`/profile/addresses/update/${address.id}`)}
                  />
                </Td>
                <Td px={6} py={4}>
                  <DeleteIcon
                    verticalAlign={"center"}
                    cursor="pointer"
                    boxSize={4}
                    _hover={{ color: "red.600" }}
                    onClick={() => {
                      deleteAddress.mutate(address);
                    }}
                  />
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
