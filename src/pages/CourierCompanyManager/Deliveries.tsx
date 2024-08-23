import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Tab,
  Table,
  TabList,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import useOpportunities, { OpportunityQuery } from "@/hooks/useOpportunities";
import { Opportunity } from "@/hooks/useOpportunity";
import Stars from "../../assets/CourierCompany/stars.svg";
import MiddleContainer from "../../components/Containers/MiddleContainer";
import useDriver from "@/hooks/useDriver";

const Deliveries = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity>();
  const [opportunityQuery, setOpportunityQuery] = useState<OpportunityQuery>({
    status: "",
    month: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const opportunities = useOpportunities(opportunityQuery);

  const handleViewClick = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    onOpen();
  };

  const updateTab = (index: number) => {
    switch (index) {
      case 0:
        setOpportunityQuery({ ...opportunityQuery, status: "" });
        break;
      case 1:
        setOpportunityQuery({ ...opportunityQuery, status: "Active" });
        break;
      case 2:
        setOpportunityQuery({ ...opportunityQuery, status: "Delivered" });
        break;
      case 3:
        setOpportunityQuery({ ...opportunityQuery, status: "Cancelled" });
        break;
    }
  };

  if (opportunities.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MiddleContainer width="90vw">
      <Heading as="h4" size="md" mt={7} pl={7}>
        Delivery Details
      </Heading>
      <Container maxW="1330px" mt={4}>
        <Flex mb={4}>
          <Select
            placeholder="January"
            maxW="200px"
            mr={4}
            value={opportunityQuery.month}
            onChange={(e) => {
              setOpportunityQuery({
                ...opportunityQuery,
                month: e.target.value,
              });
            }}
          >
            <option value="">All Time</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Select>
          <Spacer />
          <Box display="flex" justifyContent="center" w="100%">
            <Tabs variant="enclosed" onChange={(index) => updateTab(index)}>
              <TabList mr={300}>
                <Tab>View All</Tab>
                <Tab>Active</Tab>
                <Tab>Delivered</Tab>
                <Tab>Cancelled</Tab>
              </TabList>
            </Tabs>
          </Box>
          <Spacer />
        </Flex>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>Order</Th>
              <Th>Start Date, Time</Th>
              <Th>Status</Th>
              <Th>Driver</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {opportunities.data?.results.map((opportunity, index) => (
              <DeliveryRow
                key={index}
                opportunity={opportunity}
                handleViewClick={handleViewClick}
              />
            ))}
          </Tbody>
        </Table>

        <Flex mt={4} justify="space-between">
          <Button variant="outline">Previous</Button>
          <Button variant="outline">Next</Button>
        </Flex>
      </Container>

      {/* Modal for View Button */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delivery Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOpportunity && <PopUp opportunity={selectedOpportunity} />}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </MiddleContainer>
  );
};

interface DeliveryRowProps {
  opportunity: Opportunity;
  handleViewClick: (delivery: Opportunity) => void;
}

const DeliveryRow = ({ opportunity, handleViewClick }: DeliveryRowProps) => {
  const driver = useDriver(opportunity.driverId);
  console.log(driver.data);

  return (
    <Tr>
      <Td>
        <Checkbox />
      </Td>
      <Td>#{opportunity.id}</Td>
      <Td>{opportunity.orderPlacedOn}</Td>
      <Td>
        <Text color={opportunity.status === "Active" ? "green.400" : "red.500"}>
          {opportunity.status}
        </Text>
      </Td>
      <Td>
        <HStack>
          <Avatar src={driver.data?.user.profilePic} size="sm" />
          <Box>
            <Text>{driver.data?.user.name}</Text>
            <Text>{driver.data?.user.number}</Text>
          </Box>
        </HStack>
      </Td>
      <Td>
        <Button
          width="full"
          bg="primary"
          color="white"
          mt={3}
          onClick={() => handleViewClick(opportunity)}
        >
          View
        </Button>
      </Td>
    </Tr>
  );
};

interface PopUpProps {
  opportunity: Opportunity;
}

const PopUp = ({ opportunity }: PopUpProps) => {
  return (
    <Box>
      <Box borderWidth="2px" borderRadius="lg" p={4} mb={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Order Details
        </Text>

        <Box mb={4}>
          <Text>
            <strong>Order Placed on:</strong> {opportunity.orderPlacedOn}
          </Text>
          <Text>
            <strong>Customer:</strong> {opportunity.consumer.name}
          </Text>
          <Text>
            <strong>Contact Number:</strong> {opportunity.consumer.phoneNumber}
          </Text>
          <Text>
            <strong>Delivery Cost:</strong> {opportunity.deliveryCost}
          </Text>
        </Box>
      </Box>

      <Heading as="h5" size="sm" mb={2}>
        Feedbacks
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="red">
        <Text fontSize="sm" color="gray.500">
          October 21, 2020
        </Text>
        <Box width="80px" height="40px">
          <Image src={Stars} alt="Stars" boxSize="100%" />
        </Box>

        <Text>Arrived on time. Good in delivery.</Text>
        <Flex mt={2}></Flex>
      </Box>
    </Box>
  );
};

export default Deliveries;
