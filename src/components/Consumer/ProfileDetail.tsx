import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Button,
    Image,
    Flex,
    Grid,
    Text,
    VStack,
    Center,
    InputGroup,
    InputLeftAddon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@chakra-ui/react";
  
  import { useState } from "react";
  
  const ProfileDetail = () => {
    const [isEditable, setIsEditable] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const toggleEdit = () => {
      setIsEditable((prev) => !prev);
    };
  
    return (
      <>
        <Box
          my={9}
          ml="7%"
          w="86%"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          p={8}
        >
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading size="md" color="primary">
              Profile Details
            </Heading>
            <Flex>
              {!isEditable && (
                <Button
                  w={90}
                  mr={4}
                  onClick={toggleEdit}
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
                  Edit
                </Button>
              )}
              <Button
                w={160}
                mr={10}
                onClick={onOpen}
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
          </Flex>
          <FormControl isRequired>
            <Grid templateColumns="40% 60%" p={10} pb={20}>
              <VStack spacing={4} align="center" justify="center">
                <Box textAlign="center">
                  <Center>
                    <Image
                      boxSize="200px"
                      objectFit="cover"
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                      mb={4}
                    />
                  </Center>
                  <Text fontSize="lg" fontWeight="semibold">
                    Name
                  </Text>
                </Box>
              </VStack>
              <VStack spacing={4} align="stretch" pl={10}>
                <FormControl id="full-name">
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="Please enter your full name"
                    isReadOnly={!isEditable}
                    bg="background"
                  />
                </FormControl>
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input
                    placeholder="Please enter your username"
                    isReadOnly={!isEditable}
                    bg="background"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="Email"
                    placeholder="Please enter your email"
                    isReadOnly={!isEditable}
                    bg="background"
                  />
                </FormControl>
                <FormControl id="phone-number">
                  <FormLabel>Phone Number</FormLabel>
                  <InputGroup bg="background">
                    <InputLeftAddon>+94</InputLeftAddon>
                    <Input
                      type="tel"
                      placeholder="Please enter your phone number"
                      isReadOnly={!isEditable}
                    />
                  </InputGroup>
                </FormControl>
              </VStack>
            </Grid>
          </FormControl>
          <Flex justifyContent="flex-end">
            {isEditable && (
              <Button
                w={160}
                mr={4}
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
                Update Profile
              </Button>
            )}
            {isEditable && (
              <Button
                w={90}
                mr={10}
                onClick={toggleEdit}
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
                Reset
              </Button>
            )}
          </Flex>
        </Box>
  
        {/* Password Change Modal */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
          <ModalOverlay backdropFilter="blur(5px)" />
          <ModalContent borderRadius="15px">
            <ModalHeader textAlign="center">Change Password</ModalHeader>
            <ModalBody>
              <FormControl isRequired>
                <VStack spacing={4} align="stretch">
                  <FormControl id="current-password">
                    <Input
                      type="password"
                      placeholder="Current Password"
                      bg="background"
                    />
                  </FormControl>
                  <FormControl id="new-password">
                    <Input
                      type="password"
                      placeholder="New Password"
                      bg="background"
                    />
                  </FormControl>
                  <FormControl id="confirm-password">
                    <Input
                      type="password"
                      placeholder="Confirm New Password"
                      bg="background"
                    />
                  </FormControl>
                </VStack>
              </FormControl>
            </ModalBody>
            <ModalFooter gap={3}>
              <Button
                w="full"
                mb={2}
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
                onClick={onClose}
              >
                Update Password
              </Button>
              <Button
                w="full"
                mb={2}
                onClick={onClose}
                variant="outline"
                color="primary"
                borderColor="primary"
                border="2px"
                borderRadius="10px"
                fontSize="15px"
                fontWeight="bold"
                bg="white"
                _hover={{ bg: "primary", color: "white" }}
                _active={{
                  bg: "primary",
                  color: "white",
                  transform: "scale(0.98)",
                  borderColor: "primary",
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ProfileDetail;
  