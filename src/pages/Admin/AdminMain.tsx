import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import SideBar from "../../components/SideBar";
import AdminAdvertisements from "./AdminAdvertisements";
import AdminCourierServices from "./AdminCourierServices";
import AdminCustomers from "./AdminCustomers";
import AdminOrders from "./AdminOrders";
import AdminOverview from "./AdminOverview";
import AdminSettings from "./AdminSettings";
import AdminSuperMarkets from "./AdminSuperMarkets";
import AdminTransactions from "./AdminTransactions";

const AdminMain = () => {
  const [adminPage, setAdminPage] = useState("Overview");

  return (
    <Flex w="full">
      <Box w="16vw" top="10vh" bg="red">
        <SideBar
          adminPage={adminPage}
          setAdminPage={(page) => setAdminPage(page)}
        />
      </Box>
      <Box w="full" px="2%">
        {adminPage === "Overview" && <AdminOverview />}
        {adminPage === "Customers" && <AdminCustomers />}
        {adminPage === "Super Markets" && <AdminSuperMarkets />}
        {adminPage === "Courier Services" && <AdminCourierServices />}
        {adminPage === "Orders" && <AdminOrders />}
        {adminPage === "Transactions" && <AdminTransactions />}
        {adminPage === "Advertisements" && <AdminAdvertisements />}
        {adminPage === "Settings" && <AdminSettings />}
      </Box>
    </Flex>
  );
};

export default AdminMain;
