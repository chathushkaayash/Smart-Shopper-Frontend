import { getImageUrl } from "@/lib/utils";
import useUser from "@/services/User/useUser";
import useAuthStore from "@/state-management/auth/store";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ForgetPasswordModel from "./ForgetPasswordModel";
import UpdateProfile from "./UpdateProfile";

const ProfileDetail = () => {
  const { user: authUser } = useAuthStore();

  const user = useUser([authUser?.id || 0])[0].data;

  const {
    isOpen: isEdit,
    onOpen: onEdit,
    onClose: onEditClose,
  } = useDisclosure();

  const {
    isOpen: isForgetPassword,
    onOpen: onForgetPassword,
    onClose: onForgetPasswordClose,
  } = useDisclosure();

  return (
    <Box bg="white" borderRadius="10px" boxShadow="md" overflow="hidden" pb={4}>
      <Box bg="primary" position="relative" p={4} h="70">
        <Image
          src={getImageUrl(user?.profilePic)}
          alt="Profile Image"
          borderRadius="full"
          boxSize="100px"
          position="absolute"
          top="100%"
          left="12%"
          transform="translate(-50%, -50%)"
          border="4px solid white"
        />
      </Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4} mr={4}>
        <Text fontSize="xl" fontWeight="bold" ml="40">
          {user?.name}
        </Text>
        <Button
          w="auto"
          mr={4}
          mt={4}
          onClick={onEdit}
          variant="outline"
          color="white"
          borderColor="primary"
          border="2px"
          borderRadius="10px"
          fontSize="15px"
          fontWeight="bold"
          bg="primary"
          _hover={{ bg: "white", color: "primary" }}
          _active={{
            bg: "white",
            color: "primary",
            transform: "scale(0.98)",
            borderColor: "primary",
          }}
        >
          Edit Profile
        </Button>
      </Flex>
      <VStack align="start" spacing={4} p={4} pl={10} ml={4}>
        <Grid templateColumns="1fr 2fr" gap={2} w="full">
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Username:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.name?.split(" ")[0]}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Email:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.email}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Phone number:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">{user?.number}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight="medium" color="gray.600">
              Country:
            </Text>
          </GridItem>
          <GridItem>
            <Text color="gray.800">Sri Lanka</Text>
          </GridItem>
        </Grid>
      </VStack>

      {/* Edit Personal Details Modal */}
      {user && (
        <UpdateProfile
          isEdit={isEdit}
          onEditClose={onEditClose}
          onForgetPassword={onForgetPassword}
          user={user}
        />
      )}

      {/* Forget Password Modal */}
      {user && (
        <ForgetPasswordModel
          isForgetPassword={isForgetPassword}
          onForgetPasswordClose={onForgetPasswordClose}
        />
      )}
    </Box>
  );
};

export default ProfileDetail;
