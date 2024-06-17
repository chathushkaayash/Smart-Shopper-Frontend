import { Button, border } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  color?: string;
  width?: "full" | "fit-content";
  borderRadius?: number;
  className?: string;
}

const SubmitButton = ({
  children,
  color = "secondary",
  width = "full",
  className,
  borderRadius,
}: Props) => {
  return (
    <Button
      type="submit"
      borderRadius={borderRadius}
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
