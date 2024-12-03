import MiddleContainer from "@/components/Containers/MiddleContainer";
import { getImageUrl } from "@/lib/utils";
import useDrivers from "@/services/Driver/useDrivers";
import { Driver } from "@/services/types";

import {
  Avatar,
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Drivers = () => {
  const drivers = useDrivers();
  const navigate = useNavigate();
  const handleViewMore = (person: Driver) => {
    navigate("/PersonalDetails/"+person.id);
  };
  return (
    <MiddleContainer width="90vw" mt={10}>
      <Box p={4} borderRadius="md" bg="white" mt={4}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Delivery Personal Details
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Contact Number</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {drivers.data?.results.map((driver, index) => (
              <Tr key={index}>
                <Td>
                  <Avatar
                    src={getImageUrl(driver.user.profilePic)}
                    size="sm"
                    mr={2}
                  />
                  {driver.user.name}
                </Td>
                <Td>{driver.user.number}</Td>
                <Td>{driver.user.email}</Td>
                <Td>
                  <Button
                    colorScheme="orange"
                    onClick={() => handleViewMore(driver)}
                  >
                    View More
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </MiddleContainer>
  );
};

export default Drivers;
