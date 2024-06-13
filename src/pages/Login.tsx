import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import GroceryImage from "../assets/login/grocery-shopping-amico.svg";
import MiddleContainer from "../components/MiddleContainer";

const Login = () => {
  return (
    <MiddleContainer>
      <Grid templateColumns='1fr 1fr' gap={50}
      >
        <Center >
          <Image src={GroceryImage} />
        </Center>
        <Center  p={20} >
          <VStack alignItems="flex-start">
            <Text fontSize="sm">Welcome to</Text>
            <Text fontSize="2xl" fontWeight="bold">
              SmartShopper
            </Text>
          </VStack>
          <Button width="full" mt={3}>
            Login with Google
          </Button>
          <Button width="full" mt={3}>
            Login with Facebook
          </Button>
          <Flex align="center" mt={3}>
            <Box flex="1" h="1px" bg="gray.300"></Box>
            <Box px={2}>or</Box>
            <Box flex="1" h="1px" bg="gray.300"></Box>
          </Flex>
          {/* <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaEnvelope} position="absolute" left={3} top={3} />
                </InputLeftElement>
                <Input type="email" placeholder="Email" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={FaLock} position="absolute" left={3} top={3} />
                </InputLeftElement>
                <Input type="password" placeholder="Password" />
              </InputGroup>
            </FormControl>
            <Button type="submit" width="full" bg="#E9893B" mt={3}>
              Login
            </Button>
          </form> */}
          <Text mt={3}>
            Don't have an account? <Button variant="link">Register</Button>
          </Text>
        </Center>
      </Grid>
    </MiddleContainer>
  );
};

export default Login;
