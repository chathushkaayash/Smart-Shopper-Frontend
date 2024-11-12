import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import useAcceptDriverRequest from "@/services/Driver/useAcceptDriverRequest";
import { NonVerifiedDriver } from "@/services/types";

interface Props {
  selectedPerson: NonVerifiedDriver;
  isOpen: boolean;
  onClose: () => void;
}

const DriverRequestPopup = ({ selectedPerson, isOpen, onClose }: Props) => {
  const acceptDriverRequest = useAcceptDriverRequest();

  console.log(selectedPerson.vehicleColor);

  return (
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
            px={6}
          >
            <Box flex="1">
              <Text fontSize="lg" fontWeight="bold">
                Vehicle Details
              </Text>
              <Grid templateColumns="150px 1fr" gap={2} px={2}>
                <Text>Vehicle Type:</Text>
                <Text>{selectedPerson.vehicleType}</Text>

                <Text>Vehicle Name:</Text>
                <Text>{selectedPerson.vehicleName}</Text>

                <Text>Vehicle Number:</Text>
                <Text>{selectedPerson.vehicleNumber}</Text>

                <Text>Vehicle Color:</Text>
                <Box
                  w={20}
                  h={8}
                  bg={selectedPerson.vehicleColor}
                  border={"1px solid"}
                ></Box>
              </Grid>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent={"center"}>
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
            onClick={() => {
              acceptDriverRequest.mutate(selectedPerson.id);
              onClose();
            }}
          >
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DriverRequestPopup;
