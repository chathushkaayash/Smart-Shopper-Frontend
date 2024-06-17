import { Image, Stack } from "@chakra-ui/react";
import KeelsIcon from "../assets/supermarket-icons/keels.jpeg";

// interface SupermarketLogoContainerProps {
//   // list of icons
// }

const SupermarketLogoContainer = () => {
  return (
    <Stack direction="row">
      <Image
        height={10}
        objectFit="cover"
        src={KeelsIcon}
        alt="Dan Abramov"
      />
      
      
    </Stack>
  );
};

export default SupermarketLogoContainer;
