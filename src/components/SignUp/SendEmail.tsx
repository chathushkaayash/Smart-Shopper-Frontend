import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa6";

import GroceryImage from "../../assets/login/grocery-shopping-amico.svg";
import FacebookIcon from "../../assets/social-media-icons/facebook.svg";
import GoogleIcon from "../../assets/social-media-icons/google.svg";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import LoginInput from "../Inputs/LoginInput";
import SubmitButton from "../Buttons/SubmitButton";
import LoginButton from "../Buttons/LoginButton";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

interface Props {
  setStage: (n: number) => void;
}

const SendEmail = ({ setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <Grid gridTemplateColumns="1fr 1fr" h="100%">
      <GridItem h="100%">
        <Center h="100%">
          <Image src={GroceryImage} />
        </Center>
      </GridItem>

      <GridItem px={55} py={10}>
        <VStack alignItems="flex-start">
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

        <form onSubmit={handleSubmit(() => setStage(1))}>
          <LoginInput
            register={register("email")}
            type="email"
            placeholder="Email"
            icon={FaEnvelope}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <LoginInput
            register={register("password")}
            type="password"
            placeholder="Password"
            icon={FaLock}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <LoginInput
            register={register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            icon={FaLock}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <SubmitButton className="my-3">Sign Up</SubmitButton>
        </form>

        <Text mt={3}>
          Do you have an account?{" "}
          <Button variant="link" color="primary">
            Login
          </Button>
        </Text>

        <Flex align="center" mt={3}>
          <Box flex="1" h="1px" bg="gray.300"></Box>
          <Box px={2}>or</Box>
          <Box flex="1" h="1px" bg="gray.300"></Box>
        </Flex>

        <HStack marginTop={2}>
          <LoginButton text="Login with Google" image={GoogleIcon} />
          <LoginButton text="Login with Facebook" image={FacebookIcon} />
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default SendEmail;
