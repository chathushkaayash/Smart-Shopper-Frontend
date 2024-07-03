import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Driver from "../../../assets/signup-login/take-away-animate.svg";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import LoginButton from "../../../components/Buttons/LoginButton";
const LoginRegister = () => {
  return (
    <VStack
      h="100vh"
      justifyContent="center"
      gap="5vh"
      translateX="100vw"
      py="2vh"
    >
      <VStack>
        <Image src={Logo} width="150px" />
        <Box display="inline" fontSize="3xl" fontWeight="bold" mt={2}>
          <Text as="span">Smart</Text>
          <Text color="primary" as="span">
            Shopper
          </Text>
        </Box>
      </VStack>

      <Flex
        h="30vh"
        overflow="hidden"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Image src={Driver} className="translate-x-[-8vw]"  width="360px" />
      </Flex>

      <Box>
        <Text>
          Smart Lists.{" "}
          <Text as="span" color="orange.500">
            Best Prices.
          </Text>{" "}
          Fast Delivery
        </Text>
      </Box>

      <VStack w="full" mt="5vh">
        <Link to="/driver/register">
          <LoginButton text="Sign Up" width="80vw" color="primary" />
        </Link>
        <Link to="/driver/login">
          <LoginButton text="Login" width="80vw" />
        </Link>
      </VStack>
    </VStack>
  );
};

export default LoginRegister;
