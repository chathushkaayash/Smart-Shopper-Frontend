import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PiCaretRightThin } from "react-icons/pi";
import { useRef } from "react";
import { BsCameraFill } from "react-icons/bs";
import useDriver from "@/hooks/useDriver";
import useAuthStore from "@/state-management/auth/store";


const EditAccount = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const user= useAuthStore((state) => state.user);
  const driver = useDriver(user?.driverId || 0);

  const userDetails = [
    { label: "NIC", value: driver.data?.nic },
    { label: "Email", value: driver.data?.user.email },
    { label: "Contact", value: driver.data?.user.number },
    { label: "Courier Company Name", value: driver.data?.courierCompany },
  ];

  return (
    <>
      <VStack h="23vh" px="8vw" pt="3vh" pb="10vh" borderWidth={2}>
        <HStack w="full" pos="relative" left={-5}>
          <Box
            p={1}
            background="white"
            borderRadius="50%"
            onClick={() => navigate("/driver/account")}
            cursor="pointer"
          >
            <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
          </Box>
          <Text fontWeight="bold" fontSize="xl">
            Account Info
          </Text>
        </HStack>
        <Center>
          {/* --------------- Profile image upload --------------- */}

          <Input type="file" display="none" ref={inputFileRef} />
          <Image
            boxSize="100px"
            borderRadius="full"
            src={driver.data?.user.profilePic}
            alt="Profile Image"
          />
          <Center
            p={1}
            position="absolute"
            background="white"
            borderRadius="50%"
            shadow="xl"
            borderWidth={1}
            cursor="pointer"
            onClick={() => (inputFileRef.current as HTMLInputElement).click()}
          >
            <Icon as={BsCameraFill} color="primary" />
          </Center>
        </Center>
      </VStack>
      <Stack p={5} divider={<Divider borderColor={"gray.300"} />}>
        {userDetails.map((detail, index) => (
          <Stack key={index} p={2} cursor="pointer">
            <Text>{detail.label}</Text>
            <Text>{detail.value}</Text>
          </Stack>
        ))}
        <HStack
          justify="space-between"
          p={2}
          cursor="pointer"
          onClick={() => navigate("/driver/account/change-password")}
        >
          <Text>Change Password</Text>
          <Icon as={PiCaretRightThin} boxSize={5} />
        </HStack>
      </Stack>
    </>
  );
};

export default EditAccount;
