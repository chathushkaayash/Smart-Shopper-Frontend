import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  heading: string;
  rightSide?: React.ReactNode;
}

const Section = ({ children, title, heading, rightSide }: Props) => {
  return (
    <Stack
      w="full"
      px={{ base: "5vw", sm: "14vw" }}
      my="5vh"
      py="2vh"
    >
      <HStack>
        <Box w={2} h={45} bg="primary" borderRadius="sm"></Box>
        <Text fontSize="lg" fontWeight={600} color="primary">
          {heading}
        </Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text fontSize="4xl" fontWeight={600}>
          {title}
        </Text>
        {rightSide}
      </HStack>
      {children}
    </Stack>
  );
};

export default Section;
