import useSupermarket from "@/services/Supermarket/useSupermarket";
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDot } from "react-icons/lu";

interface Props {
  supermarketId: number;
}

const PickupLocation = ({ supermarketId }: Props) => {
  const supermarket = useSupermarket([supermarketId]);

  return (
    <Step>
      <StepIndicator border={"none"}>
        <StepStatus
          complete={<LuCircleDot />}
          incomplete={<FaLocationDot />}
          active={<LuCircleDot />}
        />
      </StepIndicator>

      <Box flexShrink="0">
        <StepTitle>{supermarket[0].data?.name}</StepTitle>
        <StepDescription>{supermarket[0].data?.address}</StepDescription>
      </Box>

      <StepSeparator />
    </Step>
  );
};

export default PickupLocation;
