import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  PinInput,
  PinInputField,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import GroceryImage from "../../assets/signup-login/grocery-shopping-amico.svg";

import APIClient from "@/services/api-client";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { RegisterForm } from "@/pages/SignUp";

const schema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

interface OtpMappingRequest {
  contactNumber: string;
  OTP: string;
}

type FormData = z.infer<typeof schema>;
const apiClient = new APIClient<OtpMappingRequest | string>("/match_otp");

interface Props {
  registerForm: RegisterForm | null;
}

const SendOTP = ({ registerForm }: Props) => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");

  const { handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        contactNumber: registerForm?.contactNumber || "",
      })
      .then((res) => {
        if (res === "Success") navigate("/login");
      });
  };

  const censoredNumber =
    registerForm?.contactNumber || 0 >= 10
      ? registerForm?.contactNumber.slice(0, 2) +
        "*****" +
        registerForm?.contactNumber.slice(7, 10)
      : registerForm?.contactNumber;

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "5fr 6fr", xl: "1fr 1fr" }}
      h="100%"
    >
      <GridItem h={{ base: "35vh", md: "100%" }}>
        <Center h="100%" p="2vw">
          <Image src={GroceryImage} />
          {/* <Image src={GroceryImage} w={{ base: "60vw", md: "full" }} /> */}
        </Center>
      </GridItem>

      <GridItem px={55} py={10}>
        {/* <GridItem px="2vw"> */}
        <Stack
          h={{ base: "auto", md: "full" }}
          w={{ base: "80vw", md: "full" }}
          justifyContent="center"
          mx="auto"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text fontSize="lg" fontWeight="bold">
              {" "}
              SignUp to
            </Text>
            <Box display="inline" fontSize="2xl" fontWeight="bold">
              <Text as="span">Smart</Text>
              <Text color="primary" as="span">
                Shopper
              </Text>
            </Box>
          </VStack>
          <VStack alignItems={{ base: "center", md: "flex-start" }} my={10}>
            <Text>Enter the OTP code we have sent to </Text>
            <Text fontWeight="bold">{censoredNumber}</Text>
          </VStack>

          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Box textAlign={{ base: "center", md: "left" }} mb={10}>
              <PinInput value={pin} onChange={handleChange} otp placeholder=" ">
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mr={2}
                />
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mx={2}
                />
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mx={2}
                />
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mx={2}
                />
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mx={2}
                />
                <PinInputField
                  border="2px"
                  borderColor="primary"
                  _hover={""}
                  mx={2}
                />
              </PinInput>
            </Box>
          </form>

          <Text mt={3}>
            I didn't receive any code.{" "}
            <Button variant="link" color="primary">
              RESEND
            </Button>
          </Text>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default SendOTP;
