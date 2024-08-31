import { Box, Button, Flex, HStack, Input,  VStack, useDisclosure } from '@chakra-ui/react';
import React from 'react';

interface UpdatePasswordProps {
    id: any;
}

const UpdatePassword = ({id}:UpdatePasswordProps) => {



    
    return (

        <>
        <Box w="100%">
              <HStack>
                <VStack w="100%">
                  <Input placeholder="Current Password"  bgColor="#F5F5F5"/>
                  <Input placeholder="New Password" bgColor="#F5F5F5"/>
                  <Input placeholder="Confirm New Password" bgColor="#F5F5F5"/>
                </VStack>
              </HStack>
            </Box>
            <Flex justifyContent="flex-end" gap={4} my={5}>
              <Button
                width="auto"
                bg="primary"
                color="white"
                borderColor={"primary"}
                borderWidth={1}
                _hover={{ bg: "white", color: "primary" }}
                _active={{ bg: "white", color: "primary" }}
                borderRadius="12px"
                
              >
                Update Password
              </Button>
              <Button
                width="auto"
                bg="white"
                color="primary"
                borderColor={"primary"}
                borderWidth={1}
                _hover={{ bg: "primary", color: "white" }}
                _active={{ bg: "primary", color: "white" }}
                borderRadius="12px"
                
              >
                Cancel
              </Button>
            </Flex>
         
        </>
    );
};

export default UpdatePassword;