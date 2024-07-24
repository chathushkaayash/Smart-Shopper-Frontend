import { Box, Flex, Image, Text, Grid, Center } from "@chakra-ui/react";

const DriverDetailsPopup = () => {
  return (
    <Flex direction="column" fontWeight="md">
      <Center>
        <Image
          mb={4}
          borderRadius="12px"
          src="https://via.placeholder.com/159x160"
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
            <Text>: Kaveesha Hettige</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Contact Number</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: 0719944045</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Courier Company</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: Air Lanka</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Type</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: Motor Cycle</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Name</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: TVS csdc</Text>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="left">Vehicle Number</Text>
          </Flex>
          <Flex alignItems="center">
            <Text>: VQ 3344</Text>
          </Flex>
        </Grid>
      </Box>
    </Flex>
  );
};

export default DriverDetailsPopup;
