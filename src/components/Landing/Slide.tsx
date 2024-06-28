import {
  Box,
  Grid,
  GridItem,
  Image,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import ActionButton from "../Buttons/ActionButton";
import TextWithLineBreaks from "../Containers/TextWithLineBreaks";

interface Props {
  image: string;
  title: "SmartLists" | "BestPrices" | "FastDelivery";
}

const Slide = ({ image, title }: Props) => {
  const titles = ["SmartLists", "BestPrices", "FastDelivery"];

  const titlesMap: { [key: string]: string } = {
    SmartLists: "Smart Lists. ",
    BestPrices: "Best Prices. ",
    FastDelivery: "Fast Delivery. ",
  };

  return (
    <Grid h="70vh" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
      <GridItem h="100%" className="w-[100%]" overflow="hidden">
        <VStack
          h="100%"
          alignItems={{ base: "center", md: "flex-end" }}
          justifyContent="center"
          m={5}
        >
          {/* Show this text in the mobile screen */}
          <Show below="md">
            <TextWithLineBreaks
              fontSize="3xl"
              fontWeight={700}
              gap={3}
              align="center"
            >
              Revolutionizing Shopping\n For a Smarter Tomorrow
            </TextWithLineBreaks>
          </Show>

          {/* <Image src={image} width={title === "BestPrices" ? 500 : 600} /> */}
          <Image
            src={image}
            width={{
              base: "70vw",
              // md: `${title === "BestPrices" ? 500 : 600}`,
              md: "clamp(60vh, 2.5vw, 40vw)",
            }}
            marginRight={{ base: 0, lg: "4vw" }}
          />
        </VStack>
      </GridItem>

      <Show above="md">
        <GridItem className="w-[100%]">
          <Stack justifyContent="center" fontSize="3xl" ml={5} h="full">
            <Box display="inline">
              {titles.map((t, index) => (
                <Text
                  as="span"
                  color={t === title ? "primary" : ""}
                  fontSize={{ md: "xl", xl: "3xl" }}
                  key={index}
                >
                  {titlesMap[t]}
                </Text>
              ))}
            </Box>

            <TextWithLineBreaks
              fontSize={{ md: "3xl", xl: "5xl" }}
              fontWeight={700}
              gap={3}
            >
              Revolutionizing Shopping\n For a Smarter Tomorrow
            </TextWithLineBreaks>

            <ActionButton className="mt-[5vh]" size="lg">
              Explore More
            </ActionButton>
          </Stack>
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Slide;
