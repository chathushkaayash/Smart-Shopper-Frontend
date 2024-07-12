import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Logo from "../../../../assets/logo.svg";
import DotIndicator from "@/components/DotIndicator";
import SubmitButton from "@/components/Buttons/SubmitButton";
import LoginInput from "@/components/Inputs/LoginInput";

import { IoIosEyeOff } from "react-icons/io";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import ErrorText from "@/components/Errors/ErrorText";
import termsAndConditions from "./TermsAndConditions";

const schema = z
  .object({
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
type FormData = z.infer<typeof schema>;
interface Props {
  setStage: (n: number) => void;
}

const EnterPassword = ({ setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      <Image src={Logo} width="150px" />

      <Text fontSize="md" color="gray" fontWeight="bold">
        Please enter your Password
      </Text>

      <VStack
        as="form"
        gap="2vh"
        h="full"
        px="10vw"
        justifyContent="space-between"
        onSubmit={handleSubmit(() => setStage(6))}
      >
        <Box w="full">
          <LoginInput
            register={register("password")}
            type="password"
            placeholder="Password"
            icon={IoIosEyeOff}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          <LoginInput
            register={register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            icon={IoIosEyeOff}
            outerClassName="!mt-5"
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
          )}
        </Box>

        <VStack w="80vw">
          <Text fontSize="md" mb={5} textAlign="center">
            By clicking{" "}
            <Box as="span" fontWeight="bold">
              Request to SignUp
            </Box>
            , you agree with our{" "}
            <Box as="span" color="gray" fontWeight="bold" onClick={onOpen}>
              Terms and Conditions
            </Box>
          </Text>

          <SubmitButton borderRadius={10}>Request to SignUp</SubmitButton>
          <DotIndicator
            current={4}
            total={4}
            className="absolute bottom-[2vh]"
          />
        </VStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width="80vw">
          <ModalHeader>Terms and Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              mx="auto"
              w="100%"
              h="40vh"
              overflowY="scroll"
              borderWidth="1px"
              borderRadius="10"
              p={4}
              boxShadow="lg"
              css={{
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              }}
            >
              <Text align="left">{termsAndConditions}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              px={50}
              justifyContent="center"
              w="full"
              color="primary"
              variant="ghost"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default EnterPassword;
