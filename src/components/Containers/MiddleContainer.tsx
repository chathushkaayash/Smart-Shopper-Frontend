import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const MiddleContainer = ({ children }: Props) => {
  return (
    <Flex
      width="100vw"
      minHeight="90vh"
      bg="background"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="70vw"
        height="80vh"
        borderRadius={20}
        bg="white"
        overflow="hidden"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MiddleContainer;
