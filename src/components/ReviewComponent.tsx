
import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import RatingStars from "./Inputs/Rating";
import { Review } from "@/services/types";

interface Props {
  review: Review;
}
// approved component
const ReviewComponent = ({ review }: Props) => {
  return (
    <>
      <Card
        boxShadow="lg"
        borderWidth={1}
        borderColor="gray.200"
        borderRadius={15}
      >
        <CardBody>
          <Flex>
            <Box fontWeight="650">
              <RatingStars value={review.rating} />
            </Box>
            <Spacer />
            <Box pr="5" mt={4} fontWeight={470}>
              <Text>{review.createdAt.getDateTime()}</Text>
            </Box>
          </Flex>

          <Flex>
            <Box fontSize="xl" mt={2} fontWeight={650}>
              <Text>{review.title}</Text>
            </Box>
            <Spacer />
            <Box pr="5" mt="auto" fontWeight={500}>
              <HStack>
                <Icon as={FaUser} />
                <Text>{review.user.name}</Text>
              </HStack>
            </Box>
          </Flex>

          <Box pr="5" mt={2} fontWeight={500} w="90%">
            <Text>{review.content}</Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default ReviewComponent;
