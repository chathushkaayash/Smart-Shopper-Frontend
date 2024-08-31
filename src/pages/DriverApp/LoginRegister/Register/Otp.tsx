import {
  Box,
  Button,
  Image,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../../../assets/logo.svg";
import Phone from "../../../../assets/signup-login/enter-otp-animate.svg";

import { useState } from "react";
import { DriverDetails } from "./DriverRegister";
import APIClient from "@/services/api-client";

interface Props {
  setStage: (n: number) => void;
  driverDetails: DriverDetails;
  setDriverDetails: (s: DriverDetails) => void;
}

const apiClient = new APIClient<{ OTP: string; id: number } | string>(
  "/match_driver_otp"
);
const apiClientOTPResend = new APIClient<{ id: number }>("/driver_otp_resend");

const Otp = ({ driverDetails, setDriverDetails, setStage }: Props) => {
  const [pin, setPin] = useState("");

  const resendOtp = () => {
    apiClientOTPResend.create({ id: driverDetails.id });
  };

  const handleChange = (value: string) => {
    if (value.length === 6) {
      matchOtp(value);
    }
    setPin(value);
  };

  const matchOtp = (otp: string) => {
    apiClient
      .create({
        OTP: otp,
        id: driverDetails.id,
      })
      .then(() => {
        setDriverDetails({ ...driverDetails, OTP: otp });
        setStage(2);
      });
  };

  return (
    <VStack py="6vh" h="100vh" gap="8vh">
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
      <Text>
        I didn't receive any code.{" "}
        <Button variant="link" color="primary" onClick={resendOtp}>
          RESEND
        </Button>
      </Text>
    </VStack>
  );
};

export default Otp;
