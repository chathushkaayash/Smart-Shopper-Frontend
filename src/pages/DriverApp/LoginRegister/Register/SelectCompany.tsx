import {
  Box,
  Center,
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
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { useState } from "react";
import SubmitButton from "../../../../components/Buttons/SubmitButton";
import DotIndicator from "@/components/DotIndicator";
import useDriverRegisterStore from "@/state-management/DriverRegisterStore";

const SelectCompany = () => {
  const { driverDetails, setDriverDetails, setStage } =
    useDriverRegisterStore();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const companies = ["DHL", "FedEx", "UPS", "USPS", "TNT", "Aramex", "DPD"];

  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      <Box position="absolute" top="2" left="2" cursor="pointer" onClick={()=>setStage(1)}>
        <Icon as={IoIosArrowBack} w={10} h={10} p={1} />
      </Box>
      <VStack>
        <Image src={Logo} width="150px" />
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text fontSize="lg" fontWeight="bold">
            Select Company
          </Text>
        </Box>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Please Select your Courier Company
        </Text>
      </VStack>

      {/* --------------- Search Bar --------------- */}

      <Center as="form">
        <InputGroup borderColor="primary" w="80vw">
          <InputLeftElement>
            <Icon as={IoSearchSharp} color="primary" />
          </InputLeftElement>
          <Input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search for a company"
            borderRadius="full"
          />
        </InputGroup>
      </Center>

      {/* --------------- form --------------- */}

      <VStack as="form" gap="2vh" h="full" justifyContent="space-between">
        <Box
          w="80vw"
          h="40vh"
          overflowY="scroll"
          borderWidth="1px"
          borderRadius="10"
          p={4}
          boxShadow="lg"
          css={{
            // '&::-webkit-scrollbar': { display: 'none' },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <List>
            {filteredCompanies.map((company, index) => (
              <ListItem
                key={index}
                p={2}
                borderRadius="md"
                onClick={() =>
                  setDriverDetails({
                    ...driverDetails,
                    courierCompany: company,
                  })
                }
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border={
                  driverDetails.courierCompany === company
                    ? "1px solid "
                    : "1px solid transparent"
                }
                borderColor={
                  driverDetails.courierCompany === company
                    ? "primary"
                    : "transparent"
                }
              >
                {company}
                <Icon
                  as={
                    company === driverDetails.courierCompany
                      ? MdRadioButtonChecked
                      : MdRadioButtonUnchecked
                  }
                  color={
                    driverDetails.courierCompany === company
                      ? "primary"
                      : "gray.400"
                  }
                  boxSize={5}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <VStack w="80vw">
          <SubmitButton
            disabled={!driverDetails.courierCompany}
            borderRadius={10}
            onClick={() => {
              if (driverDetails.courierCompany) setStage(3);
            }}
          >
            Next
          </SubmitButton>
          <DotIndicator
            current={1}
            total={4}
            className="absolute bottom-[2vh]"
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SelectCompany;
