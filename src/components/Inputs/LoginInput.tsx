import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  register: any;
  type: string;
  label?: string;
  placeholder?: string;
  icon?: React.ElementType;
}

const LoginInput = ({ register, type, label, placeholder, icon }: Props) => {
  return (
    <FormControl marginY={5} margin={0}>
      <FormLabel fontSize={15}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement h="full">
          <Icon as={icon} />
        </InputLeftElement>
        <Input
          type={type}
          placeholder={placeholder}
          {...register}
          h={{ base: "6vh", md: "full" }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default LoginInput;
