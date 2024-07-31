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
import { FaStar } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

interface ReviewProps {
  date: string;
  title: string;
  reviewer: string;
  reviewText: string;
  rating: number;
}


const Reviews: React.FC<ReviewProps> = ({ date, title, reviewer, reviewText, rating }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Flex>
            <Box p="1" fontWeight="650">
              <HStack spacing={2} color="yellow.400" mt={4}>
                {Array(rating).fill("").map((_, i) => (
                  <FaStar key={i} />
                ))}
              </HStack>
            </Box>
            <Spacer />
            <Box pr="5" mt={4} fontWeight={470}>
              <Text>{date}</Text>
            </Box>
          </Flex>

          <Flex>
            <Box p="1" fontSize="xl" mt={4} fontWeight={650}>
              <Text>{title}</Text>
            </Box>
            <Spacer />
            <Box pr="5" mt={6} fontWeight={500}>
              <HStack>
                <Icon as={FaUserPen} />
                <Text>{reviewer}</Text>
              </HStack>
            </Box>
          </Flex>

          <Box pr="5" mt={6} fontWeight={500} w="90%">
            <Text>{reviewText}</Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default Reviews;
