import {
  Flex,
  Box,
  Heading,
  Text,
  Spacer,
  Image,
  Divider,
} from "@chakra-ui/react";

import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import AddressBox from "@/components/AddressBox";
import LogoSlider from "@/components/SupermarketSlider";

const supermarkets = [
    {
      name: "Keells Super",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, eros in vehicula vehicula, ex urna dapibus nisl, sit amet laoreet mauris justo non est. Morbi at vulputate magna. Integer non dui a odio cursus vulputate. Vestibulum et magna vitae odio tristique commodo eget eget odio. Fusce non ipsum venenatis, pellentesque dolor eget, tincidunt augue. Sed fermentum nunc et nunc tincidunt, non sodales urna viverra. Vivamus nec mauris arcu. Cras in tempor dolor, sed eleifend libero. Donec nec massa a nulla tincidunt ultrices. Nullam auctor sapien nec orci viKeells Super is one of the largest supermarket chains in Sri Lanka. It has a wide range of products from groceries to electronics.",
      address: "No:148, Vauxhall Street, Colombo",
      phone: "+94 11 2303500",
      website: "https://www.keellssuper.com",
      image: "https://essstr.blob.core.windows.net/ebill/KeellsLogo.png"
    },
    {
      name: "Cargills Food City",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, eros in vehicula vehicula, ex urna dapibus nisl, sit amet laoreet mauris justo non est. Morbi at vulputate magna. Integer non dui a odio cursus vulputate. Vestibulum et magna vitae odio tristique commodo eget eget odio. Fusce non ipsum venenatis, pellentesque dolor eget, tincidunt augue. Sed fermentum nunc et nunc tincidunt, non sodales urna viverra. Vivamus nec mauris arcu. Cras in tempor dolor, sed eleifend libero. Donec nec massa a nulla tincidunt ultrices. Nullam auctor sapien nec orci vi Cargills Food City is a popular supermarket chain in Sri Lanka known for its fresh produce and affordable prices.",
      address: "No:40, York Street, Colombo",
      phone: "+94 11 2421421",
      website: "https://www.cargillsceylon.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGGLL24J49FPy6N2vCiKjiOYBUBrLnjqGIg&s"
    },
    {
      name: "Arpico Supercentre",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, eros in vehicula vehicula, ex urna dapibus nisl, sit amet laoreet mauris justo non est. Morbi at vulputate magna. Integer non dui a odio cursus vulputate. Vestibulum et magna vitae odio tristique commodo eget eget odio. Fusce non ipsum venenatis, pellentesque dolor eget, tincidunt augue. Sed fermentum nunc et nunc tincidunt, non sodales urna viverra. Vivamus nec mauris arcu. Cras in tempor dolor, sed eleifend libero. Donec nec massa a nulla tincidunt ultrices. Nullam auctor sapien nec orci vi Arpico Supercentre offers a comprehensive range of products including groceries, household items, and electronics.",
      address: "No:20, Hyde Park Corner, Colombo",
      phone: "+94 11 2683000",
      website: "https://www.arpico.com",
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/Arpico_Supercenter_logo.png"
    },
    {
      name: "Laugfs Supermarkets",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor, eros in vehicula vehicula, ex urna dapibus nisl, sit amet laoreet mauris justo non est. Morbi at vulputate magna. Integer non dui a odio cursus vulputate. Vestibulum et magna vitae odio tristique commodo eget eget odio. Fusce non ipsum venenatis, pellentesque dolor eget, tincidunt augue. Sed fermentum nunc et nunc tincidunt, non sodales urna viverra. Vivamus nec mauris arcu. Cras in tempor dolor, sed eleifend libero. Donec nec massa a nulla tincidunt ultrices. Nullam auctor sapien nec orci vi Laugfs Supermarkets provide a wide variety of goods, from groceries to household items, with a focus on quality and service.",
      address: "No:50, Havelock Road, Colombo",
      phone: "+94 11 2555666",
      website: "https://www.laugfs.lk",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE_p4sORX_CdMhfU9njY67ZCeC2iUrdIvGw&s"
    }
  ];

interface SupermarketsProps {
    name: string;
    description: string;
    address: string;
    phone: string;
    website: string;
    image: string;

}

function Supermarkets() {


  return (
    <>
    <LogoSlider />
    {supermarkets.map((supermarket) => (
      <Box m={10} p={5} borderRadius={20} borderWidth={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
        //   align="center"
          justify="space-between"
          wrap="wrap"
          
        >
          <Box flex="1" minW={{ base: "100%", md: "70%" }} p={2}>
            <Heading size="lg" mb={4}>
              {supermarket.name}
            </Heading>
            <Text
              maxW="100%"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="short"
            >
                {supermarket.description}
            </Text>
            
          </Box>
          <Spacer />
          <Box flex="2" minW={{ base: "100%", md: "25%" }} p={2}>
            <Box my={2} borderRadius="lg">
              <Box
                p={3}
                w={"full"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={supermarket.image}
                  alt="Supermarket"
                  objectFit="cover"
                  borderRadius="md"
                  maxH="100px"
                />
              </Box>
              <AddressBox
                Icon={IoLocation}
                name={supermarket.address}
              />
              
              <AddressBox Icon={FaPhone} name={supermarket.phone} />
               
              <AddressBox Icon={TbWorld} name={supermarket.website} />
            </Box>
          </Box>
        </Flex>
        
      </Box>
    ))}
    </>
  );
}

export default Supermarkets;
