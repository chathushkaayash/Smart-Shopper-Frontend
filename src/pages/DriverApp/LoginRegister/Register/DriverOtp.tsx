import {
  Box,
  Button,
  Icon,
  Image,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/logo.svg";
import Phone from "../../../../assets/signup-login/enter-otp-animate.svg";
import { DriverRegistrationDetails } from "@/services/types";
import useDriverRegisterStore from "@/state-management/DriverRegisterStore";
import { useState } from "react";

const DriverOtp = () => {
  const { setDriverDetails, setStage, otpResend, matchOtp } =
    useDriverRegisterStore();

  const [pin, setPin] = useState("");

  const handleChange = (value: string) => {
    if (value.length === 6) matchOtp(value);
    setPin(value);
  };

  return (
    <VStack py="6vh" h="100vh" gap="8vh">
       <Box position="absolute" top="2" left="2" cursor="pointer" onClick={()=>setStage(0)}>
        <Icon as={IoIosArrowBack} w={10} h={10} p={1} />
      </Box>
      <VStack>
        <Image src={Logo} width="150px" />
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text as="span">OTP </Text>
          <Text color="primary" as="span">
            Verification
          </Text>
        </Box>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Please enter the OTP sent to **********123
        </Text>
      </VStack>
      <Box textAlign="center">
        <PinInput
          value={pin}
          onChange={handleChange}
          otp
          placeholder=" "
          size="lg"
        >
          {[...Array(6)].map((_, index) => (
            <PinInputField
              key={index}
              border="2px"
              borderColor="primary"
              _hover={{}}
              mx={1}
              textAlign="center"
            />
          ))}
        </PinInput>
      </Box>
      <Image src={Phone} width="180px" className=" " justifyContent="center" />
      <Box>
        <Text>
          I didn't receive any code.{" "}
          <Button variant="link" color="primary" onClick={otpResend}>
            RESEND
          </Button>
        </Text>
        <Text className="py-2" fontSize={14}>
          Reset my Application{" "}
          <Button
            variant="link"
            color="red"
            onClick={() => {
              setDriverDetails({} as DriverRegistrationDetails);
              setStage(0);
            }}
          >
            Reset Details
          </Button>
        </Text>
      </Box>
    </VStack>
  );
};

export default DriverOtp;
