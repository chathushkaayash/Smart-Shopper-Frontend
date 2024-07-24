import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { RiArrowRightSLine } from "react-icons/ri";
import DriverDetailsPopup from "./DriveDetails";

interface AddDriverReviewProps {
  driverImage: string;
  driverName: string;
  courierCompany: string;
  driverID: number;
  driverNumber: string;
}

const AddDriverReview = ({
  driverImage,
  driverName,
  courierCompany,
  driverID,
  driverNumber,
}: AddDriverReviewProps) => {
  const [rating, setRating] = useState<number>(0);

  const {
    isOpen: isDriverOpen,
    onOpen: onDriverOpen,
    onClose: onDriverClose,
  } = useDisclosure();

  const handleRating = (index: number) => {
    setRating(index);
  };

  return (
    <Box  px={2} bg="white" borderRadius="24" mx="auto">
      <Flex alignItems="center" mb={4}>
        <Image
          src={driverImage}
          alt="Product Image"
          borderRadius="md"
          boxSize="90px"
          mr={4}
        />
        <VStack align="start">
          <HStack>
            <Text fontWeight="bold">{driverName}</Text>
            <Box onClick={onDriverOpen} cursor="pointer">
              <Button
                size="sm"
                color="primary"
                bg="white"
                borderWidth={2}
                borderColor="primary"
                borderRadius={10}
                _hover={{ bg: "#E46C0A", color: "#FFFFFF" }}
                _active={{
                  bg: "#E46C0A",
                  color: "#FFFFFF",
                  transform: "scale(0.98)",
                  borderColor: "#E46C0A",
                }}
              >
                Driver Details
                <RiArrowRightSLine size={27} />
              </Button>
            </Box>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            {courierCompany}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {driverID}
          </Text>
          <Text fontSize="semibold" color="black">
            {driverNumber}
          </Text>
        </VStack>
      </Flex>
      <Box mb={4}>
        <HStack justify="flex-end">
          <Text mb={1} mr={4} fontWeight="bold">
            Feedback
          </Text>
          {[1, 2, 3, 4, 5].map((index) => (
            <IconButton
              key={index}
              icon={<StarIcon w="1.5rem" h="1.5rem" />}
              aria-label={`Rate ${index} stars`}
              color={index <= rating ? "yellow.400" : "gray.300"}
              variant="unstyled"
              onClick={() => handleRating(index)}
            />
          ))}
        </HStack>
      </Box>
      <Box mb={2}>
        <Input placeholder="Review Title" mb={2} borderColor="gray.300" />
        <Textarea
          placeholder="If you have any additional feedback, please type it in here."
          borderColor="gray.300"
        />
      </Box>
      {/* Driver Details Modal */}
      <Modal
        isOpen={isDriverOpen}
        onClose={onDriverClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px">
          <ModalHeader textAlign="center" fontWeight="bold" fontSize="25">
            Driver Details
          </ModalHeader>
          <ModalBody>
            <DriverDetailsPopup />
          </ModalBody>
          <ModalFooter>
            <Flex width="100%" justifyContent="center" mt={-3}>
              <Button
                width="60%"
                bg="white"
                color="primary"
                borderColor={"primary"}
                borderWidth={1}
                _hover={{ bg: "primary", color: "white" }}
                _active={{ bg: "primary", color: "white" }}
                borderRadius="12px"
                onClick={onDriverClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddDriverReview;
