import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const MiddleContainer = ({ children, width = "70vw", className }: Props) => {
  return (
    <Flex
      width="100vw"
      minHeight={{ base: "100vh", md: "90vh" }}
      bg="background"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ base: "100vh", md: "90vw", lg: width }}
        height={{ base: "100vh", md: "80vh" }}
        borderRadius={20}
        bg="white"
        overflow="hidden"
        className={className}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MiddleContainer;
