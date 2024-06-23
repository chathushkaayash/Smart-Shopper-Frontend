import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";

import ActionButton from "../Buttons/ActionButton";
import Section from "./Section";

const AdvertisementGrid = () => {
  const rightSide = (
    <HStack gap={5}>
      <ActionButton className="!p-5 !rounded">View All</ActionButton>
    </HStack>
  );

  const images = [
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
    "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
    "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
  ];

  return (
    <Section
      heading="Featured"
      title="Advertisement"
      rightSide={rightSide}
    >
      <Grid
        w="full"
        gridTemplate={{
            base: "40vw / 1fr",
          md: "repeat(2, 30vw) / repeat(2, 1fr)",
          lg: "repeat(1, 16vw) / repeat(4, 1fr)",
        }}
        gridTemplateAreas={{
          base: `"item-1" "item-2" "item-3" "item-4"`,
          md: `"item-1 item-2" "item-3 item-4"`,
          lg: `"item-1 item-1 item-2 item-2" "item-1 item-1 item-3 item-4"`,
        }}
        gap={{ base: 2, md: 4 }}
      >
        {images.map((image, index) => (
          <GridItem
            area={"item-" + (index + 1)}
            key={index}
            w="full"
            h="full"
          >
            <Image
            h='full'
            w="full"
            //   objectFit="cover"
              src={image}
              alt="advertisement"
              style={{ borderRadius: "10px" }}
            />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};

export default AdvertisementGrid;
