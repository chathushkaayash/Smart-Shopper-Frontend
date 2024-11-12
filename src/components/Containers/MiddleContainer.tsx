import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  bg?: string;
  className?: string;
  mt?: number;
}

const MiddleContainer = ({
  children,
  width = "70vw",
  height,
  bg,
  className,
  mt,
}: Props) => {
  return (
    <Flex
      width="100%"
      minHeight={{ base: "100vh", md: "90vh" }}
      bg={bg || "white"}
      justifyContent="center"
      alignItems="center"
      py={height ? "5vh" : 0}
    >
      <Box
        width={{ base: "100vh", md: "90vw", lg: width }}
        minH={{ base: "100vh", md: "80vh" }}
        // height={height ? height : { base: "100vh", md: "80vh" }}
        borderRadius={20}
        bg="white"
        overflow="hidden"
        boxShadow="md"
        borderWidth={2}
        className={className}
        py={height ? "5vh" : 0}
        mt={mt}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MiddleContainer;
