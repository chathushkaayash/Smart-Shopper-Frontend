import React, { useRef } from "react";
import { Heading, Flex, Box, Center, Text, VStack, Select, Icon, Button, Image } from "@chakra-ui/react";
import { CiImageOn, CiEdit } from "react-icons/ci";

const AdminAdvertisements: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Handle the file upload logic here
    if (file) {
      console.log(file);
    }
  };

  return (
    <VStack gap="8vh" my="5vh" px={10} w="full" fontWeight="bold">
      <Box width='full'>
        <Heading size='md' my={4}>Publish New</Heading>
        <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
          <Flex w='full' gap={5}>
            <Box w='40%' borderRadius="10" borderWidth="1px" borderColor={'primary'} px={'100px'} py={'60px'}>
              <Center onClick={handleIconClick}>
                <VStack>
                  <Icon as={CiImageOn} boxSize={8} color={'primary'} />
                  <Text fontSize='md'>Upload banner here</Text>
                </VStack>
              </Center>
              <input
                type="file"
                ref={inputFileRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </Box>
            <Box w="15%">
              <Text fontSize='md'>From :</Text>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Box>
            <Box w="15%">
              <Text fontSize='md'>To :</Text>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Box>
            <Box w="15%">
              <Text fontSize='md'>Prority :</Text>
              <Select placeholder='Select option'>
                <option value='option1'>Low</option>
                <option value='option2'>Medium</option>
                <option value='option3'>High</option>
              </Select>
            </Box>
            <Box w="15%">
              <Button bg='primary' size='md' mt={6}>
                Publish
              </Button>
            </Box>
          </Flex>
        </Box>
        <Heading size='md' my={4}>Advertisements</Heading>
        <Flex my={4}>
          <Box>
            <Select placeholder='Select option'>
              <option value='option1' selected>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Box>
        </Flex>
        <Box p={5} shadow="md" borderWidth="1px" w="full" borderRadius={15}>
          <Image
            src='https://via.placeholder.com/150'
            alt='Product Image'
            objectFit='cover'
            m={4}
          />
          <Flex justifyContent={'flex-end'} my={1} mx={10}>
            <Button bg='primary' size='md'>
              <Icon as={CiEdit} />
              <Text px={2}>Edit</Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
};

export default AdminAdvertisements;
