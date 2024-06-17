import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

import BestPricesImage from "../../../assets/landing/online-ads-animate.svg";
import ActionButton from "../../Buttons/ActionButton";

const BestPrices = () => {
  return (
    <Flex h="80vh" bg="background">
      <Box h="100%" className="w-[50%]" overflow="hidden">
        <Center h="100%" justifyContent="flex-end" m={5}>
          <Image src={BestPricesImage} width={500} />
        </Center>
      </Box>

      <Box className="w-[50%]">
        <VStack
          alignItems="flex-start"
          fontSize="3xl"
          className="mt-[10vh]"
          ml={5}
        >
          <Box display="inline">
            <Text as="span"> Smart Lists. </Text>
            <Text color="primary" as="span">
              Best Prices.
            </Text>
            <Text as="span"> Fast Delivery.</Text>
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

export default BestPrices;
