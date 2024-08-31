import {
    Alert,
    AlertDescription,
    AlertIcon,
    Box,
    Grid,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import useSupermarket from "@/hooks/useSupermarket";
  
  interface SupermarketDetailsProps {
    id: any;
  }
  
  const SupermarketDetails = ({ id }: SupermarketDetailsProps) => {
    const { data: supermarket } = useSupermarket(id);
  
    return (
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius={10}
        width="full"
        overflow="hidden"
        h="fit-content"
      >
        <Heading fontSize="2xl" p={5}>
          Supermarket Details
        </Heading>
  
        <Box px={5} w="full">
          <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={2}>
            <Text fontWeight={'600'}>Supermarket Name</Text>
            <Text>: {supermarket?.name}</Text>
            <Text fontWeight={'600'}>Contact Number</Text>
            <Text>: {supermarket?.contactNo}</Text>
            <Text fontWeight={'600'}>Address</Text>
            <Text>: {supermarket?.address}</Text>
          </Grid>
        </Box>
  
        <Box p={5} w="full">
          <Box
            as="iframe"
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.789428869815!2d79.91832237448237!3d6.852039719259376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25078cb171be1%3A0x3a7d6840696d56f9!2s226%20High%20Level%20Rd%2C%20Maharagama%2010280!5e1!3m2!1sen!2slk!4v1724079750346!5m2!1sen!2slk" 
            width="100%"
            height="200"
            loading="lazy"
            border="none"
            borderRadius={5}
          />
        </Box>
  
        <Alert status="warning" m={5} w="fit-content" borderRadius={5}>
          <AlertIcon />
          You can't change the supermarket details. If you want to change the
          details, please contact the admin.
        </Alert>
      </Box>
    );
  };
  
  export default SupermarketDetails;
  