import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";

interface Props {
  isForgetPassword: boolean;
  onForgetPasswordClose: () => void;
}

const ForgetPasswordModel = ({
  isForgetPassword,
  onForgetPasswordClose,
}: Props) => {
    
  return (
    <Modal
      isOpen={isForgetPassword}
      onClose={onForgetPasswordClose}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent borderRadius="15px" maxW="30vw">
        <ModalHeader textAlign="left" fontWeight="semibold" fontSize="20">
          Change Password
        </ModalHeader>
        <ModalBody>
          <Box w="100%">
            <HStack>
              <VStack w="100%">
                <Input placeholder="Current Password" bgColor="#F5F5F5" />
                <Input placeholder="New Password" bgColor="#F5F5F5" />
                <Input placeholder="Confirm New Password" bgColor="#F5F5F5" />
              </VStack>
            </HStack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="flex-end" gap={4} mt={0}>
            <Button
              width="auto"
              bg="primary"
              color="white"
              borderColor={"primary"}
              borderWidth={1}
              _hover={{ bg: "white", color: "primary" }}
              _active={{ bg: "white", color: "primary" }}
              borderRadius="12px"
              onClick={onForgetPasswordClose}
            >
              Update Password
            </Button>
            <Button
              width="auto"
              bg="white"
              color="primary"
              borderColor={"primary"}
              borderWidth={1}
              _hover={{ bg: "primary", color: "white" }}
              _active={{ bg: "primary", color: "white" }}
              borderRadius="12px"
              onClick={onForgetPasswordClose}
            >
              Cancel
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ForgetPasswordModel;
