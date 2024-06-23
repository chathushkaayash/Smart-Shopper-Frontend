import { Box, Center, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SimpleSlider, { SliderMethods } from "../SimpleSlider";

import BeveragesIcon from "../../assets/landing/categoryIcons/beverages.svg";
import FrozenIcon from "../../assets/landing/categoryIcons/frozen.svg";
import GroceryIcon from "../../assets/landing/categoryIcons/grocery.svg";
import Section from "./Section";

const BrowseByCategory = () => {
  const sliderRef = useRef<SliderMethods>(null);

  const nextSlide = () => {
    sliderRef.current?.next();
  };

  const previousSlide = () => {
    sliderRef.current?.previous();
  };

  const config = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
  };

  const categories = [
    { name: "Beverages", icon: BeveragesIcon },
    { name: "Frozen", icon: FrozenIcon },
    { name: "Grocery", icon: GroceryIcon },
    { name: "Household", icon: BeveragesIcon },
    { name: "Personal Care", icon: BeveragesIcon },
    { name: "Pharmacy", icon: BeveragesIcon },
    { name: "Snacks", icon: BeveragesIcon },
    { name: "Others", icon: BeveragesIcon },
  ];

  const rightSide = (
    <HStack gap={5}>
      <IconButton
        aria-label="Next"
        icon={<FaArrowLeft />}
        bg="primary"
        color="white"
        width="fit-content"
        onClick={previousSlide}
      />
      <IconButton
        aria-label="Next"
        icon={<FaArrowRight />}
        bg="primary"
        color="white"
        width="fit-content"
        onClick={nextSlide}
      />
    </HStack>
  );

  return (
    <Section
      heading="Categories"
      title="Browse by Category"
      rightSide={rightSide}
    >
      <Box w="full">
        <SimpleSlider config={config} ref={sliderRef}>
          {categories.map((category) => (
            <Box key={category.name}>
              <Center
                height={120}
                margin={2}
                border="1px solid"
                // borderColor='primary'
                borderRadius="lg"
                padding={5}
                flexDirection="column"
                gap={2}
              >
                <Image src={category.icon} boxSize={8} />
                <Text fontWeight={600}>{category.name}</Text>
              </Center>
            </Box>
          ))}
        </SimpleSlider>
      </Box>
    </Section>
  );
};

// <Box w="full">
//   <SimpleSlider config={config} ref={sliderRef}>
//     {categories.map((category) => (
//       <Box key={category.name}>
//         <Center
//           height={120}
//           margin={2}
//           border="1px solid"
//           borderRadius="lg"
//           padding={5}
//           flexDirection="column"
//           gap={2}
//         >
//           <Image src={category.icon} boxSize={8} />
//           <Text fontWeight={600}>{category.name}</Text>
//         </Center>
//       </Box>
//     ))}
//   </SimpleSlider>
// </Box>;

export default BrowseByCategory;
