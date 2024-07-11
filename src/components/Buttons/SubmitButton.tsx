import { Button } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  color?: string;
  width?: "full" | "fit-content";
  borderRadius?: number;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const SubmitButton = ({
  children,
  color = "primary",
  width = "full",
  className,
  borderRadius,
  disabled = false,
  onClick,

}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
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
        onClick={handleClick}
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
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
