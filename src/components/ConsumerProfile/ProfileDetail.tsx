import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import useAuthStore from "@/state-management/auth/store";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
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
import { FaRegUser } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProfileDetail = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();
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

  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    user?.profilePic || null
  );
  const [modalImage, setModalImage] = useState<string | ArrayBuffer | null>(
    user?.profilePic || null
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        setModalImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    number: z.string().optional(),
    profilePic: z.string().optional(),
  });

  type ProfileData = z.infer<typeof profileSchema>;
  const apiClient = new APIClient<ProfileData>("/users");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      number: user?.number || "",
      profilePic: user?.profilePic || "",
    },
  });

  const { mutate: updateProfile } = useMutation({
    mutationFn: (data: ProfileData) =>
      apiClient.update(user?.id || 0, {
        name: data.name,
        email: data.email,
        number: data.number,
        // profilePic: modalImage,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_profile"] });
      toast.success("Profile updated successfully");
      onEditClose();
    },
    onError: () => {
      toast.error("Failed to update profile");
    },
  });

  return (
    <Box bg="white" borderRadius="10px" boxShadow="md" overflow="hidden" pb={4}>
      <Box bg="primary" position="relative" p={4} h="70">
        {profileImage ? (
          <Image
            src={profileImage as string}
            alt="Profile"
            borderRadius="full"
            boxSize="100px"
            position="absolute"
            top="100%"
            left="12%"
            transform="translate(-50%, -50%)"
            border="4px solid white"
          />
        ) : (
          <Box
            borderRadius="full"
            boxSize="100px"
            position="absolute"
            top="100%"
            left="12%"
            transform="translate(-50%, -50%)"
            border="4px solid white"
            bg="gray.200"
          >
            <Icon
              as={FaRegUser}
              boxSize="50px"
              bg="gray.200"
              color="gray.500"
              position="absolute"
              top="45%"
              left="49%"
              transform="translate(-50%, -50%)"
            />
          </Box>
        )}
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4} mr={4}>
        <Text fontSize="xl" fontWeight="bold" ml="40">
          {user?.name}
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
            <Text color="gray.800">{user?.name?.split(" ")[0]}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Email:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.email}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Phone number:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.number}</Text>
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
                        position="relative"
                      >
                        <Input
                          type="file"
                          accept="image/*"
                          display="none"
                          id="modal-image-upload"
                          onChange={handleImageChange}
                        />
                        {modalImage ? (
                          <Image
                            src={modalImage as string}
                            alt="Profile"
                            borderRadius="md"
                            boxSize="full"
                            objectFit="cover"
                            border="4px solid white"
                          />
                        ) : (
                          <Box
                            borderRadius="md"
                            boxSize="full"
                            border="4px solid white"
                            bg="gray.200"
                          >
                            {user?.profilePic}
                          </Box>
                        )}
                        <Button
                          position="absolute"
                          bottom={2}
                          right={2}
                          variant="outline"
                          colorScheme="teal"
                          onClick={() =>
                            document
                              .getElementById("modal-image-upload")
                              ?.click()
                          }
                        >
                          Upload Photo
                        </Button>
                      </Box>
                      <Text>{user?.name}</Text>
                    </VStack>
                    <Stack spacing={2} flex="1">
                      <Text fontWeight="medium" color="gray.600">
                        Full name:
                      </Text>
                      <Input
                        placeholder="Please enter your full name"
                        {...register("name")}
                        bgColor="#EDF2F6"
                        isInvalid={!!errors.name}
                      />
                      {errors.name && (
                        <Text color="red.500" fontSize="sm">
                          {errors.name.message}
                        </Text>
                      )}
                      <Text fontWeight="medium" color="gray.600">
                        Email:
                      </Text>
                      <Input
                        placeholder="Please enter your email"
                        {...register("email")}
                        bgColor="#EDF2F6"
                        isInvalid={!!errors.email}
                      />
                      {errors.email && (
                        <Text color="red.500" fontSize="sm">
                          {errors.email.message}
                        </Text>
                      )}
                      <Text fontWeight="medium" color="gray.600">
                        Phone number:
                      </Text>
                      <Input
                        placeholder="Please enter your phone number"
                        {...register("number")}
                        bgColor="#EDF2F6"
                        isInvalid={!!errors.number}
                      />
                      {errors.number && (
                        <Text color="red.500" fontSize="sm">
                          {errors.number.message}
                        </Text>
                      )}
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
                onClick={handleSubmit((data) => updateProfile(data))}
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
    </Box>
  );
};

export default ProfileDetail;
