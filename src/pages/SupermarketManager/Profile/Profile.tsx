import useAuthStore from "@/state-management/auth/store";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SupermarketDetails from "./SupermarketDetails";
import UpdatePassword from "./UpdatePassword";

const Profile = () => {
  const user = useAuthStore().user;

  const {
    isOpen: isForgetPassword,
    onOpen: onForgetPassword,
    onClose: onForgetPasswordClose,
  } = useDisclosure();

  return (
    <Box p={{ base: 2, md: 5 }}>
      <Box p={5} borderWidth={1} borderRadius="10px" boxShadow="lg">
        <Flex align={"center"} justify={"center"} flexDirection={"column"}>
          <Heading fontSize="2xl" color="primary" mb={2}>
            Profile Settings
          </Heading>
          <Divider mb={5} />
          <Grid
            templateColumns={{ base: "1fr", lg: "4fr 3fr" }}
            gap={5}
            w={"full"}
          >
            <Box
              border={"1px"}
              borderColor={"gray.200"}
              borderRadius={10}
              p={{ base: 4, md: 5 }}
            >
              {/* <Box
                display={"flex"}
                justifyContent={{ base: "center", md: "right" }}
                pb={5}
                gap={5}
              >
                <Button
                  bg={"primary"}
                  size="sm"
                  color={"white"}
                  _hover={{ bg: "primary" }}
                >
                  Edit Profile
                </Button>
                <Button
                  bg={"primary"}
                  size="sm"
                  color={"white"}
                  _hover={{ bg: "primary" }}
                  onClick={onForgetPassword}
                >
                  Change Password
                </Button>
              </Box> */}
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mb={5}
              >
                <Avatar size={"2xl"} name={user?.name} src={user?.profilePic} />
              </Box>
              <Box>
                <Box mb={4}>
                  <Text>Name</Text>
                  <Input placeholder="Name" size="md" value={user?.name} />
                </Box>
                <Box mb={4}>
                  <Text>E-Mail</Text>
                  <Input placeholder="Email" size="md" value={user?.email} />
                </Box>
                <Box mb={4}>
                  <Text>Phone Number</Text>
                  <Input
                    placeholder="Phone Number"
                    size="md"
                    value={user?.number}
                  />
                </Box>
              </Box>
            </Box>
            <SupermarketDetails id={user?.supermarketId} />
          </Grid>
        </Flex>
      </Box>
      {/* ..............change password...................... */}
      <Modal
        isOpen={isForgetPassword}
        onClose={onForgetPasswordClose}
        isCentered
        // closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius="15px" maxW="30vw">
          <ModalHeader textAlign="left" fontWeight="semibold" fontSize="20">
            Change Password
          </ModalHeader>
          <ModalBody>
            <UpdatePassword />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Profile;
