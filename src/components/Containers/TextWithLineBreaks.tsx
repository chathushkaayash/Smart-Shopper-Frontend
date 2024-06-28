import { Flex, ResponsiveValue, Text } from "@chakra-ui/react";
import React from "react";

interface TextWithLineBreaksProps {
  children: string;
  gap?: number; // Gap between lines in pixels
  fontSize?: ResponsiveValue<string>;
  fontWeight?: number;
  className?: string;
  align?: "center" | "left" | "right";
}

const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({
  children,
  gap = 0,
  fontSize = "md",
  fontWeight,
  className,
  align = "flex-start",
}) => {
  const lines = children.split("\\n");

  return (
    <Flex
      flexDirection="column"
      gap={gap}
      className={className}
      alignItems={align}
    >
      {lines.map((line, index) => (
        <Text
          fontSize={fontSize}
          lineHeight={1}
          key={index}
          fontWeight={fontWeight}
        >
          {line}
        </Text>
      ))}
    </Flex>
  );
};

export default TextWithLineBreaks;
