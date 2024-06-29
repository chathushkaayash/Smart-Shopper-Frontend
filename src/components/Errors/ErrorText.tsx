import { Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const ErrorText = ({ children }: Props) => {
  return (
    <Text color="red" fontSize={{ base: "xs", md: "sm" }}>
      {children}
    </Text>
  );
};

export default ErrorText;
