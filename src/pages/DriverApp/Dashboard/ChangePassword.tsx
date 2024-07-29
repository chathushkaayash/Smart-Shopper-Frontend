import { Box, Text, VStack } from "@chakra-ui/react";
import SubmitButton from "@/components/Buttons/SubmitButton";
import LoginInput from "@/components/Inputs/LoginInput";

import { IoIosEyeOff } from "react-icons/io";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import ErrorText from "@/components/Errors/ErrorText";

const schema = z
  .object({
    oldpassword: z.string().min(1, "Password is required"),
    newpassword: z.string().min(1, "Password is required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newpassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type FormData = z.infer<typeof schema>;

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      <Text fontSize="md" color="gray" fontWeight="bold">
        Please enter your Password
      </Text>

      <VStack
        as="form"
        gap="2vh"
        px="10vw"
        justifyContent="space-between"
        onSubmit={handleSubmit(() => {})}
      >
        <Box w="full">
          <LoginInput
            register={register("oldpassword")}
            type="password"
            placeholder="Old Password"
            icon={IoIosEyeOff}
          />
          {errors.oldpassword && (
            <ErrorText>{errors.oldpassword.message}</ErrorText>
          )}
          <LoginInput
            register={register("newpassword")}
            type="password"
            placeholder="New Password"
            icon={IoIosEyeOff}
            outerClassName="!mt-5"
          />
          {errors.newpassword && (
            <ErrorText>{errors.newpassword.message}</ErrorText>
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
