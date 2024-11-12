import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  HStack,
  Button,
  Icon,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";

import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import StarImage from "../../assets/CourierCompany/stars.svg";
import { useParams } from "react-router-dom";
import useDriver from "@/services/Driver/useDriver";
import useOpportunities from "@/hooks/useOpportunities";
import useReviews from "@/services/Reviews/useReviews";


const PersonalDetails = () => {
  const { id } = useParams(); // recieve the id from the url
  if (!id) return null;

  const driver = useDriver([Number(id)])[0].data;
  const opportunities= useOpportunities({status: "Delivered"}).data?.results;
  const reviews = useReviews({
    targetId: Number(id),
    reviewType: "driver",
  }).data?.results;
  console.log(reviews)
  return (
    <Grid gridTemplateColumns="1fr 1fr" h="100%" pl={8}>
      <GridItem h="100%">
        <Box borderRadius="lg" shadow="md" p={10} mb={2} mt={6} ml={5} mr={2}>
          <Grid gridTemplateColumns="1fr 2fr">
            <GridItem>
              <Text fontSize="lg" fontWeight="bold">
                Driver Personal Details
              </Text>

              <Image src={driver?.user.profilePic} w="50%" mt={4} ml={7} mb={4} mr={5} />
            </GridItem>
            <GridItem>
              <HStack>
                <Text mt={12}>
                  Name
                  <br />
                  Contact No
                </Text>

                <Text ml={10} mt={12}>
                  <Text color="gray.500">
                    <b>: {driver?.user.name}</b>
                  </Text>
                  <Text color="gray.500">
                    <b>: {driver?.user.number} </b>
                  </Text>
                </Text>
              </HStack>
            </GridItem>
          </Grid>
          <Divider size="lg" my={4} borderColor="gray" borderWidth="1px" />

          <Text fontSize="lg" fontWeight="bold" mb={6} mt={6}>
            Delivery Details
          </Text>

          <HStack>
            <Text>
              Completed deliveries
              <br />
              Pending Deliveries
              <br />
              Revenue
            </Text>
            <Text ml={10}>
              <Text color="gray.500">
                <b>: { opportunities?.filter((opportunity) => opportunity.driverId ===driver?.id).length||'None'} </b>
              </Text>
              <Text color="red">
                {" "}
                <b>: 5 </b>
              </Text>
              <Text color="red">
                <b>: $1000 </b>
              </Text>
            </Text>
          </HStack>
          <Divider size="sm" my={4} borderColor="gray" borderWidth="1px" />

          <Text fontSize="lg" fontWeight="bold" mt={5}>
            Vehicle Details
          </Text>

          <HStack>
            <Text>
              Vehicle Type
              <br />
              Vehicle No
              <br />
              Vehicle Color
            </Text>
            <Text ml={10}>
              <Text color="gray.500">
                <b>: {driver?.vehicleType} </b>
              </Text>
              <Text color="gray.500">
                <b>: {driver?.vehicleNumber}</b>
              </Text>
              <Text color="gray.500">
                <Flex>
                  <b>:</b>
                  <Box ml={1} w={20} h={8} bg={driver?.vehicleColor}></Box>
                </Flex>
              </Text>
            </Text>
          </HStack>
        </Box>
      </GridItem>

      <GridItem px={5} py={30}>
        <Text
          lineHeight="1.1em"
          fontSize="lg"
          fontWeight="bold"
          ml={2}
          mb={2}
          pl={5}
          pt={4}
        >
          Reviews
        </Text>
        <Box m={6} pl={20} pr={20}>
          <VStack alignItems="flex-start">
            <HStack
              fontSize={{ base: "1xl", md: "1xl" }}
              spacing={2}
              color="yellow.400"
              mt={0}
            >
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </HStack>
          </VStack>

          <VStack alignItems="flex-start">
            <Box display="inline" fontSize="md" mt={1} mb={0} fontWeight="630">
              <Text>
                {" "}
                <b>5 reviews</b>
              </Text>
            </Box>
          </VStack>

          <VStack alignItems="flex-start" spacing={0} mt={2}>
            {[
              { stars: 5, count: 3 },
              { stars: 4, count: 1 },
              { stars: 3, count: 0 },
              { stars: 2, count: 0 },
              { stars: 1, count: 1 },
            ].map((review, index) => (
              <Flex key={index} align="center" w="100%">
                <Text
                  fontSize="0.5xl"
                  fontWeight="630"
                >{`${review.stars} stars`}</Text>
                <Box width="200px" h="1px" bg="gray.400" mx={2} flex="1" />
                <Text
                  fontSize="sm"
                  fontWeight="630"
                >{`(${review.count})`}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>
        {/* Scrollable container */}
        <Box mt={4} p={4} overflowY="auto" maxH="300px">
          <Box borderEndWidth="1px" borderRadius="lg" boxShadow="md" pt={2}>
            <Grid gridTemplateColumns="3fr 1fr" h="100%" mb={6}>
              <GridItem>
                <Text fontSize="lg" mb={2} pl={4} mr={5} pb={5}>
                  <Image src={StarImage} w="10%" mb={2} />
                  The driver arrived exactly on time and delivered my package
                  promptly. Very satisfied with the punctual service.
                </Text>
                <HStack ml={2} mb={2}>
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<Icon as={FaThumbsUp} />}
                  >
                    Like
                  </Button>
                  <Text>12</Text>{" "}
                </HStack>
              </GridItem>
              <GridItem>
                <Text mb={2} ml={5}>
                  October 24, 2021 <br />
                  <b>Kaveesha Hettige</b> <br />
                </Text>
              </GridItem>
            </Grid>
          </Box>

          <Box
            borderEndWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            pt={2}
            mt={2}
          >
            <Grid gridTemplateColumns="3fr 1fr" h="100%" mb={6}>
              <GridItem>
                <Text fontSize="lg" mb={2} pl={4}>
                  <Image src={StarImage} w="10%" mt={2} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Text>
                <HStack ml={2} mb={2}>
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<Icon as={FaThumbsUp} />}
                  >
                    Like
                  </Button>
                  <Text>6</Text>{" "}
                </HStack>
              </GridItem>
              <GridItem>
                <Text mb={2} ml={5}>
                  Octomber 24/ 2021 <br />
                  <b>Kaveesha Hettige</b> <br />
                </Text>
              </GridItem>
            </Grid>
          </Box>

          <Box
            borderEndWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            pt={2}
            mt={2}
          >
            <Grid gridTemplateColumns="3fr 1fr" h="100%" mb={6}>
              <GridItem>
                <Text fontSize="lg" mb={2} pl={4}>
                  <Image src={StarImage} w="10%" mt={2} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Text>
                <HStack ml={2} mb={2}>
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<Icon as={FaThumbsUp} />}
                  >
                    Like
                  </Button>
                  <Text>13</Text>{" "}
                </HStack>
              </GridItem>
              <GridItem>
                <Text mb={2} ml={5}>
                  Octomber 24/ 2021 <br />
                  <b>Kaveesha Hettige</b> <br />
                </Text>
              </GridItem>
            </Grid>
          </Box>

          <Box
            borderEndWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            pt={2}
            mt={2}
          >
            <Grid gridTemplateColumns="3fr 1fr" h="100%" mb={6}>
              <GridItem>
                <Text fontSize="lg" mb={2} pl={4}>
                  <Image src={StarImage} w="10%" mt={2} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </Text>
                <HStack ml={2} mb={2}>
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<Icon as={FaThumbsUp} />}
                  >
                    Like
                  </Button>
                  <Text>13</Text>{" "}
                </HStack>
              </GridItem>
              <GridItem>
                <Text mb={2} ml={5}>
                  Octomber 24/ 2021 <br />
                  <b>Kaveesha Hettige</b> <br />
                </Text>
              </GridItem>
            </Grid>
          </Box>

          {/* Add more reviews as needed */}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default PersonalDetails;
