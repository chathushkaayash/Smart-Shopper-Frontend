import { BaseUser } from "@/services/types";
import useUpdateProfile from "@/services/User/useUpdateProfile";
import useUpdateProfilePicture from "@/services/User/useUpdateProfilePicture";
import {
  Box,
  Button,
  Flex,
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
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { getImageUrl } from "@/lib/utils";
import React from "react";
import { z } from "zod";

interface Props {
  user: BaseUser;
  isEdit: boolean;
  onEditClose: () => void;
  onForgetPassword: () => void;
}

const UpdateProfile = ({
  user,
  isEdit,
  onEditClose,
  onForgetPassword,
}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const updateProfile = useUpdateProfile();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      updateProfilePicture.mutate(file);
    }
  };
  const updateProfilePicture = useUpdateProfilePicture({
    userId: user?.id || 0,
  });
  const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    number: z.string().optional(),
  });

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
    },
  });

  return (
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
                      {/* --------------- Profile image upload --------------- */}
                      {/* <Form onSubmit={() => {}}> */}
                      <Input
                        type="file"
                        display="none"
                        ref={inputFileRef}
                        onChange={handleImageUpload}
                      />
                      <Image
                        objectFit={"cover"}
                        src={getImageUrl(user?.profilePic)}
                        alt="Profile Image"
                        onClick={() => inputFileRef.current?.click()}
                        cursor={"pointer"}
                      />
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
              onClick={handleSubmit((data) => updateProfile.mutate(data))}
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
  );
};

export default UpdateProfile;
