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

import FaceImage from "../../assets/CourierCompany/Avatar3.svg";
import MiddleContainer from "../../components/Containers/MiddleContainer";
import BikeImage from "../../assets/CourierCompany/bike 1.svg";
import FaceImage2 from "../../assets/CourierCompany/Avatar 1.svg";
import FaceImage3 from "../../assets/CourierCompany/Avatar2.svg";
import FaceImage4 from "../../assets/CourierCompany/Avatar4.svg";

interface DeliveryPerson {
  name: string;
  nic: string;
  phone: string;
  vehicleType: string;
  vehicleName: string;
  vehicleNumber: string;
  vehicleColor: string;
  avatar: string;
  vehicleImage: string;
}

const Request = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPerson, setSelectedPerson] = useState<DeliveryPerson>();

  // Sample data for delivery personnel
  const deliveryPersonnel: DeliveryPerson[] = [
    {
      name: "Kaveesha Hettige",
      nic: "763344567V",
      phone: "+947788905",
      vehicleType: "Motor Cycle",
      vehicleName: "TVS ntorq 125",
      vehicleNumber: "VQ 3344",
      vehicleColor: "",
      avatar: FaceImage, // Replace with actual image URL
      vehicleImage: BikeImage, // Replace with actual image URL
    },
    {
      name: "Kaveesha Hettige",
      nic: "763344567V",
      phone: "+947788905",
      vehicleType: "Motor Cycle",
      vehicleName: "TVS ntorq 125",
      vehicleNumber: "VQ 3344",
      vehicleColor: "",
      avatar: FaceImage2, // Replace with actual image URL
      vehicleImage: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Kaveesha Hettige",
      nic: "763344567V",
      phone: "+947788905",
      vehicleType: "Motor Cycle",
      vehicleName: "TVS ntorq 125",
      vehicleNumber: "VQ 3344",
      vehicleColor: "",
      avatar: FaceImage3, // Replace with actual image URL
      vehicleImage: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Kaveesha Hettige",
      nic: "763344567V",
      phone: "+947788905",
      vehicleType: "Motor Cycle",
      vehicleName: "TVS ntorq 125",
      vehicleNumber: "VQ 3344",
      vehicleColor: "",
      avatar: FaceImage4, // Replace with actual image URL
      vehicleImage: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];

  const handleViewClick = (person: DeliveryPerson) => {
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
          {deliveryPersonnel.map((person, index) => (
            <Box
              key={index}
              p={4}
              boxShadow="md"
              borderRadius="md"
              bg="white"
              display="flex"
              alignItems="center"
              w="100%"
            >
              <Avatar src={person.avatar} size="lg" />
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
          <ModalContent maxW="500px">
            <ModalHeader>Driver Request</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                display="flex"
                alignItems="center"
                mb={4}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
              >
                <Avatar src={selectedPerson.avatar} size="xl" mr={4} />
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    Driver Personal Details
                  </Text>
                  <Grid templateColumns="150px 1fr" gap={2}>
                    <Text>Name:</Text>
                    <Text>{selectedPerson.name}</Text>

                    <Text>NIC Number:</Text>
                    <Text>{selectedPerson.nic}</Text>

                    <Text>Contact No:</Text>
                    <Text>{selectedPerson.phone}</Text>
                  </Grid>
                </Box>
              </Box>
              <Box
                display="flex"
                mb={4}
                borderWidth="1px"
                borderRadius="lg"
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
                    <Text>{selectedPerson.vehicleColor}</Text>
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
            <ModalFooter>
              <Button
                type="submit"
                width="200px"
                bg="white"
                color="primary"
                mt={3}
                mr={10}
                border="2px"
                borderColor="primary"
              >
                Decline
              </Button>
              <Button
                type="submit"
                width="200px"
                bg="primary"
                color="white"
                mt={3}
                ml={2}
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
