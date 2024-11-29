import APIClient from "@/services/api-client";
import useAuthStore from "@/state-management/auth/store";
import { z } from "zod";
import { toast } from "sonner";
import { IoIosEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import ErrorText from "@/components/Errors/ErrorText";
import LoginInput from "../Inputs/LoginInput";
import SubmitButton from "../Buttons/SubmitButton";
import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";

interface Props {
  isForgetPassword: boolean;
  onForgetPasswordClose: () => void;
}

const schema = z
  .object({
    oldPassword: z.string().min(1, "Password is required"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type FormData = z.infer<typeof schema>;

const apiClient = new APIClient<FormData>("/change_password");

const ForgetPasswordModel = ({
  isForgetPassword,
  onForgetPasswordClose,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const user = useAuthStore((state) => state.user);

  const { mutate } = useMutation({
    mutationFn: (data: FormData) =>
      apiClient.update(user?.id || 0, {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      }),
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: () => {
      toast.error("Failed to change password");
    },
  });
    
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
              <VStack
                as="form"
                gap="2vh"
                justifyContent="space-between"
                onSubmit={handleSubmit((data) => mutate(data))}
              >
                <Box w="full">
                  <LoginInput
                    register={register("oldPassword")}
                    type="password"
                    placeholder="Current Password"
                    icon={IoIosEyeOff}
                  />
                  {errors.oldPassword && (
                    <ErrorText>{errors.oldPassword.message}</ErrorText>
                  )}
                  <LoginInput
                    register={register("newPassword")}
                    type="password"
                    placeholder="New Password"
                    icon={IoIosEyeOff}
                    outerClassName="!mt-5"
                  />
                  {errors.newPassword && (
                    <ErrorText>{errors.newPassword.message}</ErrorText>
                  )}
                  <LoginInput
                    register={register("confirmPassword")}
                    type="password"
                    placeholder="Confirm Password"
                    icon={IoIosEyeOff}
                    outerClassName="!mt-5"
                  />
                  {errors.confirmPassword && (
                    <ErrorText>{errors.confirmPassword.message}</ErrorText>
                  )}
                </Box>
                <Flex justifyContent="flex-end" gap={4} mt={0}>
                  <SubmitButton borderRadius={10} onClick={onForgetPasswordClose}>Update Password</SubmitButton>
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
              </VStack>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ForgetPasswordModel;
