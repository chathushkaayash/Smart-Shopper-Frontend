import {
    Box,
    Flex,
    HStack,
    Text,
    Card,
    CardBody,
    Spacer,
    Icon,
  } from "@chakra-ui/react";

  import {FaStar} from "react-icons/fa";
  import {FaUserPen} from "react-icons/fa6";

  const Reviews = () => {
    return (
        <>
        <Card>
        <CardBody>

            <Flex>
          <Box p='1' fontWeight="650" >
          <HStack spacing={2} color="yellow.400" mt={4}>
              {Array(5).fill("").map((_, i) => (
              <FaStar key={i} />
                ))}
              </HStack>
          </Box>
          <Spacer />
          <Box pr='5' mt={4} fontWeight={470}>
          <Text>June 17,2024</Text>
          </Box>
          </Flex>

          <Flex>
          <Box p='1' fontSize="xl" mt={4} fontWeight={650}>
          <Text>Delightful Crispiness in Every Bite </Text>
          </Box>
          <Spacer />
          <Box pr='5' mt={6} fontWeight={500}>
          <HStack>
            <Icon as={FaUserPen } />
            <Text>Kaveesha Hettige</Text>
          </HStack>
          </Box>
          </Flex>

          <Box pr='5' mt={6} fontWeight={500} w="90%">
          <Text>
          I recently had the pleasure of trying Cream Cracker Biscuits, and they have quickly become a staple in my pantry. Here's a detailed review of my experience:
          The packaging is simple yet effective, keeping the biscuits fresh and crispy. The resealable pack is a thoughtful touch.
          </Text>
          </Box>
          
        </CardBody>
        </Card>

        <Card mt={4}>
        <CardBody>

            <Flex>
          <Box p='1'  fontWeight="650" >
          <HStack spacing={2} color="yellow.400" mt={4}>
              {Array(3).fill("").map((_, i) => (
              <FaStar key={i} />
                ))}
              </HStack>
          </Box>
          <Spacer />
          <Box pr='5' mt={4} fontWeight={470}>
          <Text>May 21,2024</Text>
          </Box>
          </Flex>

          <Flex>
          <Box p='1' fontSize="xl" mt={4} fontWeight={650}>
          <Text>Munchee's Quality  </Text>
          </Box>
          <Spacer />
          <Box pr='5' mt={6} fontWeight={500}> 
          <Text>Milinda Sandaruwan</Text>
          </Box>
          </Flex>

          <Box pr='5' mt={6} fontWeight={500} w="90%">
          <Text>
          Now the quality has gone down.
          </Text>
          </Box>
          
        </CardBody>
        </Card>

        </>
       
    );
  };
  
  export default Reviews;
  