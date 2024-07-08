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
  className?: string;
  outerClassName?: string;
  icon?: React.ElementType;
}

const LoginInput = ({
  register,
  type,
  label,
  placeholder,
  icon,
  className,
  outerClassName,
}: Props) => {
  return (
    <FormControl marginY={5} margin={0} className={outerClassName}>
      <FormLabel fontSize={15}>{label}</FormLabel>
      <InputGroup>
        {icon && (
          <InputLeftElement h="full">
            <Icon as={icon} />
          </InputLeftElement>
        )}
        <Input
          type={type}
          placeholder={placeholder}
          {...register}
          h={{ base: "6vh", md: "full" }}
          className={className}
        />
      </InputGroup>
    </FormControl>
  );
};

export default LoginInput;
