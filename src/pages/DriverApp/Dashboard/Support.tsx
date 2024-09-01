import {
  Box,
  VStack,
  HStack,
  Icon,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Support = () => {
  const navigate = useNavigate();
  return (
    <VStack h="23vh" px="8vw" pt="3vh"  borderWidth={2}>
      <HStack w="full" pos="relative" left={-5}>
        <Box
          p={1}
          background="white"
          borderRadius="50%"
          onClick={() => navigate("/driver/account")}
          cursor="pointer"
        >
          <Icon as={IoMdArrowRoundBack} w={10} h={10} p={1} />
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Support Center
        </Text>
      </HStack>
      <Stack gap={10}>
        <Text fontSize="lg" color="gray.600">
          We're here to help! Find answers to common questions or contact us
          directly.
        </Text>

        {/* FAQ Section */}
        <Box w="full" p={5} bg="white" borderRadius="md" shadow="md">
          <Heading as="h2" size="md" mb={5}>
            Frequently Asked Questions
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I reset my password?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                To reset your password, go to the account,click on "Change
                Password", and follow the instructions.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How can I track my deliveries?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                You can track your deliveries in the "Deliveries" section of
                your account. Here, you'll see real-time updates on your
                delivery status.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Who do I contact for technical support ,inquiries or
                  complaints?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                For technical support, inquiries, or complaints, you can email
                us or call us .
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box w="full" p={15} bg="white" borderRadius="md" shadow="md">
          <HStack mb={5}>
            <Icon as={FaPhoneAlt} boxSize={6} color="primary" />
            <Text fontSize="lg">+94 71 123 4567</Text>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} boxSize={6} color="primary" />
            <Text fontSize="lg">support@smartshopper.com</Text>
          </HStack>
        </Box>
      </Stack>
    </VStack>
  );
};

export default Support;
