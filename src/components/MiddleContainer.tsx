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
      <Box
        width="80vw"
        height="80vh"
        borderRadius={20}
        bg="white"
        // overflow="hidden"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MiddleContainer;
