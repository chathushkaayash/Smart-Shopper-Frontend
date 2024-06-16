import { Button} from "@chakra-ui/react";
interface Props {
    Icon: React.ElementType;
}

const IconButton = ({ Icon}: Props) => {
  return (
    <Button
      width="auto"
      marginY={3}
      gap={2}
      padding={6}
      rounded="md"
      bg="#D9D9D9"
    >
        <Icon />
    </Button>
  );
};

export default IconButton;
