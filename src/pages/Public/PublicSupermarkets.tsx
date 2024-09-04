import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

import Footer from "@/components/Footer";
import AddressBox from "@/components/AddressBox";
import LogoSlider from "@/components/SupermarketSlider";

const supermarkets = [
  {
    name: "Keells Super",
    description:
    "Keells Super, a leading supermarket chain in Sri Lanka, is a subsidiary of John Keells Holdings, one of the largest conglomerates in the country. Keells is known for its commitment to providing fresh produce, a wide variety of groceries, and high-quality household items. The brand has implemented various sustainability initiatives, including reducing plastic usage and promoting eco-friendly products. Keells also offers an online shopping platform with home delivery services, making it convenient for customers to shop from the comfort of their homes. The supermarket frequently runs promotional campaigns, offering discounts and loyalty rewards through the Keells Rewards program, which further enhances customer satisfaction.",
    address: "No:148, Vauxhall Street, Colombo",
    phone: "+94 11 2303500",
    website: "https://www.keellssuper.com",
    image: "https://essstr.blob.core.windows.net/ebill/KeellsLogo.png",
  },
  {
    name: "Cargills Food City",
    description:
    "Cargills Food City is one of the most extensive and popular retail chains in Sri Lanka, operated by Cargills (Ceylon) PLC, a company with deep roots in the local food industry. With over 400 outlets across the country, Cargills Food City is synonymous with affordability and accessibility. The supermarket is renowned for its farmer- friendly approach, directly sourcing fresh produce from local farmers, which helps to keep prices low while ensuring high quality. Cargills also places a strong emphasis on innovation, offering a variety of products including organic foods, ready-to-eat meals, and a diverse range of international brands. The supermarket chain is also involved in numerous community service initiatives, such as educational scholarships and health campaigns, reflecting its commitment to corporate social responsibility.",
    address: "No:40, York Street, Colombo",
    phone: "+94 11 2421421",
    website: "https://www.cargillsceylon.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGGLL24J49FPy6N2vCiKjiOYBUBrLnjqGIg&s",
  },
  {
    name: "Arpico Supercentre",
    description:
    "Arpico Supercentre is a flagship retail brand under Richard Pieris & Co., one of the oldest and most respected conglomerates in Sri Lanka. Arpico offers an unparalleled shopping experience with its large-format stores that feature a wide range of products, including groceries, electronics, furniture, garden supplies, and more. The supercentres are designed to be family-friendly destinations, often including in-store cafes, play areas for children, and ample parking. Arpico has a strong reputation for its customer service and the quality of its products, particularly in the household and home improvement categories. The brand also offers a comprehensive loyalty program called Arpico Privilege, which provides customers with exclusive discounts and rewards. Additionally, Arpico is committed to sustainability, with initiatives focused on reducing carbon footprint, waste management, and energy efficiency in its stores.",
    address: "No:20, Hyde Park Corner, Colombo",
    phone: "+94 11 2683000",
    website: "https://www.arpico.com",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Arpico_Supercenter_logo.png",
  },
  {
    name: "Laugfs Supermarkets",
    description:
    "Laugfs Supermarkets, part of the diversified Laugfs Holdings Limited, offers a comprehensive retail experience with a focus on quality, variety, and customer satisfaction. The supermarket chain is known for its clean and organized stores, friendly staff, and a wide selection of products ranging from daily groceries to household essentials. Laugfs also offers its own branded products, which are known for their quality and affordability. The supermarket chain is constantly evolving, with a focus on expanding its product range, enhancing store layouts, and improving the overall shopping experience. Laugfs Supermarkets also provide a loyalty program known as Laugfs Supermarkets Privilege Card, which rewards customers with points that can be redeemed for discounts on future purchases. The brand is also committed to supporting local producers and suppliers, ensuring that customers have access to fresh, locally sourced products.",
    address: "No:50, Havelock Road, Colombo",
    phone: "+94 11 2555666",
    website: "https://www.laugfs.lk",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCE_p4sORX_CdMhfU9njY67ZCeC2iUrdIvGw&s",
  },
];

const PublicSupermarkets = () => {
  return (
    <>
      <Text fontSize="5xl" textAlign="center" fontWeight="bold" my={5}>
        Our Partners
      </Text>
      <LogoSlider />
      {supermarkets.map((supermarket,index) => (
        <Box m={10} p={5} borderRadius={20} borderWidth={1} key={index}>
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
                <AddressBox Icon={IoLocation} name={supermarket.address} />

                <AddressBox Icon={FaPhone} name={supermarket.phone} />

                <AddressBox Icon={TbWorld} name={supermarket.website} />
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
      <Footer />
    </>
  );
};

export default PublicSupermarkets;
