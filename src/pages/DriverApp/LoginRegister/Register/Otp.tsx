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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useEffect, useState } from "react";

const schema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setStage: (n: number) => void;
}

const Otp = ({ setStage }: Props) => {
  const { handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [pin, setPin] = useState("");
  const handleChange = (value: string) => {
    setPin(value);
  };

  useEffect(() => {
    if (pin.length === 4) {
      setStage(2);
    }
  }, [pin, setStage]);

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
        <form onSubmit={handleSubmit(() => {})}>
          <PinInput
            value={pin}
            onChange={handleChange}
            otp
            placeholder=" "
            size="lg"
          >
            {[...Array(4)].map((_, index) => (
              <PinInputField
                key={index}
                border="2px"
                borderColor="primary"
                _hover={{}}
                mx={2}
                textAlign="center"
              />
            ))}
          </PinInput>
        </form>
      </Box>
      <Image src={Phone} width="180px" className=" " justifyContent="center" />
      <Text>
        I didn't receive any code.{" "}
        <Button variant="link" color="primary">
          RESEND
        </Button>
      </Text>
    </VStack>
  );
};

export default Otp;
