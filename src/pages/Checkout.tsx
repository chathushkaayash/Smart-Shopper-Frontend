import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
  HStack,
  Badge,
  Stack,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, InfoIcon, CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Checkout = () => {
  return (
    <ChakraProvider>
      <Box maxWidth="1200px" margin="0 auto" padding="4">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Button variant="link">&lt; Back to store</Button>
        </Flex>

        <Flex flexDirection={['column', 'column', 'row']} gap={4}>
          {/* Left Column */}
          <Box flex="2">
            <VStack align="stretch" spacing={4}>
              {/* Delivery Details */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md">Delivery details</Heading>
                </HStack>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <HStack justify="space-between">
                    <Box>
                      <Text fontWeight="bold">Bandaragama Junction</Text>
                      <Text>66 Pandura Rd, Bandaragama</Text>
                    </Box>
                    <Button variant="link" size="sm" rightIcon={<EditIcon />}>Edit</Button>
                  </HStack>
                  <HStack justify="space-between">
                    <Box>
                      <Text fontWeight="bold">Meet at my door</Text>
                      <Text>Add delivery instructions</Text>
                    </Box>
                    <Button variant="link" size="sm" rightIcon={<EditIcon />}>Edit</Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Delivery Options */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Delivery options</Heading>
                <Divider my={2} />
                <VStack align="stretch" spacing={2}>
                  <Box border="1px" borderRadius="md" padding="4" borderColor="gray.200">
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Priority</Text>
                        <Badge colorScheme="green">Faster</Badge>
                        <Text>10-25 min • Delivered directly to you</Text>
                      </Box>
                      <Text fontWeight="bold">+LKR 129.00</Text>
                    </HStack>
                  </Box>
                  <Box border="1px" borderRadius="md" padding="4" borderColor="black">
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Standard</Text>
                        <Text>15-30 min</Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box border="1px" borderRadius="md" padding="4" borderColor="gray.200">
                    <HStack justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Schedule</Text>
                        <Text>Select a time</Text>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>

              {/* Payment */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Payment</Heading>
                <Divider my={2} />
                <HStack justify="space-between">
                  <Text>Add payment method</Text>
                  <Button variant="link" size="sm" rightIcon={<EditIcon />}>Edit</Button>
                </HStack>
              </Box>

              {/* Continue to payment */}
              <Button colorScheme="blackAlpha" size="lg" width="full">
                Continue to payment
              </Button>
            </VStack>
          </Box>

          {/* Right Column */}
          <Box flex="1">
            <VStack align="stretch" spacing={4}>
              {/* Order Summary */}
              <Box border="1px" borderRadius="md" padding="4">
                <HStack justify="space-between">
                  <Heading size="md">Pizza Hut</Heading>
                  <IconButton
                    aria-label="Restaurant Info"
                    icon={<InfoIcon />}
                    size="sm"
                    variant="ghost"
                  />
                </HStack>
                <Text>66 Panadura Rd, Panadura</Text>
                <Box my={2}>
                  <Image
                    borderRadius="md"
                    src="https://via.placeholder.com/150"
                    alt="Order Item"
                  />
                  <Text mt={2}>Save LKR 138.00 on this order with Uber One</Text>
                  <Button size="sm" mt={2}>Get yours now</Button>
                </Box>
                <Button colorScheme="blackAlpha" size="lg" width="full">
                  Continue to payment
                </Button>
              </Box>

              {/* Promotion */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Promotion</Heading>
                <Divider my={2} />
                <Button variant="link">Add promo code</Button>
              </Box>

              {/* Order Total */}
              <Box border="1px" borderRadius="md" padding="4">
                <Heading size="md">Order total</Heading>
                <Divider my={2} />
                <Stack spacing={1}>
                  <HStack justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>LKR 1,680.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Delivery Fee</Text>
                    <Text>LKR 54.00</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text>Taxes & Other Fees</Text>
                    <Text>LKR 386.40</Text>
                  </HStack>
                  <Divider my={2} />
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Total</Text>
                    <Text fontWeight="bold">LKR 2,120.40</Text>
                  </HStack>
                </Stack>
              </Box>

              {/* Note */}
              <Text fontSize="sm">
                If you're not around when the delivery person arrives, they'll leave your order at the door. By placing your order, you agree to take full responsibility for it once it's delivered. Orders containing alcohol or other restricted items may not be eligible for leave at door and will be returned to the store if you are not available.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Checkout;
