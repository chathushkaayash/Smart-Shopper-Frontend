import {
    Box,
    Flex,
    Heading,
    HStack,
    VStack,
  } from "@chakra-ui/react";
  import { BiSolidShoppingBag } from "react-icons/bi";
  import { FaShoppingCart } from "react-icons/fa";
  import { IoBagCheckSharp } from "react-icons/io5";
  
  import DashboardCard from "./DashboardCard";
  
  import { useSupermarketEarningsStats } from "@/services/Supermarket/useSupermarketOrderStat";
import BarGraph from "@/components/Charts/BarGraph";
  
  const SupermarketEarnings = () => {
    const { data, error } = useSupermarketEarningsStats(1); // Replace with your actual supermarket ID
    const monthlyData = [
      0, 400, 0, 0, 0, 300, 450, 111, 111, 0, 0, 2700,

    ];
    
    const months = [
      "January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"
    ];
    

    // console.log(monthlyData, "data");
  
    // Handle error state
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    // Destructure values from the API response
    const { totEarnings, totMonthEarningstoPay, totMonthEarnings } = data || {};
  
    return (
      <Flex w="full">
        <Box w="full">
          <VStack gap="8vh" my="5vh" px="2vw" w="full">
            <HStack justifyContent="space-between" w="full" gap={6}>
              {/* Total Earnings Card */}
              <DashboardCard
                title="Total Earnings"
                content={totEarnings} // Dynamically use data
                icon={<FaShoppingCart />}
                background="blue.100"
              />
              {/* This Month Earnings Card */}
              <DashboardCard
                title="This Month Earnings"
                content={totMonthEarnings} // Dynamically use data
                icon={<BiSolidShoppingBag />}
                background="green.100"
              />
              {/* Earnings to Receive Card */}
              <DashboardCard
                title="Earnings to receive"
                content={totMonthEarningstoPay} // Dynamically use data
                icon={<IoBagCheckSharp />}
                background="red.100"
              />
            </HStack>
  
            {/* Monthly Earnings Section */}
            <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
              <Flex justifyContent="space-between">
                <Heading as="h3" size="lg" mb={4}>
                  Monthly Earnings
                </Heading>
                
                
                
              </Flex>
              <Box >
                  <BarGraph chartData={monthlyData} labels={months} height="400px"/>
                </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    );
  };
  
  export default SupermarketEarnings;
  