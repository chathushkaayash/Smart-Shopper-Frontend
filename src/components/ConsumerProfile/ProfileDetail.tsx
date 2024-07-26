import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack, 
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

const ProfileDetail = () => {
  const {
    isOpen: isEdit,
    onOpen: onEdit,
    onClose: onEditClose,
  } = useDisclosure();

  const {
    isOpen: isForgetPassword,
    onOpen: onForgetPassword,
    onClose: onForgetPasswordClose,
  } = useDisclosure();

  return (
    <Box bg="white" borderRadius="10px" boxShadow="md" overflow="hidden" pb={4}>
      <Box bg="primary" position="relative" p={4} h="70">
        <HStack>
          <Image
            src="https://via.placeholder.com/100"
            alt="Profile"
            borderRadius="full"
            boxSize="100px"
            position="absolute"
            top="100%"
            left="12%"
            transform="translate(-50%, -50%)"
            border="4px solid white"
          />
        </HStack>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4} mr={4}>
        <Text fontSize="xl" fontWeight="bold" ml="40">
          Jessica Sympson
        </Text>
        <Button
          w="auto"
          mr={4}
          mt={4}
          onClick={onEdit}
          variant="outline"
          color="white"
          borderColor="primary"
          border="2px"
          borderRadius="10px"
          fontSize="15px"
          fontWeight="bold"
          bg="primary"
          _hover={{ bg: "white", color: "primary" }}
          _active={{
            bg: "white",
            color: "primary",
            transform: "scale(0.98)",
            borderColor: "primary",
          }}
        >
          Edit Profile
        </Button>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10} ml={4}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Username:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Jessica</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Email:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">bimsarajayadewa@gmail.com</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Phone number:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">0719944045</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Country:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Sri Lanka</Text>
          </GridItem>
        </Grid>
      </VStack>

      {/* Edit Personal Details Modal */}
      <Modal
        isOpen={isEdit}
        onClose={onEditClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="15px" maxW="60vw">
          <ModalHeader textAlign="left" fontWeight="semibold" fontSize="20">
            <Flex justifyContent="space-between" mt={3}>
              Update Profile
              <Button
                w="auto"
                mr={2}
                mt={0}
                onClick={onForgetPassword}
                variant="outline"
                color="white"
                borderColor="primary"
                border="2px"
                borderRadius="10px"
                fontSize="15px"
                fontWeight="bold"
                bg="primary"
                _hover={{ bg: "white", color: "primary" }}
                _active={{
                  bg: "white",
                  color: "primary",
                  transform: "scale(0.98)",
                  borderColor: "primary",
                }}
              >
                Forget Password
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Box margin="0 auto">
              <Box borderRadius="md" width="100%">
                <Stack spacing={0}>
                  <Flex justifyContent="center" alignItems="center">
                    <VStack align="center" spacing={4} mr={8}>
                      <Box
                        borderWidth="1px"
                        borderRadius="md"
                        width="250px"
                        height="250px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={2}
                        bgColor="#EDF2F6"
                      >
                        <Text>Upload your photo</Text>
                      </Box>
                      <Text>Jayadewa T.B. A</Text>
                    </VStack>
                    <Stack spacing={2} flex="1">
                      <Text fontWeight="medium" color="gray.600">
                        Full name:
                      </Text>
                      <Input
                        placeholder="Please enter your full name"
                        bgColor="#EDF2F6"
                      />
                      <Text fontWeight="medium" color="gray.600">
                        Username:
                      </Text>
                      <Input
                        placeholder="Please enter your username"
                        bgColor="#EDF2F6"
                      />
                      <Text fontWeight="medium" color="gray.600">
                        Email:
                      </Text>
                      <Input
                        placeholder="Please enter your email"
                        bgColor="#EDF2F6"
                      />
                      <Text fontWeight="medium" color="gray.600">
                        Phone number:
                      </Text>
                      <Input
                        placeholder="Please enter your phone number"
                        bgColor="#EDF2F6"
                      />
                    </Stack>
                  </Flex>
                </Stack>
              </Box>
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
                onClick={onEditClose}
              >
                Update
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
                onClick={onEditClose}
              >
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Forget Password Modal */}
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
                  <Input placeholder="Current Password" bgColor="#F5F5F5"/>
                  <Input placeholder="New Password" bgColor="#F5F5F5"/>
                  <Input placeholder="Confirm New Password" bgColor="#F5F5F5"/>
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
    </Box>
  );
};

export default ProfileDetail;
