import { Review } from "@/services/types";
import { DateTime } from "@/utils/Time";
import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import RatingStars from "./Inputs/Rating";

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
            <Stack fontSize="lg" gap={15} fontWeight={650}>
              <Text>{review.title}</Text>
              <RatingStars value={review.rating} />
            </Stack>
            <Spacer />
            <Stack fontWeight={500} alignItems={"end"}>
              <HStack>
                <Icon as={FaUser} />
                <Text>{review.user.name}</Text>
              </HStack>
              <Text fontSize={12} color={"gray"}>
                {DateTime.toString(review.createdAt)}
              </Text>
            </Stack>
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
