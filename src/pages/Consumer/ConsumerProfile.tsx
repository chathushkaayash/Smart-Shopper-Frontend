import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import ProfileDetail from "../../components/ConsumerProfile/ProfileDetail";
import ShippingAddress from "../../components/ConsumerProfile/ShippingAddress";
import useActivity from "@/services/Activity/useActivity";

const ConsumerProfile = () => {
  const activities = useActivity().data?.results;

  return (
      <Box bg="background" minH="100vh" py={7} px={{ base: 5, md: 20 }}>
        <Box bg="white" p={5} borderRadius={10} boxShadow="md">
          <Grid
            templateRows={{ base: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
            templateColumns={{ base: "1fr", md: "65% 35%" }}
            gap={1}
          >
            <GridItem rowSpan={1} colSpan={1} p={3} pb={0}>
              <ProfileDetail />
            </GridItem>
            <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={1} p={3}>
              <Box
                pb={5}
                borderWidth={1}
                borderRadius="10px"
                borderColor="gray.300"
                boxShadow="sm"
                h="100%"
              >
                <Text
                  color="primary"
                  fontWeight="semibold"
                  fontSize="xl"
                  mt={7}
                  ml={7}
                  mb={5}
                >
                  Your Activities
                </Text>
                <VStack gap={0} pl={4} pr={4}>
                  {activities?.map((item) => (
                    <Box
                      w="full"
                      key={item.id}
                      px={4}
                      py={2}
                      borderWidth={0.7}
                      borderColor="gray.300"
                      borderRadius={5}
                      className="activity-row"
                      _hover={{
                        borderColor: "primary",
                        borderLeftWidth: 10,
                        cursor: "pointer",
                        color: "primary",
                      }}
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="medium" color="gray.500">
                          {item.description}
                        </Text>
                        <Box
                          textAlign="right"
                          whiteSpace="nowrap"
                          flexShrink={0}
                        >
                          <Text fontSize={10} color="gray.400">
                            {item.dateTime.split("T")[0]}
                          </Text>
                          <Text fontSize={10} color="gray.400">
                            {item.dateTime.split("T")[1].split(".")[0]}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </GridItem>
            <GridItem colSpan={1} p={3}>
              <ShippingAddress />
            </GridItem>
          </Grid>
        </Box>
      </Box>
  );
};

export default ConsumerProfile;
