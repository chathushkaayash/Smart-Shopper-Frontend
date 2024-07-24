import { Box, Center,  Image, Text, VStack } from "@chakra-ui/react";
import Warning from "../../assets/warning-animate.svg";

const DesktopWarning = () => {
  return (
    <Center h="100vh" bg="gray.50">
      <Box bg="white" shadow="xl" p={8} borderRadius="md" borderWidth={1}>
        <VStack>
          <Image src={Warning} width="200px" />
          <Text fontWeight="bold" fontSize="xl">
            Please Use a Mobile Device
          </Text>
          <Text>
            This page is optimized for mobile devices. For the best <br />{" "}
            experience,please access this page on a mobile device.
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default DesktopWarning;
