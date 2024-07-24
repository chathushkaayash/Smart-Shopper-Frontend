import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Center, Heading, Text, VStack,Icon } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Center minH="100vh" bg="gray.50" p={4}>
      <VStack
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        spacing={4}
        textAlign="center"
      >
        <Icon as={FaExclamationTriangle}  color="primary" boxSize="70px"/>
        <Heading size="lg">Oops! Something went wrong  :(</Heading>
        <Text fontSize="lg" color="gray.500">
          {isRouteErrorResponse(error) ? "404 Not Found" : "An unknown error occurred"}
        </Text>
      </VStack>
    </Center>
  );
};

export default ErrorPage;

