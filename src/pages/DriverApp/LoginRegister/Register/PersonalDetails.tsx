import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import Logo from "../../../../assets/logo.svg";
import SubmitButton from "../../../../components/Buttons/SubmitButton";
import ErrorText from "../../../../components/Errors/ErrorText";
import LoginInput from "../../../../components/Inputs/LoginInput";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  nic: z.string().min(1, "NIC is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  setStage: (n: number) => void;
}

const PersonalDetails = ({ setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      <VStack>
        <Image src={Logo} width="150px" />
        <Text fontSize="lg" fontWeight="bold">
          Welcome to
        </Text>
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text as="span">Smart</Text>
          <Text color="primary" as="span">
            Shopper
          </Text>
        </Box>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Please enter your SignUp details
        </Text>
      </VStack>

      <VStack
        h="full"
        w="80vw"
        as="form"
        justifyContent="space-between"
        onSubmit={handleSubmit(onOpen)}
      >
        <Box w="full">
          <LoginInput
            register={register("name")}
            type="name"
            placeholder="Name"
            icon={FaUser}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          <LoginInput
            register={register("nic")}
            type="nic"
            placeholder="NIC"
            icon={FaUser}
            outerClassName="!mt-5"
          />
          {errors.nic && <ErrorText>{errors.nic.message}</ErrorText>}
          <LoginInput
            register={register("email")}
            type="email"
            placeholder="Email"
            icon={FaEnvelope}
            outerClassName="!mt-5"
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <LoginInput
            register={register("phonenumber")}
            type="phonenumber"
            placeholder="Phone Number"
            icon={FaPhoneAlt}
            outerClassName="!mt-5"
          />
          {errors.phonenumber && (
            <ErrorText>{errors.phonenumber.message}</ErrorText>
          )}
        </Box>

        <Box w="full">
          <SubmitButton borderRadius={10}>Continue</SubmitButton>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent width="80vw">
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <Text as="span" fontWeight="bold">
                0736826763
                <br />
              </Text>
              We will send an OTP to this phone number.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button px={50} color="primary" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Flex justifyContent="center" w="full">
              <Button
                px={50}
                color="white"
                bg="primary"
                onClick={() => {
                  setStage(1);
                  onClose();
                }}
              >
                Next
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PersonalDetails;
