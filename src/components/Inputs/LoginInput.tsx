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
  type: string;
    label?: string;
  placeholder?: string;
  icon?: React.ElementType;
}

const LoginInput = ({ type,label, placeholder, icon }: Props) => {
  return (
    <FormControl marginY={5}>
      <FormLabel fontSize={15}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Icon as={icon} />
        </InputLeftElement>
        <Input type={type} placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  );
};

export default LoginInput;
