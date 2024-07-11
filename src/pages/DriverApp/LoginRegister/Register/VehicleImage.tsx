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

interface Props {
  setStage: (n: number) => void;
}

const VehicleImage = ({ setStage }: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  return (
    <VStack py="10vh" h="100vh">
      <Image src={Logo} width="150px" />

      <Box display="inline" fontSize="2xl" fontWeight="bold">
        <Text fontSize="lg" fontWeight="bold">
          Upload vehicle image
        </Text>
      </Box>
      <Text
        textAlign="center"
        w="80vw"
        fontSize="md"
        color="gray"
        fontWeight="bold"
      >
        Please upload a clear and legible image of your vehicle. Ensure the
        image is less than 10MB.
      </Text>

      <VStack
        w="80vw"
        className="h-[100%] mt-5"
        as="form"
        justifyContent="space-between"
      >
        <VStack justify="center" flex="1">
          <Box
            as="label"
            cursor="pointer"
            padding="30px 70px"
            borderRadius="40px"
            border="1px dashed"
            borderColor={"primary"}
          >
            <Input type="file" display="none" ref={inputFileRef} />
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
              {/* <SubmitButton
          borderRadius={10}
          onClick={() => (inputFileRef.current as HTMLInputElement).click()}
        >
          Browse Image
        </SubmitButton> */}
            </VStack>
          </Box>
        </VStack>
        <VStack w="80vw">
          <SubmitButton borderRadius={10} onClick={() => setStage(5)}>
            Next
          </SubmitButton>
          <DotIndicator current={3} total={4} />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default VehicleImage;
