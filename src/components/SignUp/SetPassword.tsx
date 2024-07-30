import {
    Box,
    Center,
    Grid,
    GridItem,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa6";

import GroceryImage from "../../assets/signup-login/add-to-cart.svg";

import { RegisterForm } from "@/pages/SignUp";
import APIClient from "@/services/api-client";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LinkButton from "../Buttons/LinkButton";
import SubmitButton from "../Buttons/SubmitButton";
import ErrorText from "../Errors/ErrorText";
import LoginInput from "../Inputs/LoginInput";

const apiClient = new APIClient<RegisterForm | string>("/generate_otp");

const schema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

interface Props {
  registerForm: RegisterForm | null;
  setRegisterForm: (s: RegisterForm) => void;
  setStage: (s: number) => void;
}

const SetPassword = ({ registerForm, setRegisterForm, setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const sendOtp = (data: RegisterForm) => {
    apiClient
      .create({
        name: data.name,
        email: data.email,
        contactNumber: "+94" + data.contactNumber.slice(1),
        password: data.password,
      })
      .then((res) => {
        if (res === "Success") {
          console.log("OTP Sent");
          setStage(2);
        }
      });
  };

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "5fr 6fr", xl: "1fr 1fr" }}
      h="100%"
    >
      <GridItem h={{ base: "35vh", md: "100%" }}>
        <Center h="100%" p="2vw">
          <Image src={GroceryImage} w={{ base: "60vw", md: "25vw" }} />
        </Center>
      </GridItem>

      <GridItem px="2vw">
        <Stack
          h={{ base: "auto", md: "full" }}
          w={{ base: "80vw", md: "full" }}
          justifyContent="center"
          mx="auto"
        >
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text fontSize="lg" fontWeight="bold">
              {" "}
              SignUp to
            </Text>
            <Box display="inline" fontSize="2xl" fontWeight="bold">
              <Text as="span">Smart</Text>
              <Text color="primary" as="span">
                Shopper
              </Text>
            </Box>
          </VStack>

          <form
            onSubmit={handleSubmit((data) => {
              const finalForm: RegisterForm = {
                name: registerForm?.name || "",
                email: registerForm?.email || "",
                contactNumber: registerForm?.contactNumber || "",
                password: data.password,
              };
              sendOtp(finalForm);
              setRegisterForm(finalForm);
            })}
          >
            <LoginInput
              register={register("password")}
              type="password"
              placeholder="Password"
              icon={FaLock}
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
            <LoginInput
              register={register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              icon={FaLock}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
            <SubmitButton className="my-3">Sign Up</SubmitButton>
          </form>

          <Text mt={3} fontSize={14}>
            Do you have an account?{" "}
            <LinkButton to="/login" className="mt-3 ml-1">
              Login
            </LinkButton>
          </Text>

          {/* <Flex align="center" mt={3}>
              <Box flex="1" h="1px" bg="gray.300"></Box>
              <Box px={2}>or</Box>
              <Box flex="1" h="1px" bg="gray.300"></Box>
            </Flex>
  
            <HStack marginTop={2}>
              <LoginButton text={{ base: "", md: "Google" }} image={GoogleIcon} />
              <LoginButton
                text={{ base: "", md: "Facebook" }}
                image={FacebookIcon}
              />
            </HStack> */}
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default SetPassword;
