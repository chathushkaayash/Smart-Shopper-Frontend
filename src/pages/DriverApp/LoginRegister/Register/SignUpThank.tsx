import { Box, Image, Text, VStack } from "@chakra-ui/react";
import SubmitButton from "@/components/Buttons/SubmitButton";

import Logo from "../../../../assets/logo.svg";
import Done from "../../../../assets/signup-login/done.svg";
import { Link } from "react-router-dom";

const SignUpThank = () => {
  const isButtonEnabled = true;

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      {/* --------------- Smart Shopper Logo --------------- */}
      <VStack>
        <Image src={Logo} width="150px" />
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text as="span">Smart</Text>
          <Text color="primary" as="span">
            Shopper
          </Text>
        </Box>
      </VStack>

      <Image src={Done} width="60vw" />
      <Text mb={5} fontSize="50px" textAlign="center" fontWeight="bold">
        ThankYou for Signing Up!
      </Text>

      <VStack w="80vw" h="full" justifyContent="space-between">
        <Text mb={5} fontSize="md" textAlign="center" color="gray">
          Your Request to join has been recieved.Please wait while we verify
          your details.This may take up to 24-48 hours.
        </Text>
        <Box w="full">
          <Link to="/driver/login">
            <SubmitButton disabled={!isButtonEnabled} borderRadius={10}>
              Continue
            </SubmitButton>
          </Link>
        </Box>
      </VStack>
    </VStack>
  );
};

export default SignUpThank;
