import { AspectRatio, Box, Icon} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
// import useOpportunity from "@/hooks/useOpportunity";

const ViewMap = () => {
  const { id } = useParams();
  if (!id) return null;
  const navigate = useNavigate();
  // const opportunity = useOpportunity(Number(id));

  return (
    <>
      <Box w="full" h="100vh">
        <Box
          pos="absolute"
          top={4}
          left={4}
          p={2}
          background="white"
          borderRadius="50%"
          shadow="md"
          cursor="pointer"
          onClick={() => navigate("/driver")}
          zIndex={10}
        >
          <Icon as={IoMdArrowRoundBack} w={8} h={8} />
        </Box>
        <AspectRatio ratio={9 / 20}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797499636!3d6.902205493097101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1721984297174!5m2!1sen!2slk"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </Box>
    </>
  );
};

export default ViewMap;
