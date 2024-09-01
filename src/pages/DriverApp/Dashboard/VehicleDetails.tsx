import {
  Box,
  Divider,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VehicleData = [
  { label: "Vehicle Name", value: "Alto" },
  { label: "Vehicle Type", value: "Car" },
  { label: "Vehicle Number", value: "VP 2233" },
  { label: "Vehicle Color", value: "#000000" },
  { label: "Courier Company Name", value: "FastCourier" },
];

const VehicleDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <VStack h="10vh" px="8vw" pt="3vh" borderWidth={2}>
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
            Vehicle Details
          </Text>
        </HStack>
      </VStack>
      <Stack
        spacing={4}
        p={5}
        divider={<Divider borderColor="gray.300" borderWidth="1px" />}
      >
        {VehicleData.map((vehicle, index) => (
          <Stack key={index} p={1} cursor="pointer">
            <Text>{vehicle.label}</Text>
            <Text>{vehicle.value}</Text>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
export default VehicleDetails;
