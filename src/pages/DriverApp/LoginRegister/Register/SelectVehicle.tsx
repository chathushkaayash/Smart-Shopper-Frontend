import { useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import Logo from "../../../../assets/logo.svg";
import SubmitButton from "@/components/Buttons/SubmitButton";
import DotIndicator from "@/components/DotIndicator";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCaravan, FaCar, FaShuttleVan } from "react-icons/fa";
import colorwheel from ".././../../../assets/signup-login/colorwheel.svg";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";

interface Props {
  setStage: (n: number) => void;
}

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import LoginInput from "@/components/Inputs/LoginInput";
import ErrorText from "@/components/Errors/ErrorText";

const schema = z.object({
  name: z.string().min(1, "vehicle name is required"),
  number: z.string().min(1, "vehicle number is required"),
});

type FormData = z.infer<typeof schema>;

const SelectVehicle = ({ setStage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const vehicles = [
    { icon: RiMotorbikeFill, name: "Motorbike" },
    { icon: FaCaravan, name: "Threewheel" },
    { icon: FaCar, name: "Car" },
    { icon: FaShuttleVan, name: "Van" },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false); // State to manage color picker visibility
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 }); // HSVa color state

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    setShowColorPicker(false); // Close color picker modal after selecting a color
  };

  const colors = [
    "#000000",
    "#FFFFFF",
    "#858080",
    "#5DB434",
    "#0B4CCB",
    "#FFF500",
    "#FF0000",
  ];

  return (
    <VStack py="6vh" h="100vh" gap="4vh">
      {/* --------------- Vehicle Icon --------------- */}
      <Box
        position="absolute"
        top="5vh"
        right="10vw"
        p={2}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Icon
          as={selectedVehicle.icon}
          boxSize="50px"
          color={selectedColor || undefined}
        />
      </Box>

      {/* --------------- Smart Shopper Logo --------------- */}
      <VStack>
        <Image src={Logo} width="150px" />
        <Box display="inline" fontSize="2xl" fontWeight="bold">
          <Text fontSize="lg" fontWeight="bold">
            Select Vehicle
          </Text>
        </Box>
      </VStack>

      {/* --------------- Form --------------- */}
      <VStack
        as="form"
        onSubmit={handleSubmit(() => {
          console.log(4);
          setStage(4);
        })}
        gap="2vh"
        px="10vw"
        h="full"
      >
        <Text fontSize="md" color="gray" fontWeight="bold">
          Pick your vehicle type
        </Text>

        <HStack spacing={5} justifyContent="center">
          {vehicles.map((vehicle, index) => (
            <VStack key={index}>
              <Box
                key={index}
                p={2}
                borderRadius="lg"
                boxShadow="lg"
                onClick={() => setSelectedVehicle(vehicle)}
                borderColor={
                  vehicle.icon === selectedVehicle.icon
                    ? "primary"
                    : "transparent"
                }
                border={
                  selectedVehicle.icon === vehicle.icon
                    ? "2px solid #ff7708"
                    : "2px solid transparent"
                }
              >
                <Icon as={vehicle.icon} boxSize="50px" />
              </Box>
              <Text fontSize="sm" color="gray" fontWeight="bold">
                {vehicle.name}
              </Text>
            </VStack>
          ))}
        </HStack>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Vehicle color
        </Text>
        <HStack spacing={3}>
          {colors.map((color, index) => (
            <Box
              key={index}
              width="30px"
              height="30px"
              borderRadius="full"
              bg={color}
              border={
                selectedColor === color ? "3px solid #ff7708" : "1px solid gray"
              }
              onClick={() => handleColorSelection(color)}
              cursor="pointer"
            />
          ))}
          {/*--------------- Image for Color Wheel--------------- */}
          <Box
            width="30px"
            height="30px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={toggleColorPicker}
          >
            <Image src={colorwheel} alt="Color Wheel" />
          </Box>
        </HStack>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Vehicle Name (ex: Maruti WagonR)
        </Text>
        <Box w="full">
          <LoginInput
            register={register("name")}
            type="name"
            placeholder="Vehicle Name"
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </Box>
        <Text fontSize="md" color="gray" fontWeight="bold">
          Vehicle Number (ex: VP 2233)
        </Text>
        <Box w="full">
          <LoginInput
            register={register("number")}
            type="number"
            placeholder="Vehicle Number"
          />
          {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
        </Box>
        <VStack w="80vw" mt="auto">
          <SubmitButton borderRadius={10}>Next</SubmitButton>
          <DotIndicator
            current={2}
            total={4}
            className="absolute bottom-[2vh]"
          />
        </VStack>
      </VStack>

      {/* ---------------Color Picker Modal ---------------*/}
      <Modal isOpen={showColorPicker} onClose={toggleColorPicker} isCentered>
        <ModalOverlay />
        <ModalContent
          width="80vw"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ModalHeader>Select Color</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Wheel
                color={hsva}
                onChange={(color) => {
                  setHsva(color.hsva);
                  setSelectedColor(hsvaToHex(color.hsva));
                }}
              />
            </Box>
          </ModalBody>
          <ModalFooter width="full">
            <SubmitButton onClick={toggleColorPicker}>Done</SubmitButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default SelectVehicle;
