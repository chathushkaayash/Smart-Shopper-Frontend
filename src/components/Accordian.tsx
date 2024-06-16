import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";


interface AccordionItemProps {
    title: string;
    content: string;
    }

interface Props {
    items: AccordionItemProps[];
}

const Accordian = ({ items}: Props) => {
  return (
    <Accordion allowToggle>

{items.map((item, index) => (
      <AccordionItem key={index}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                    {item.title}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {item.content}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
))}
    </Accordion>
  );
};

export default Accordian;
