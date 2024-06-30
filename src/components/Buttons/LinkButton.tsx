import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
  color?: string;
  className?: string;
  fontSize?: number;
}

const LinkButton = ({
  children,
  to,
  color = "primary",
  className,
  fontSize = 14,
}: Props) => {
  return (
    <Link to={to}>
      <Button
        variant="link"
        color={color}
        className={className}
        fontSize={fontSize}
      >
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
