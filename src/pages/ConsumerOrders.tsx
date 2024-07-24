import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import AllView from "../components/ConsumerOrders/ViewAll";
import ToPay from "../components/ConsumerOrders/ToPay";
import Processed from "../components/ConsumerOrders/Processed";

const ConsumerOrders: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("View All");

  const renderComponent = () => {
    switch (activeTab) {
      case "To Pay":
        return <ToPay />;
      case "Processed":
        return <Processed />;
      default:
        return <AllView />;
    }
  };

  return (
    <Box
      className="p-5 h-screen bg-gray-100"
      bg="background"
      pt={7}
      pb={10}
      pl={20}
      pr={20}
    >
      <Box className="p-5 h-screen bg-gray-100" bg="white" borderRadius={10}>
        <Text as="h1" className="text-2xl mb-4 font-semibold" color={"primary"}>
          Order Details
        </Text>
        <Center>
          <Flex mb={4}>
            {["View All", "To Pay", "Processed"].map((tab) => (
              <Tabs
                key={tab}
                colorScheme={activeTab === tab ? "orange" : "gray"}
                onClick={() => setActiveTab(tab)}
                mx={2}
                fontWeight={700}
              >
                <TabList>
                  <Tab>{tab}</Tab>
                </TabList>
              </Tabs>
            ))}
          </Flex>
        </Center>
        <Tabs>
          <TabPanels>
            <TabPanel>{renderComponent()}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ConsumerOrders;
