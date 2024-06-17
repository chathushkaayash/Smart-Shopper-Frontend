import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

import GroceryImage from "../assets/login/grocery-shopping-amico.svg";

import MiddleContainer from "../components/MiddleContainer";
import LoginInput from "../components/Inputs/LoginInput";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {register,handleSubmit} = useForm();
  
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

          <form onSubmit={handleSubmit(data=>console.log(data))}>
            <LoginInput
            {...register('name')}
              type="text"
              placeholder="Name"
              icon={IoPersonSharp}
              label="Name"
            />
            <LoginInput
             {...register('email')}
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
              label="Email"
            />
            <LoginInput
             {...register('password')}
              type="password"
              placeholder="Password"
              icon={FaLock}
              label="Password"
            />
            <LoginInput
             {...register('reTypePassword')}
              type="password"
              placeholder="Password"
              icon={FaLock}
              label="Re Type Password"
            />

            <Button type="submit" width="full" bg="#E9893B" mt={3}>
              Sign Up
            </Button>
          </form>

          <Text mt={3}>
            Do you have an account?{" "}
            <Button variant="link" color="primary">
              Login
            </Button>
          </Text>
          {/* 
          <Flex align="center" mt={3}>
            <Box flex="1" h="1px" bg="gray.300"></Box>
            <Box px={2}>or</Box>
            <Box flex="1" h="1px" bg="gray.300"></Box>
          </Flex>

          <HStack marginTop={2}>
            <LoginButton text="Login with Google" image={GoogleIcon} />
            <LoginButton text="Login with Facebook" image={FacebookIcon} />
          </HStack> */}
        </GridItem>
      </Grid>
    </MiddleContainer>
  );
};

export default SignUp;
