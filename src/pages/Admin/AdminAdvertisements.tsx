import React, { useRef, useState } from "react";
import {
  Heading,
  Flex,
  Box,
  Center,
  Text,
  VStack,
  Select,
  Icon,
  Button,
  Image,
  Input,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { CiImageOn, CiEdit } from "react-icons/ci";
import useAdvertisements from "@/hooks/useAdvertisements";
import { Advertisement } from "@/hooks/useAdvertisement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Advertisement>("/advertisements");

const AdminAdvertisements: React.FC = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { data: Advertisements } = useAdvertisements();
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedAd, setSelectedAd] = useState<Advertisement>(
    {} as Advertisement
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    image: "",
    status: "Active",
    startDate: "",
    endDate: "",
    priority: "",
  });

  const queryClient = useQueryClient();

  const handleIconClick = () => {
    inputFileRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  const handleEditClick = (ad: Advertisement) => {
    setSelectedAd(ad);
    onOpen();
  };

  const { mutate: saveAdvertisement } = useMutation({
    mutationFn: () =>
      apiClient
        .update(selectedAd.id, {
          image: selectedAd.image,
          status: selectedAd.status,
          startDate: selectedAd.startDate,
          endDate: selectedAd.endDate,
          priority: selectedAd.priority,
        })
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ["advertisements"] });
          onClose();
        }),
  });

  const { mutate: publishAdvertisement } = useMutation({
    mutationFn: () =>
      apiClient.create({
        image: "https://via.placeholder.com/150",
        status: formData.status,
        startDate: formData.startDate,
        endDate: formData.endDate,
        priority: formData.priority,
      }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more items on each click
  };

  return (
    <>
      <VStack spacing={10} my={10} px={10} w="full">
        <Box w="full">
          <Heading size="lg" mb={6}>
            Publish New Advertisement
          </Heading>
          <Box
            p={8}
            shadow="md"
            borderWidth="1px"
            borderRadius={15}
            w="full"
            bg="white"
          >
            <Flex w="full" gap={8} align="center">
              <Box
                w="30%"
                borderRadius="10"
                borderWidth="2px"
                borderColor={"primary"}
                p={4}
                cursor="pointer"
                onClick={handleIconClick}
                _hover={{ bg: "gray.50" }}
              >
                <Center>
                  <VStack>
                    <Icon as={CiImageOn} boxSize={10} color={"primary"} />
                    <Text fontSize="lg">Upload Banner</Text>
                  </VStack>
                </Center>
                <input
                  type="file"
                  ref={inputFileRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </Box>
              <Stack spacing={4} direction="row" flex="1">
                <Box flex="1">
                  <Text fontSize="md">From:</Text>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box flex="1">
                  <Text fontSize="md">To:</Text>
                  <Input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                  />
                </Box>
                <Box flex="1">
                  <Text fontSize="md">Priority:</Text>
                  <Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">
                      Medium
                    </option>
                    <option value="High">High</option>
                  </Select>
                </Box>
                <Box flex="1" py={5}>
                  <Button
                    bg="primary"
                    size="lg"
                    onClick={() => publishAdvertisement()}
                  >
                    Publish
                  </Button>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Box>

        <Box width="full">
          <Heading size="lg" mb={6}>
            Current Advertisements
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {(Advertisements && Array.isArray(Advertisements)
          ? Advertisements.slice(0, visibleCount)
          : []
        ).map((ad, index) => (
              <Box
                key={index}
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius={15}
                bg="white"
              >
                <Text fontSize="md">From: {ad.startDate}</Text>
                <Text fontSize="md">To: {ad.endDate}</Text>
                <Text fontSize="md">Priority: {ad.priority}</Text>
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Advertisement Banner"
                  borderRadius={10}
                  mb={4}
                />
                <Flex justifyContent={"flex-end"}>
                  <Button
                    bg="primary"
                    size="sm"
                    onClick={() => handleEditClick(ad)}
                  >
                    <Icon as={CiEdit} />
                    <Text px={2}>Edit</Text>
                  </Button>
                </Flex>
              </Box>
            ))}
          </Grid>
          {Advertisements && Array.isArray(Advertisements) && visibleCount < Advertisements.length && (
        <Flex justifyContent="center" mt={6}>
          <Button onClick={showMoreItems} bg="primary" size="md">
            See More
          </Button>
        </Flex>
      )}
        </Box>
      </VStack>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Advertisement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Image src="https://via.placeholder.com/150" />
              <HStack width="full">
                <Text width="15%">From: </Text>
                <Input
                  focusBorderColor="primary"
                  width="85%"
                  value={selectedAd?.startDate}
                  onChange={(e) =>
                    setSelectedAd({
                      ...selectedAd,
                      startDate: e.target.value,
                    })
                  }
                  type="date"
                />
              </HStack>
              <HStack width="full">
                <Text width="15%">To:</Text>
                <Input
                  focusBorderColor="primary"
                  width="85%"
                  value={selectedAd?.endDate}
                  onChange={(e) =>
                    setSelectedAd({
                      ...selectedAd,
                      endDate: e.target.value,
                    })
                  }
                  type="date"
                />
              </HStack>
              <HStack width="full">
                <Text width="15%">Priority:</Text>
                <Select
                  width="85%"
                  focusBorderColor="primary"
                  value={selectedAd?.priority}
                  onChange={(e) =>
                    setSelectedAd({
                      ...selectedAd,
                      priority: e.target.value,
                    })
                  }
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button bg="primary" size="md" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              type="submit"
              onClick={() => saveAdvertisement()}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminAdvertisements;
