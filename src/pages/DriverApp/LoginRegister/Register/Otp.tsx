import { Box, Button, PinInput, PinInputField, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

type FormData = z.infer<typeof schema>;
const Otp = () => {
  const { handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [pin, setPin] = useState("");
  const handleChange = (value: string) => {
    setPin(value);
  };
  return (
    <>
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

      <Text mt={3}>
        I didn't receive any code.{" "}
        <Button variant="link" color="primary">
          RESEND
        </Button>
      </Text>
    </>
  );
};

export default Otp;
