import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Image,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import GroceryImage from "../../assets/login/grocery-shopping-amico.svg";
import SubmitButton from "../Buttons/SubmitButton";

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
  const isOtpComplete = pin.length === 6;

  return (
    <Grid gridTemplateColumns="1fr 1fr" h="100%">
      <GridItem h="100%">
        <Center h="100%">
          <Image src={GroceryImage} />
        </Center>
      </GridItem>

      <GridItem px={55} py={10}>
        <VStack alignItems="flex-start">
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
        <VStack alignItems="flex-start" my={10}>
          <Text>Enter the otp code from the email we sent to </Text>
          <Text fontWeight="bold">ApeEmailEka@gmail.com</Text>
        </VStack>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <HStack gap={4} mb={10}>
            {/* <Center gap={2} w="full"> */}
            <PinInput value={pin} onChange={handleChange} otp placeholder=" ">
              <PinInputField border="2px" borderColor="primary" _hover={""} />
              <PinInputField border="2px" borderColor="primary" _hover={""} />
              <PinInputField border="2px" borderColor="primary" _hover={""} />
              <PinInputField border="2px" borderColor="primary" _hover={""} />
              <PinInputField border="2px" borderColor="primary" _hover={""} />
              <PinInputField border="2px" borderColor="primary" _hover={""} />
            </PinInput>
            {/* </Center> */}
          </HStack>
          <SubmitButton className="my-3" disabled={!isOtpComplete}>
            Confirm
          </SubmitButton>
        </form>

        <Text mt={3}>
          I didn't receive any code.{" "}
          <Button variant="link" color="primary">
            RESEND
          </Button>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default SendOTP;
