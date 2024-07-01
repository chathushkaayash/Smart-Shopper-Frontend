import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { z } from "zod";
import Logo from "../../../../assets/logo.svg";
import LinkButton from "../../../../components/Buttons/LinkButton";
import SubmitButton from "../../../../components/Buttons/SubmitButton";
import ErrorText from "../../../../components/Errors/ErrorText";
import LoginInput from "../../../../components/Inputs/LoginInput";

const schema = z.object({
  phonenumber: z.string(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const DriverLogin = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <VStack py="10vh" h="100vh">
      <Image src={Logo} width="150px" />
      <VStack>
        <Text fontSize="lg" fontWeight="bold">
          Welcome to
        </Text>
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text as="span">Smart</Text>
          <Text color="primary" as="span">
            Shopper
          </Text>
        </Box>
      </VStack>
      <Text fontSize="md" color="gray" fontWeight="bold">
        Please enter your login details
      </Text>

      <VStack
        w="80vw"
        className="h-[100%] mt-5"
        as="form"
        justifyContent="space-between"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Box w="full">
          <LoginInput
            register={register("phonenumber")}
            type="phonenumber"
            placeholder="Phone Number"
            icon={FaPhoneAlt}
            // label="Email"
            outerClassName="!mb-5"
          />
          {errors.phonenumber && (
            <ErrorText>{errors.phonenumber.message}</ErrorText>
          )}
          <LoginInput
            register={register("password")}
            type="password"
            placeholder="Password"
            icon={FaLock}
            // label="Password"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <LinkButton to="/forgot-password" className="mt-3 ml-1">
            Forgot Password?
          </LinkButton>
        </Box>

        <Box w="full">
          <SubmitButton borderRadius={10}>Login</SubmitButton>
        </Box>
      </VStack>
    </VStack>
  );
};

export default DriverLogin;
