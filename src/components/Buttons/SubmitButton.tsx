import { Button } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  color?: string;
  width?: "full" | "auto";
  className?: string;
}

const SubmitButton = ({
  children,
  color = "secondary",
  width = "full",
  className,
}: Props) => {
  return (
    <Button
      type="submit"
      width={width}
      bg={color}
      color="white"
      className={className}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
