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
import { IoPersonSharp } from "react-icons/io5";

import GroceryImage from "../assets/login/grocery-shopping-amico.svg";
import FacebookIcon from "../assets/social-media-icons/facebook.svg";
import GoogleIcon from "../assets/social-media-icons/google.svg";

import MiddleContainer from "../components/Containers/MiddleContainer";
import LoginInput from "../components/Inputs/LoginInput";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import LoginButton from "../components/Buttons/LoginButton";
import SubmitButton from "../components/Buttons/SubmitButton";
// import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "name must be at least 3 characters" })
    .max(50),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
type FormData = z.infer<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
              SignUp to
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
              // {...register('name')}
              register={register("name", { required: true, minLength: 3 })}
              type="text"
              placeholder="Name"
              icon={IoPersonSharp}
              // label="Name"
            />
            {errors.name && <p>{errors.name.message}</p>}

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
    </MiddleContainer>
  );
};

export default SignUp;
