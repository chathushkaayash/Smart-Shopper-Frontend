import useAuthStore from "@/state-management/auth/store";
import { Box, Heading } from "@chakra-ui/react";

const Account = () => {
  const { user, logout } = useAuthStore();
  return <Box>
    <Heading>{user?.username}</Heading>
    <button onClick={logout}>Logout</button>
  </Box>;
};

export default Account;
