import {
  Box,
  Center,
  HStack,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SimpleSlider, { SliderMethods } from "../SimpleSlider";

import BeveragesIcon from "../../assets/landing/categoryIcons/beverages.svg?react";
import CondimentIcon from "../../assets/landing/categoryIcons/condiments.svg?react";
import BakingIcon from "../../assets/landing/categoryIcons/baking.svg?react";
import FoodIcon from "../../assets/landing/categoryIcons/food.svg?react";
import DecorationIcon from "../../assets/landing/categoryIcons/decoration.svg?react";
import CleaningIcon from "../../assets/landing/categoryIcons/cleaning.svg?react";
import ElectronicIcon from "../../assets/landing/categoryIcons/electric.svg?react"; 
import ClothingIcon from "../../assets/landing/categoryIcons/clothing.svg?react";
import ShoesIcon from "../../assets/landing/categoryIcons/shoe.svg?react";
import FurnitureIcon from "../../assets/landing/categoryIcons/furniture.svg?react";

import useProductQueryStore from "@/state-management/productQuery/store";
import Section from "./Section";

const BrowseByCategory = () => {
  const sliderRef = useRef<SliderMethods>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const setCategory = useProductQueryStore((s) => s.setCategory);

  const nextSlide = () => {
    sliderRef.current?.next();
  };

  const previousSlide = () => {
    sliderRef.current?.previous();
  };

  const config = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile[0] ? 3 : 6,
    swipeToSlide: true,
  };

  const iconProps = { fill: "#ff7708", width: "full", height: "full" };
  const categories = [
    { name: "Drinks", icon: <BeveragesIcon {...iconProps} /> },
    { name: "Condiment", icon: <CondimentIcon {...iconProps} /> },
    { name: "Baking", icon: <BakingIcon {...iconProps} /> },
    { name: "Food", icon: <FoodIcon {...iconProps} /> },
    { name: "Decoration", icon: <DecorationIcon {...iconProps} /> },
    { name: "Cleaning", icon: <CleaningIcon {...iconProps} /> },
    { name: "Electronics", icon: <ElectronicIcon {...iconProps} /> },
    { name: "Clothing", icon: <ClothingIcon {...iconProps} /> },
    { name: "Shoes", icon: <ShoesIcon {...iconProps} /> },
    { name: "Furniture", icon: <FurnitureIcon {...iconProps} /> },
  ];

  const rightSide = (
    <HStack gap={5}>
      <IconButton
        aria-label="Next"
        icon={<FaArrowLeft />}
        bg="primary"
        color="white"
        width="fit-content"
        border="2px"
        _hover={{ bg: "white", color: "primary" }}
        _active={{
          bg: "primary",
          color: "white",
          transform: "scale(0.98)",
          borderColor: "primary",
        }}
        onClick={previousSlide}
      />
      <IconButton
        aria-label="Next"
        icon={<FaArrowRight />}
        bg="primary"
        color="white"
        width="fit-content"
        border="2px"
        _hover={{ bg: "white", color: "primary" }}
        _active={{
          bg: "primary",
          color: "white",
          transform: "scale(0.98)",
          borderColor: "primary",
        }}
        onClick={nextSlide}
      />
    </HStack>
  );

  const handleClickedCategory = (category: string) => {
    setCategory(category);
  };

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
                bg="white"
                borderRadius="lg"
                padding={5}
                flexDirection="column"
                gap={2}
                shadow="md"
                borderWidth="1.5px"
                _hover={{ borderWidth: 2, borderColor: "primary", transform: "scale(0.98)" }}
                onClick={() => handleClickedCategory(category.name)}
              >
                <Box width={55} height={50}>
                  {category.icon}
                </Box>
                <Text fontWeight={600} whiteSpace={"nowrap"}>
                  {category.name}
                </Text>
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
