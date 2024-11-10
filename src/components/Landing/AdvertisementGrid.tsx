import { useState } from "react";
import {
  Grid,
  GridItem,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import ActionButton from "../Buttons/ActionButton";
import Section from "./Section";

const AdvertisementGrid = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images = [
    "https://www.gavi.lk/wp-content/uploads/2019/03/bannercuts2.jpg",
    "https://essstr.blob.core.windows.net/uiimg/Carousel/slide9.jpg",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
    "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  const rightSide = (
    <HStack gap={5}>
      <ActionButton
        className="!p-5 !rounded"
        onClick={() => handleImageClick(0)}
      >
        View All
      </ActionButton>
    </HStack>
  );

  return (
    <Section heading="Featured" title="Advertisement" rightSide={rightSide}>
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
            onClick={() => handleImageClick(index)}
            cursor="pointer"
          >
            <Image
              h="full"
              w="full"
              src={image}
              alt="advertisement"
              style={{ borderRadius: "10px" }}
            />
          </GridItem>
        ))}
      </Grid>

      {/* Modal for full-screen advertisement view with navigation */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW="550px"
          maxH="550px"
        >
          <ModalBody
            p={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {selectedImageIndex !== null && (
              <>
                <IconButton
                  aria-label="Previous"
                  icon={<ArrowBackIcon />}
                  position="absolute"
                  left="-50px"
                  top="50%"
                  transform="translateY(-50%)"
                  color="white"
                  onClick={handlePrev}
                  variant="ghost"
                  border="2px"
                  _hover={{ bg: "white", color: "primary" }}
                  _active={{
                    bg: "primary",
                    color: "white",
                    transform: "scale(0.98)",
                    borderColor: "primary",
                  }}
                />
                <Image
                  objectFit="cover"
                  src={images[selectedImageIndex]}
                  alt="advertisement"
                  borderRadius="md"
                />
                <IconButton
                  aria-label="Next"
                  icon={<ArrowForwardIcon />}
                  position="absolute"
                  right="-50px"
                  top="50%"
                  transform="translateY(-50%)"
                  color="white"
                  onClick={handleNext}
                  variant="ghost"
                  border="2px"
                  _hover={{ bg: "white", color: "primary" }}
                  _active={{
                    bg: "primary",
                    color: "white",
                    transform: "scale(0.98)",
                    borderColor: "primary",
                  }}
                />
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default AdvertisementGrid;
