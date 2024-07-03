import { Box, Center } from "@chakra-ui/react";

interface Props {
  current: number;
  total: number;
  size?: string;
  color?: string;
}

const DotIndicator = ({
  size = "14px",
  color = "primary",
  current,
  total,
}: Props) => {
  let dots = Array.from({ length: total }, (_, i) => i + 1);

  console.log(dots);

  return (
    <Center>
      {dots.map(
        (dot) => (
          console.log(dot, current),
          (
            <Box
              as="span"
              boxSize={size}
              bg={dot === current ? color : "gray.300"}
              className="flex w-3 h-3 me-3 rounded-full"
            ></Box>
          )
        )
      )}
    </Center>
  );
};

export default DotIndicator;
