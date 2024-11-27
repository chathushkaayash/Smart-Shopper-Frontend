import SubmitButton from "@/components/Buttons/SubmitButton";
import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import Logo from "../../../../assets/logo.svg";
import DotIndicator from "@/components/DotIndicator";
import useDriverRegisterStore from "@/state-management/DriverRegisterStore";
import useAddDriverProfilePicture from "@/services/Driver/useAddDriverProfilePicture";

const VehicleImage = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { setStage, driverDetails } = useDriverRegisterStore();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      uploadImage.mutate(file);
    }
  };

  const uploadImage = useAddDriverProfilePicture({ userId: driverDetails.id });

  if (uploadImage.isSuccess) {
    setStage(5);
  }

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      {/* --------------- Smart Shopper Logo --------------- */}

      <VStack>
        <Image src={Logo} width="150px" />

        <Box fontSize="2xl" fontWeight="bold">
          <Text fontSize="lg" fontWeight="bold">
            Upload Profile Picture
          </Text>
        </Box>
      </VStack>
      <Text
        textAlign="center"
        w="80vw"
        fontSize="md"
        color="gray"
        fontWeight="bold"
      >
        Please upload a clear image of you making sure your face is visible.
      </Text>
      <VStack gap="2vh" h="full" as="form">
        {/* --------------- image upload --------------- */}

        <VStack justify="center" flex="1">
          <Box
            as="label"
            cursor="pointer"
            padding="30px 70px"
            borderRadius="40px"
            border="1px dashed"
            borderColor={"primary"}
          >
            <Input
              type="file"
              display="none"
              ref={inputFileRef}
              onChange={handleImageUpload}
            />
            <VStack spacing={3} align="center">
              <Icon as={FaCloudUploadAlt} boxSize={12} color="primary" />
              <Text>Drag and Drop</Text>
              <Text>or</Text>
              <Button
                backgroundColor="primary"
                color="white"
                borderRadius={10}
                _hover={{ backgroundColor: "rgb(14, 14, 14)" }}
                onClick={() =>
                  (inputFileRef.current as HTMLInputElement).click()
                }
              >
                Browse Image
              </Button>
            </VStack>
          </Box>
        </VStack>

        {/* --------------- Submit button--------------- */}

        <VStack w="80vw">
          <SubmitButton borderRadius={10}>Next</SubmitButton>
          <DotIndicator
            current={3}
            total={4}
            className="absolute bottom-[2vh]"
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default VehicleImage;
