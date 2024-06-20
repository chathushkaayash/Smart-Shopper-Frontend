import { Button } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  color?: string;
  width?: "full" | "fit-content";
  borderRadius?: number;
  disabled?: boolean;
  className?: string;
}

const SubmitButton = ({
  children,
  color = "secondary",
  width = "full",
  className,
  borderRadius,
  disabled = false,
}: Props) => {
  if (disabled) {
    return (
      <Button
        type="submit"
        borderRadius={borderRadius}
        width={width}
        bg="gray.400"
        color="white"
        className={className}
        disabled={true}
      >
        {children}
      </Button>
    );
  }
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
      disabled={false}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
