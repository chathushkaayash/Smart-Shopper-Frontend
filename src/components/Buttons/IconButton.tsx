import { Button } from "@chakra-ui/react";
interface Props {
  Icon: React.ElementType;
  className?: string;
}

const IconButton = ({ Icon, className }: Props) => {
  return (
    <Button
      width="auto"
      marginY={3}
      gap={2}
      padding={6}
      rounded="md"
      bg="#D9D9D9"
      className={className}
    >
      <Icon />
    </Button>
  );
};

export default IconButton;
