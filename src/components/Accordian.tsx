import useSupermarket from "@/hooks/useSupermarket";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Image
} from "@chakra-ui/react";

interface Props {
  supermarketId: number;
}

const SupermarketInformation = ({ supermarketId }: Props) => {
  const supermarket = useSupermarket(supermarketId);
  console.log(supermarket);

  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <HStack as="span" flex="1" textAlign="left">
                {/* <Text>{supermarket.data?.name}</Text> */}
                <Image src={supermarket.data?.logo} w={"4vw"} />
              </HStack>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {supermarket.data?.address}
            {supermarket.data?.description}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default SupermarketInformation;
