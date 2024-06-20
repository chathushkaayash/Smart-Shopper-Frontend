import { Button } from "@chakra-ui/react";

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
      borderColor='primary' 
      // border="1px solid black"
      _hover={{ bg: "white", color: "primary",border:'2px'}}
      className={className}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
