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
} from "@chakra-ui/react";

import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import MiddleContainer from "../../components/Containers/MiddleContainer";
import FaceImage from "../../assets/CourierCompany/Avatar3.svg";
import StarImage from "../../assets/CourierCompany/stars.svg";

const PersonalDetails = () => {
  return (
    <MiddleContainer width="80vw">
      <Grid gridTemplateColumns="1fr 3fr" h="100%" pl={8}>
        <GridItem h="100%">
          <Box borderRadius="lg" p={4} mb={2} mt={5} ml={5} mr={2}>
            <Text fontSize="lg" fontWeight="bold">
              Driver Personal Details
            </Text>

            <Image src={FaceImage} w="40%" mt={5} ml={7} mb={4} />
            <Text>
              Name: Kaveesha Hettige
              <br />
              Age: 28
              <br />
              Gender: male
              <br />
              Contact No: 077-123-4567
              <br />
              Vehicle Type: Bicycle
              <br />
              Vehicle No: ABC123
            </Text>
          </Box>

          <GridItem px={2} py={2}>
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
              <Box
                display="inline"
                fontSize="md"
                mt={1}
                mb={0}
                fontWeight="630"
              >
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
          </GridItem>
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

          {/* Scrollable container */}
          <Box mt={4} p={4} overflowY="auto" maxH="470px">
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
                  <Text mb={2} ml={12}>
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
                  <Text mb={2} ml={12}>
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
                  <Text mb={2} ml={12}>
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
                  <Text mb={2} ml={12}>
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
    </MiddleContainer>
  );
};

export default PersonalDetails;
