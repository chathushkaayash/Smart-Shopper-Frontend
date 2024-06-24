import { Box, Center, Flex, Image, Text, VStack } from "@chakra-ui/react";

import ActionButton from "../Buttons/ActionButton";

interface Props {
  image: string;
  title: "SmartLists" | "BestPrices" | "FastDelivery";
}

const Slide = ({ image, title }: Props) => {
  const titles = ["SmartLists", "BestPrices", "FastDelivery"];

  const titlesMap: { [key: string]: string } = {
    SmartLists: "Smart Lists.",
    BestPrices: "Best Prices.",
    FastDelivery: "Fast Delivery.",
  };

  return (
    <Flex h="80vh" bg="background">
      <Box h="100%" className="w-[50%]" overflow="hidden">
        <Center h="100%" justifyContent="flex-end" m={5}>
          <Image src={image} width={title === "BestPrices" ? 500 : 600} />
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
            {/* <Text as="span" color={title === "SmartList" ? "white" : ""}>
              Smart Lists.
            </Text>
            <Text as="span" color={title === "BestPrices" ? "white" : ""}>
              Best Prices.{" "}
            </Text> */}
            {titles.map((t, index) => (
              <Text as="span" color={t === title ? "primary" : ""} key={index}>
                {titlesMap[t] + " "}
              </Text>
            ))}
          </Box>
          <Text fontSize="5xl" fontWeight={700}>
            Revolutionizing Shopping for a Smarter Tomorrow
          </Text>
          <ActionButton className="mt-[5vh]" size="lg">
            Explore More
          </ActionButton>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Slide;
