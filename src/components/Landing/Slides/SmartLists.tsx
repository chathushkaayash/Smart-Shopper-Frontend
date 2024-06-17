import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

import SmartListsImage from "../../../assets/landing/ecommerce-checkout-laptop-animate.svg";
import ActionButton from "../../Buttons/ActionButton";

const SmartLists = () => {
  return (
    <Flex h="80vh" bg="background">
      <Box h="100%" className="w-[50%]" overflow="hidden">
        <Center h="100%" justifyContent="flex-end" m={5}>
          <Image src={SmartListsImage} width={600} />
        </Center>
      </Box>

      <Box className="w-[50%]">
        <VStack
          alignItems="flex-start"
          fontSize="3xl"
          className="mt-[20vh]"
          ml={5}
        >
          <Box display="inline">
            <Text color="primary" as="span">
              Smart Lists.
            </Text>
            <Text as="span"> Best Prices. </Text>
            <Text as="span">Fast Delivery.</Text>
          </Box>
          <Text fontSize="5xl" fontWeight={700}>
            Revolutionizing Shopping for a Smarter Tomorrow
          </Text>
          <ActionButton className="mx-[20%]" size="lg">
            Explore More
          </ActionButton>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SmartLists;
