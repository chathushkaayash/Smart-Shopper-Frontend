import { Center, Heading, Icon, VStack } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

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
        <Icon as={FaExclamationTriangle} color="primary" boxSize="70px" />
        <Heading size="lg">
          {isRouteErrorResponse(error)
            ? "404 Not Found"
            : "An unknown error occurred"}
        </Heading>
      </VStack>
    </Center>
  );
};

export default ErrorPage;
