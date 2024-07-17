import {
  Box,
  Center,
  HStack,
  IconButton,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SimpleSlider, { SliderMethods } from "../SimpleSlider";

import BeveragesIcon from "../../assets/landing/categoryIcons/beverages.svg?react";
// import FrozenIcon from "../../assets/landing/categoryIcons/frozen.svg?react";
import GroceryIcon from "../../assets/landing/categoryIcons/grocery.svg?react";
import FrozenIcon from "../../assets/landing/categoryIcons/snow-svgrepo-com.svg?react";

import Section from "./Section";

const BrowseByCategory = () => {
  const sliderRef = useRef<SliderMethods>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    slidesToShow: isMobile[0] ? 3 : 6,
    swipeToSlide: true,
  };

  const categories = [
    { name: "Beverages", icon: <BeveragesIcon fill="#ff7708" /> },
    { name: "Frozen", icon: <FrozenIcon fill="#ff7708" /> },
    { name: "Grocery", icon: <GroceryIcon fill="#ff7708" /> },
    { name: "Household", icon: <BeveragesIcon fill="#ff7708" /> },
    { name: "Personal Care", icon: <BeveragesIcon fill="#ff7708" /> },
    { name: "Pharmacy", icon: <BeveragesIcon fill="#ff7708" /> },
    { name: "Snacks", icon: <BeveragesIcon fill="#ff7708" /> },
    { name: "Others", icon: <BeveragesIcon fill="#ff7708" /> },
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
                // border="1px solid"
                // borderColor='primary'
                bg='white'
                borderRadius="lg"
                padding={5}
                flexDirection="column"
                gap={2}
                shadow='md'
                borderWidth='1.5px'
              >
                {category.icon}
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
