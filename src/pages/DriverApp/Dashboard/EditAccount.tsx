import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PiCaretRightThin } from "react-icons/pi";

const userDetails = [
  { label: "NIC", value: "215439582242" },
  { label: "Email", value: "sdyhsu@gmail.com" },
  { label: "Contact", value: "07139582242" },
  { label: "Courier Company Name", value: "FastCourier" },
];

const EditAccount = () => {
  const navigate = useNavigate();
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
          <Image
            boxSize="100px"
            borderRadius="full"
            src="https://via.placeholder.com/100"
            alt="Profile Image"
          />
        </Center>
      </VStack>
      <Stack p={5} divider={<Divider borderColor={"gray.400"}/>} >
        {userDetails.map((detail, index) => (
          <Stack key={index} p={2} cursor="pointer">
            <Text>{detail.label}</Text>
            <Text>{detail.value}</Text>
          </Stack>
        ))}
        <HStack justify="space-between" p={2} cursor="pointer">
          <Text>Change Password</Text>
          <Icon as={PiCaretRightThin} boxSize={5}/>
        </HStack>
      </Stack>
    </>
  );
};

export default EditAccount;
