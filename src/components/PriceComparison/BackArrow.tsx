import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const BackArrow = () => {
  return (
    <Box
      as="button"
      _hover={{ color: "black", transform: 'scale(1.10)' }}
      _active={{ color: "black", transform: 'scale(1.10)' }}
    >
      <ArrowBackIcon boxSize={9} />
    </Box>
  );
};

export default BackArrow;
