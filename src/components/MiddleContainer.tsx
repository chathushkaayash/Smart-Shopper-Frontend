import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const MiddleContainer = ({ children }: Props) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      bg="#EFF2F6"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="80vw" height="80vh" bg="white" borderRadius={20}>
        {children}
      </Box>
    </Flex>
  );
};

export default MiddleContainer;
