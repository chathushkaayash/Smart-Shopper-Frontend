import { Grid, GridItem,Card,CardBody,Heading,Flex,Box,Center,Text,VStack,Select,
  Icon,Spacer,Button,Image} from "@chakra-ui/react"
  import { CiImageOn,CiEdit } from "react-icons/ci";



const AdminAdvertisements = () => {
  return (
    <>
    <Grid
  templateAreas={{
                base:`"main"
                      "footer"`,
                lg:`"main"
                    "footer"`,
                
                }}
                gridTemplateRows={'auto auto' }
                gridTemplateColumns={{ base: '1fr', lg: 'auto' }}
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  pl='2' area={'main'} my={1} mx={10}>
    <Heading size='lg' my={4}>Publish New</Heading>
    <Card px={10} py={1}>
        <CardBody>
            <Center>
              <Box borderRadius="8%" borderWidth="1px" borderColor={'primary'} px={'100px'} py={'60px'}>
                <Center>
                  <VStack>
                  <Icon as={CiImageOn} boxSize={8} color={'primary'}/>
                  <Text fontSize='md'>Upload banner here</Text>
                  </VStack>
                </Center>
              </Box>
              <Spacer />

              <Box>
              <Text fontSize='md'>From :</Text>

              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>

              </Box>
              <Spacer />

              <Box>
              <Text fontSize='md'>To :</Text>

              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>

              </Box>
              <Spacer />
              <Box>
              <Text fontSize='md'>Prority :</Text>

              <Select placeholder='Select option'>
              <option value='option1'>Low</option>
              <option value='option2'>Medium</option>
              <option value='option3'>High</option>
              </Select>
              </Box>

              <Spacer />
              <Box>
              <Button bg='primary' size='md' mt={6}>
                  Publish
              </Button>
              </Box>

              


            </Center>
        </CardBody>
    </Card>
   
  </GridItem>
  <GridItem pl='2' area={'footer'} my={1} mx={10}>
  <Heading size='lg' my={4}>Advertisements</Heading>
  <Flex my={4}>
  <Box>

              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>

              </Box>

  </Flex>
  

  <Card px={10} py={1} mb={10}>
        <CardBody>
            <Image src='https://via.placeholder.com/150'
                  alt='Product Image'  
                  objectFit='cover'
                  m={4} />
        </CardBody>
        <Flex justifyContent={'flex-end'} my={1} mx={10}>
              <Button bg='primary' size='md'>
              <Icon as={CiEdit}/>
                  <Text px={2}>Edit</Text>
              </Button>
        </Flex>
        
    </Card>
    
    
  </GridItem>
</Grid>
    </>
    
  )
}

export default AdminAdvertisements
