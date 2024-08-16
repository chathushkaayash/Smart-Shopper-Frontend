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
import { FaEnvelope, FaUser } from "react-icons/fa6";

import GroceryImage from "../../assets/signup-login/add-to-cart.svg";

import { RegisterForm } from "@/pages/SignUp";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { z } from "zod";
import LinkButton from "../Buttons/LinkButton";
import SubmitButton from "../Buttons/SubmitButton";
import ErrorText from "../Errors/ErrorText";
import LoginInput from "../Inputs/LoginInput";

const schema = z.object({ 
  name: z.string(),
  email: z.string().email("Invalid email address"),
  contactNumber: z.string().regex(/^0\d{9}$/, "Invalid phone number"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  registerForm: RegisterForm | null;
  setRegisterForm: (s: RegisterForm) => void;
  setStage: (s: number) => void;
}

const SendEmail = ({ setRegisterForm, setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
              setRegisterForm({
                name: data.name,
                email: data.email,
                contactNumber: data.contactNumber,
                password: "",
              });

              setStage(1);
            })}
          >
            <LoginInput
              register={register("name")}
              type="text"
              placeholder="Name"
              icon={FaUser}
            />

            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

            <LoginInput
              register={register("email")}
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

            <LoginInput
              register={register("contactNumber")}
              type="text"
              placeholder="Ex- 0712345678"
              icon={FaPhoneAlt}
            />
            {errors.contactNumber && (
              <ErrorText>{errors.contactNumber.message}</ErrorText>
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

export default SendEmail;
