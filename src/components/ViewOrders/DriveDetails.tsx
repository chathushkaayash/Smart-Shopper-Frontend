import useDriver from "@/services/Driver/useDriver";
import { Box, Flex, Image, Text, Grid, Center } from "@chakra-ui/react";

interface DriverDetailsPopupProps {
  driverId: number;
}

const DriverDetailsPopup = ({driverId}: DriverDetailsPopupProps) => {
  const driver = useDriver([driverId])[0]?.data;
  return (
    <Flex direction="column" fontWeight="md">
      <Center>
        <Image
          mb={4}
          borderRadius="12px"
          src={driver?.user?.profilePic}
          alt="Driver's Photo"
        />
      </Center>
      <Box
        flex="1"
        p={4}
        mb={4}
        borderWidth="1px"
        borderRadius="15px"
        borderColor="gray.300"
      >
        <Grid templateColumns="40% 60%" gap={2} pl={4} alignItems="center">
          <Flex alignItems="center">
            <Text textAlign="left">Name</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.user?.name}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Contact Number</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.user?.number}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Courier Company</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.courierCompany}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Type</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.vehicleType}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Name</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.vehicleName}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Number</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: {driver?.vehicleNumber}</Text>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
};

export default DriverDetailsPopup;
