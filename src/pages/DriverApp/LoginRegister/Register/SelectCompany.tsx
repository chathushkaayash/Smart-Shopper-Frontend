import {
  Box,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../../../assets/logo.svg";

import { IoSearchSharp } from "react-icons/io5";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { useState } from "react";
import SubmitButton from "../../../../components/Buttons/SubmitButton";
import DotIndicator from "@/components/DotIndicator";

interface Props {
  setStage: (n: number) => void;
}

const SelectCompany = ({ setStage }: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const companies = ["DHL", "FedEx", "UPS", "USPS", "TNT", "Aramex", "DPD"];

  return (
    <VStack py="10vh" h="100vh" justifyContent="space-between">
      <VStack gap="5vh">
        <VStack>
          <Image src={Logo} width="150px" />
          {/* <VStack> */}
          <Box display="inline" fontSize="2xl" fontWeight="bold">
            <Text fontSize="lg" fontWeight="bold">
              Select Company
            </Text>
          </Box>

          <Text fontSize="md" color="gray" fontWeight="bold">
            Please Select your Courier Company
          </Text>
        </VStack>
        <InputGroup borderColor="primary" w="80vw">
          <InputLeftElement>
            <Icon as={IoSearchSharp} color="primary" />
          </InputLeftElement>
          <Input placeholder="Search for a company" borderRadius="full" />
        </InputGroup>
        <Box
          w="80vw"
          h="40vh"
          overflowY="scroll"
          borderWidth="1px"
          borderRadius="10"
          p={4}
          // mt={4}

          boxShadow="lg"
          css={{
            //   '&::-webkit-scrollbar': { display: 'none' },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <List>
            {companies.map((company, index) => (
              <ListItem
                key={index}
                p={2}
                borderRadius="md"
                onClick={() => setSelectedCompany(company)}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border={
                  selectedCompany === company
                    ? "1px solid "
                    : "1px solid transparent"
                }
                borderColor={
                  selectedCompany === company ? "primary" : "transparent"
                }
              >
                {company}
                <Icon
                  as={
                    company === selectedCompany
                      ? MdRadioButtonChecked
                      : MdRadioButtonUnchecked
                  }
                  color={selectedCompany === company ? "primary" : "gray.400"}
                  boxSize={5}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>

      <VStack w="80vw" mt="auto">
        <SubmitButton borderRadius={10} onClick={() => setStage(3)}>
          Next
        </SubmitButton>
        <DotIndicator current={1} total={4} />
      </VStack>
      {/* <DotIndicator current={1} total={4} /> */}
    </VStack>
  );
};

export default SelectCompany;
