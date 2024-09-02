import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import SubmitButton from "@/components/Buttons/SubmitButton";
import LoginInput from "@/components/Inputs/LoginInput";

import { IoIosEyeOff } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import ErrorText from "@/components/Errors/ErrorText";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import useAuthStore from "@/state-management/auth/store";
import { toast } from "sonner";

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

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
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
    <VStack pt="3vh" h="100vh" gap="4vh">
      <HStack w="full" pos="relative" left={-5} px="8vw">
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          onClick={() => navigate("/driver/account/edit")}
          cursor="pointer"
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
      </HStack>
      <Text fontSize="md" color="gray" fontWeight="bold">
        Please enter your Password
      </Text>

      <VStack
        as="form"
        gap="2vh"
        px="10vw"
        justifyContent="space-between"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <Box w="full">
          <LoginInput
            register={register("oldPassword")}
            type="password"
            placeholder="Old Password"
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

        <VStack w="80vw" py={10}>
          <SubmitButton borderRadius={10}>Change Password</SubmitButton>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ChangePassword;
