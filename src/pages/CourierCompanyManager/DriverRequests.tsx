import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";

import { getImageUrl } from "@/lib/utils";
import useNonVerifiedDrivers from "@/services/Driver/useNonVerifiedDrivers";
import { NonVerifiedDriver } from "@/services/types";
import MiddleContainer from "../../components/Containers/MiddleContainer";
import DriverRequestPopup from "./DriverRequestPopup";

// interface DriverRequest {
//   id: number;
//   name: string;
//   nic: string;
//   email: string;
//   contactNo: string;

//   courierCompany: string;
//   vehicleName: string;
//   vehicleNumber: string;
//   vehicleType: string;
//   vehicleColor: string;

//   profilePic: string;
//   vehicleImage: string;
// }

const DriverRequests = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPerson, setSelectedPerson] = useState<NonVerifiedDriver>();

  const driverRequests = useNonVerifiedDrivers();

  const handleViewClick = (person: NonVerifiedDriver) => {
    setSelectedPerson(person);
    onOpen();
  };

  return (
    <MiddleContainer>
      <Heading as="h4" size="md" mt={7} pl={7}>
        Delivery Personal Requests
      </Heading>
      <Container maxW="1330px" mt={4}>
        <VStack spacing={6}>
          {driverRequests.data?.results.map((person, index) => (
            <Box
              key={index}
              p={4}
              boxShadow="md"
              borderRadius={15}
              bg="white"
              display="flex"
              alignItems="center"
              w="100%"
              borderWidth={1}
            >
              <Avatar src={getImageUrl(person.profilePic)} size="lg" />
              <Box ml={4} flex="1">
                <Text fontSize="lg" fontWeight="bold">
                  {person.name}
                </Text>
                <Text fontSize="sm">Vehicle: {person.vehicleName}</Text>
                <Text fontSize="sm">Type: {person.vehicleType}</Text>
              </Box>
              <Button
                colorScheme="orange"
                variant="outline"
                onClick={() => handleViewClick(person)}
              >
                View
              </Button>
            </Box>
          ))}
        </VStack>
      </Container>

      {selectedPerson && (
        <DriverRequestPopup
          selectedPerson={selectedPerson}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </MiddleContainer>
  );
};

export default DriverRequests;
