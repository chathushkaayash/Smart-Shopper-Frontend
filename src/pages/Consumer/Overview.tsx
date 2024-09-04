import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Avatar,
//   Stack,
//   Image,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const Overview = () => {
  return (
    <Box p={5} bg="gray.100" borderRadius="lg">
      {/* Header */}
      <Heading mb={5} color="orange.400">Overview</Heading>
      
      {/* Stats Grid */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={10}>
        {['Favourites', 'Total Orders', 'Feedbacks', 'Amount Spent'].map((stat) => (
          <GridItem
            key={stat}
            p={5}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
          >
            <Flex justify="center" align="center" mb={3}>
              <Avatar icon={<Icon as={FaUser} />} bg="purple.100" />
            </Flex>
            <Text fontSize="2xl" fontWeight="bold">40,689</Text>
            <Text>{stat}</Text>
          </GridItem>
        ))}
      </Grid>
      
      {/* Favorite Items Header */}
      <Heading size="md" mb={4} bg="gray.50" p={3} borderRadius="lg">
        Favorite Items
      </Heading>
      
      {/* Favorite Items List */}
      {Array(4).fill('').map((_, index) => (
        <Flex
          key={index}
          p={4}
          mb={3}
          bg="white"
          borderRadius="lg"
          boxShadow="sm"
          align="center"
          justify="space-between"
          border="1px solid orange"
        >
          <Flex align="center">
            <Box boxSize="50px" bg="gray.200" mr={4} />
            <Box>
              <Text fontWeight="bold">Cream Craker 500g</Text>
              <Text fontSize="sm">Quantity: 1</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Box textAlign="right" mr={5}>
              <Text fontWeight="bold" color="green.500">Keells</Text>
              <Text fontSize="sm">Distance: 12 km</Text>
            </Box>
            <Text fontSize="2xl" fontWeight="bold">$99</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default Overview;
