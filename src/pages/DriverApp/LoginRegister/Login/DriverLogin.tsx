import { Box, Image, Text, VStack } from "@chakra-ui/react";

import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

import Logo from "../../../../assets/logo.svg";
import LinkButton from "../../../../components/Buttons/LinkButton";
import SubmitButton from "../../../../components/Buttons/SubmitButton";
import ErrorText from "../../../../components/Errors/ErrorText";
import LoginInput from "../../../../components/Inputs/LoginInput";

import APIClient from "@/services/api-client";
import useAuthStore, {
  Credentials,
  LoginResponse
} from "@/state-management/auth/store";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const DriverLogin = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const validate = (data: FormData) => {
    const credentials: Credentials = {
      email_or_number: data.email,
      password: data.password,
    };
    const apiClient = new APIClient<LoginResponse>("/login");
    
    apiClient.login(credentials).then((res) => {
      login(res);
      navigate("/");
    });
  };

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      <VStack>
        <Image src={Logo} width="150px" />
        <Text fontSize="lg" fontWeight="bold">
          Welcome to
        </Text>
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text as="span">Smart</Text>
          <Text color="primary" as="span">
            Shopper
          </Text>
        </Box>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Please enter your login details
        </Text>
      </VStack>

      <VStack
        w="80vw"
        h="full"
        as="form"
        justifyContent="space-between"
        onSubmit={handleSubmit(validate)}
      >
        <Box w="full">
          <LoginInput
            register={register("email")}
            type="email"
            placeholder="Email"
            icon={FaEnvelope}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <LoginInput
            register={register("password")}
            type="password"
            placeholder="Password"
            icon={FaLock}
            outerClassName="!mt-5"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <LinkButton to="/forgot-password" className="mt-3 ml-1">
            Forgot Password?
          </LinkButton>
        </Box>

        <Box w="full">
          <SubmitButton borderRadius={10}>Login</SubmitButton>
        </Box>
      </VStack>
    </VStack>
  );
};

export default DriverLogin;
