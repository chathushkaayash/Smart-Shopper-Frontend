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
import { FaEnvelope, FaLock } from "react-icons/fa";

import GroceryImage from "../assets/login/grocery-shopping-amico.svg";
import FacebookIcon from "../assets/social-media-icons/facebook.svg";
import GoogleIcon from "../assets/social-media-icons/google.svg";

import { useForm } from "react-hook-form";
import LoginButton from "../components/Buttons/LoginButton";
import SubmitButton from "../components/Buttons/SubmitButton";
import MiddleContainer from "../components/Containers/MiddleContainer";
import LoginInput from "../components/Inputs/LoginInput";

import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {  },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <MiddleContainer>
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
              Welcome to
            </Text>
            <Box display="inline" fontSize="2xl" fontWeight="bold">
              <Text as="span">Smart</Text>
              <Text color="primary" as="span">
                Shopper
              </Text>
            </Box>
          </VStack>

          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <LoginInput
              register={register("email")}
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
              // label="Email"
            />
            <LoginInput
              register={register("password")}
              type="password"
              placeholder="Password"
              icon={FaLock}
              // label="Password"
            />

            <SubmitButton className="my-3">Login</SubmitButton>
          </form>

          <Text mt={3}>
            Don't have an account?{" "}
            <Button variant="link" color="primary">
              Register
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
    </MiddleContainer>
  );
};

export default Login;
