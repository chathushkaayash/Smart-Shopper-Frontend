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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

type FormData = z.infer<typeof schema>;

const SendOTP = () => {
  const { handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [pin, setPin] = useState("");
  const handleChange = (value: string) => {
    setPin(value);
  };

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "5fr 6fr", xl: "1fr 1fr" }}
      h="100%"
    >
      <GridItem h={{ base: "35vh", md: "100%" }}>
        <Center h="100%" p="2vw">
          <Image src={GroceryImage}  />
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
            <Text>Enter the otp code from the email we sent to </Text>
            <Text fontWeight="bold">ApeEmailEka@gmail.com</Text>
          </VStack>

          <form onSubmit={handleSubmit((data) => console.log(data))}>
              <Box textAlign={{ base: "center", md: "left" }} mb={10} >
              <PinInput value={pin} onChange={handleChange} otp placeholder=" ">
                <PinInputField border="2px" borderColor="primary" _hover={""} mr={2}/>
                <PinInputField border="2px" borderColor="primary" _hover={""} mx={2}/>
                <PinInputField border="2px" borderColor="primary" _hover={""} mx={2}/>
                <PinInputField border="2px" borderColor="primary" _hover={""} mx={2}/>
                <PinInputField border="2px" borderColor="primary" _hover={""} mx={2}/>
                <PinInputField border="2px" borderColor="primary" _hover={""} mx={2}/>
              </PinInput>
              </Box>
          </form>

          <Text mt={3} >
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
