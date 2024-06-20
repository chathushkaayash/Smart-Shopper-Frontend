import { Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const ErrorText = ({ children }: Props) => {
  return <Text color="red">{children}</Text>;
};

export default ErrorText;
