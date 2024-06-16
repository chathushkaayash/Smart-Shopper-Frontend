import { Box, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  topic: string;
  detail: string;
  image: string;
}

const ProductDescription = ({ topic, detail, image }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        {topic}
      </Text>
      <Box
        fontSize="30px"
        mb={4}
        as="button"
        color={isLiked ? "red" : "currentColor"}
        onClick={handleHeartClick}
        _hover={{ color: "red", transform: "scale(1.10)" }}
        _active={{ transform: "scale(1.10)" }}
      >
        <FaHeart />
      </Box>
      <Text fontSize="1xl" mb={4}>
        {detail}
      </Text>
      <Image src={image} alt="product" />
    </Box>
  );
};

export default ProductDescription;
