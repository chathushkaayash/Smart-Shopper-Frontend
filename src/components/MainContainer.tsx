import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <Flex
      width="100%"
      minH={"100vh"}
      bg="#EFF2F6"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="calc(100vw - 20px)"
        height="calc(100% - 40px)"
        margin={10}
        padding={10}
        borderRadius="20px"
        bg="white"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default MainContainer;
