import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import APIClient from "@/services/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MiddleContainer from "../../components/Containers/MiddleContainer";

interface DriverRequest {
  id: number;
  name: string;
  nic: string;
  email: string;
  contactNo: string;

  courierCompany: string;
  vehicleName: string;
  vehicleNumber: string;
  vehicleType: string;
  vehicleColor: string;

  profilePic: string;
  vehicleImage: string;
}

const apiClient = new APIClient<DriverRequest>("/driver_requests");
const acceptApiClient = new APIClient<{ id: number }>("/accept_driver_request");

const Request = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPerson, setSelectedPerson] = useState<DriverRequest>();
  const queryClient = useQueryClient();

  const driverRequests = useQuery({
    queryKey: ["driver_requests"],
    queryFn: () => apiClient.getAll({}),
  });

  const { mutate: acceptDriverRequest } = useMutation({
    mutationFn: () =>
      acceptApiClient.create({ id: selectedPerson?.id || -1 }).then(() => {
        onClose();
        queryClient.invalidateQueries({ queryKey: ["driver_requests"] });
      }),
  });

  const handleViewClick = (person: DriverRequest) => {
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
              <Avatar src={person.profilePic} size="lg" />
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="40vw">
            <ModalHeader>Driver Request</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                display="flex"
                alignItems="center"
                mb={4}
                borderWidth={1}
                borderRadius={15}
                boxShadow={"md"}
                p={4}
              >
                <Avatar src={selectedPerson.profilePic} size="xl" mr={4} />
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={5}>
                    Driver Personal Details
                  </Text>
                  <Grid templateColumns="150px 1fr" gap={2}>
                    <Text>Name:</Text>
                    <Text>{selectedPerson.name}</Text>

                    <Text>NIC Number:</Text>
                    <Text>{selectedPerson.nic}</Text>

                    <Text>Contact No:</Text>
                    <Text>{selectedPerson.contactNo}</Text>
                  </Grid>
                </Box>
              </Box>
              <Box
                display="flex"
                mb={4}
                borderWidth={1}
                borderRadius={15}
                boxShadow={"md"}
                p={4}
              >
                <Box flex="1">
                  <Text fontSize="lg" fontWeight="bold">
                    Vehicle Details
                  </Text>
                  <Grid templateColumns="150px 1fr" gap={2}>
                    <Text>Vehicle Type:</Text>
                    <Text>{selectedPerson.vehicleType}</Text>

                    <Text>Vehicle Name:</Text>
                    <Text>{selectedPerson.vehicleName}</Text>

                    <Text>Vehicle Number:</Text>
                    <Text>{selectedPerson.vehicleNumber}</Text>

                    <Text>Vehicle Color:</Text>
                    <Box w={20} h={8} bg={selectedPerson.vehicleColor}></Box>
                  </Grid>
                </Box>
                <Image
                  mt={4}
                  src={selectedPerson.vehicleImage}
                  boxSize="150px"
                  ml={2}
                />
              </Box>
            </ModalBody>
            <ModalFooter justifyContent={"center"} >
              <Button
                type="submit"
                width="200px"
                bg="white"
                color="primary"
                mt={3}
                mr={10}
                border="2px"
                borderColor="primary"
                onClick={onClose}
              >
                Back
              </Button>
              <Button
                type="submit"
                width="200px"
                bg="primary"
                color="white"
                mt={3}
                ml={2}
                onClick={() => acceptDriverRequest()}
              >
                Accept
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </MiddleContainer>
  );
};

export default Request;
