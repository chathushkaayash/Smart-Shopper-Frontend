import React, { useState, ChangeEvent } from 'react';
import { Grid, GridItem, Box, Text, VStack, Button, Image, Textarea, Tabs, TabList, TabPanels, Tab, TabPanel,Input } from "@chakra-ui/react";

const AdminSettings: React.FC = () => {
  const [TermsOfUse, setTermsOfUse] = useState('Terms of Use\n\n1. Acceptance of Terms: By using this website, you agree to the terms of this agreement.\n2. Provision of Services: We may modify or discontinue the service at any time without notice.\n3. User Responsibilities: Users must not use the website for unlawful purposes and must provide accurate information.\n4. Intellectual Property: All content is the property of the website owner and is protected by copyright laws.\n5. Limitation of Liability: We are not liable for any indirect, incidental, special, or consequential damages.\n6. Governing Law: These terms are governed by the laws of the jurisdiction.\n7. Changes to the Terms: We may modify these terms at any time. Continued use constitutes acceptance of the new terms.\n8. Contact Information: Contact us at [contact information] for any questions.');
  const [isEditing, setIsEditing] = useState(false);

  const changeTermsDetails = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTermsOfUse(e.target.value);
  };

  const toggleEditSave = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"main"`,
        }}
        gridTemplateRows={'auto' }
        gridTemplateColumns={{ base: '1fr', lg: 'auto' }}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        
        <GridItem pl='2' area={'main'} my={10} mx={300}>
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Terms Of Use</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box my={5} px={10} boxShadow="md">
                  <VStack>
                    <Image
                      src='https://via.placeholder.com/150'
                      alt='Product Image'
                      boxSize='70px'
                      objectFit='cover'
                      borderRadius="50%"
                      mr={4}
                    />
                    <Text fontSize="2xl">Kaveesha Hettige</Text>
                    <Box my={3}>
                      <Text fontSize='md' mb={1}>Email</Text>
                      <Input placeholder='admin@gmail.com' />
                    </Box>
                    <Box my={3}>
                      <Text fontSize='md' mb={1}>Current Password</Text>
                      <Input placeholder='*********' />
                    </Box>
                    <Box my={3}>
                      <Text fontSize='md' mb={1}>New Password</Text>
                      <Input placeholder='*********' />
                    </Box>
                    <Box my={3}>
                      <Button bg='primary' size='sm'>Save Changes</Button>
                    </Box>
                  </VStack>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box my={5} px={10} boxShadow="md" py={5}>
                <Box my={3}>
                    <Button bg="primary" size="sm" onClick={toggleEditSave}>
                      {isEditing ? 'Save Changes' : 'Edit'}
                    </Button>
                  </Box>
                  <Textarea 
                    value={TermsOfUse} 
                    onChange={changeTermsDetails} 
                    isReadOnly={!isEditing} 
                    rows={20}
                  />
                  
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </>
  );
}

export default AdminSettings;
