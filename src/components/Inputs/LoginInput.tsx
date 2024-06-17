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
    <FormControl marginY={3}>
      <FormLabel fontSize={15}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Icon as={icon} />
        </InputLeftElement>
        <Input type={type} placeholder={placeholder} {...register} />
      </InputGroup>
    </FormControl>
  );
};

export default LoginInput;
