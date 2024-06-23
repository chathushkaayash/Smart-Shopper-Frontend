import { HStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

interface AutoScrollHorizontalProps {
  children: React.ReactNode;
}

const HorizontalScrollContainer: React.FC<AutoScrollHorizontalProps> = ({
  children,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Adjust scroll speed here
        scrollContainer.scrollLeft = scrollAmount;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0; // Reset to start
        }
      }
    };

    const scrollInterval = setInterval(scrollStep, 20); // Adjust interval for smoothness

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <HStack
      ref={scrollContainerRef}
      overflowX="scroll"
      whiteSpace="nowrap"
      width="60%" // Adjust height as needed
      position="relative"
    >
      {/* <HStack spacing={4}> */}
      {children}
      {/* </HStack> */}
    </HStack>
  );
};

export default HorizontalScrollContainer;
