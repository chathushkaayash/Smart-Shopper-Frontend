import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  className?: string;
  width?: string;
  url?: string;

  onClick?: () => void;
}

const ActionButton = ({
  children,
  size,
  inverted = false,
  width = "fit-content",
  className,
  url, // Added url prop
  onClick,
}: Props) => {
  const primaryColor = inverted ? "primary" : "white";
  const whiteColor = inverted ? "white" : "primary";

  const button = (
    <Button
      size={size}
      width={width}
      variant="outline"
      color={primaryColor}
      borderColor={primaryColor}
      border="2px"
      borderRadius="10px"
      fontSize="15px"
      fontWeight="bold"
      bg={whiteColor}
      _hover={{ bg: primaryColor, color: whiteColor }}
      _active={{
        bg: primaryColor,
        color: whiteColor,
        transform: "scale(0.98)",
        borderColor: primaryColor,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return url ? <Link to={url}>{button}</Link> : button;
};

export default ActionButton;
