import useDriver from "@/hooks/useDriver";
import useAuthStore from "@/state-management/auth/store";
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

const VehicleDetails = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const driver = useDriver(user?.driverId || 0);

  const VehicleData = [
    { label: "Vehicle Name", value: driver.data?.vehicleName },
    { label: "Vehicle Type", value: driver.data?.vehicleType },
    { label: "Vehicle Number", value: driver.data?.vehicleNumber },
    { label: "Vehicle Color", value: driver.data?.vehicleColor },
  ];

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
                          {vehicle.label === "Vehicle Color" && vehicle.value && (
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  bg={vehicle.value}
                  border="1px solid gray"
                />
              )}
          </Stack>
        ))}
      </Stack>
    </>
  );
};
export default VehicleDetails;
