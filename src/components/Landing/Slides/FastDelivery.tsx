import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import FastDeliveryImage from "../../../assets/landing/in-no-time-animate (1).svg";
import ActionButton from "../../Buttons/ActionButton";

const FastDelivery = () => {
  return (
    <Flex h="80vh" bg="background" paddingX={50}>
      <Box className="w-[50%]">
        <Stack
          //   alignItems="flex-start"
          fontSize="3xl"
          className="mt-[20vh]"
          ml={5}
          marginTop="30vh"
        >
          <Box display="inline">
            <Text as="span"> Smart Lists. </Text>
            <Text as="span"> Best Prices. </Text>
            <Text color="primary" as="span">
              Fast Delivery.
            </Text>
          </Box>
          <Text fontSize="5xl" fontWeight={700}>
            Revolutionizing Shopping for a Smarter Tomorrow
          </Text>
          <ActionButton className="mx-[20%]" size="lg">
            Explore More
          </ActionButton>
        </Stack>
      </Box>

      <Box h="100%" className="w-[50%]" overflow="hidden">
        <Image src={FastDeliveryImage} width={600} />
      </Box>
    </Flex>
  );
};

export default FastDelivery;
