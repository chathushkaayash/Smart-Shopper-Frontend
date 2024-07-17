import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { CiDollar, CiSearch, CiUser } from "react-icons/ci";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hideNavbarPaths = [
    "/login",
    "/signup",
    "/driver/login_register",
    "/driver/login",
    "/driver/register",
  ];
  const showBottomNav = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const consumerIconsList = [
    { icon: <IoHomeOutline fontSize={20} />, text: "Home", path: "/" },
    { icon: <CiSearch fontSize={20} />, text: "Search", path: "/search" },
    {
      icon: <AiOutlineShoppingCart fontSize={20} />,
      text: "Cart",
      path: "/cart",
    },
    { icon: <CiUser fontSize={20} />, text: "Account", path: "/driver" },
  ];

  const driverIconsList = [
    { icon: <IoHomeOutline fontSize={20} />, text: "Home", path: "/driver" },
    {
      icon: <BsTruck fontSize={20} />,
      text: "Opportunities",
      path: "/driver/opportunities",
    },
    {
      icon: <IoWalletOutline fontSize={20} />,
      text: "Wallet",
      path: "/driver/wallet",
    },
    {
      icon: <CiDollar fontSize={20} />,
      text: "Earnings",
      path: "/driver/earnings",
    },
    {
      icon: <CiUser fontSize={20} />,
      text: "Account",
      path: "/driver/account",
    },
  ];

  const iconsList = location.pathname.startsWith("/driver")
    ? driverIconsList
    : consumerIconsList;

  const currentIndex = iconsList.findIndex(
    (icon, index) =>
      pathname === icon.path || (pathname.startsWith(icon.path) && index !== 0)
  );

  return (
    <>
      {showBottomNav && (
        <HStack
          h="8vh"
          w="100%"
          position="fixed"
          bottom={0}
          justifyContent="space-around"
          boxShadow={"0px -1px 5px 0px rgba(0,0,0,0.1)"}
          className="bg-white max-h-[4.4rem] px-6 rounded-t-xl"
        >
          {iconsList.map((icon, index) => (
            <VStack
              justifyContent="center"
              gap={0}
              key={index}
              h="full"
              className=" cursor-pointer relative"
              onClick={() => navigate(iconsList[index].path)}
            >
              <Box
                bg="primary"
                className={`${
                  currentIndex === index
                    ? "-translate-y-6 opacity-100"
                    : " opacity-0"
                } duration-700  border-4 border-transparent border-gray-900 w-12 h-12 absolute   rounded-full -z-10 `}
              ></Box>
              <Box
                className={`duration-500 ${
                  currentIndex === index ? " -translate-y-6" : ""
                }`}
              >
                {icon.icon}
              </Box>
              <Text
                fontSize={12}
                className={` absolute ${
                  currentIndex === index
                    ? "translate-y-2 duration-700 opacity-100"
                    : " opacity-0 translate-y-10"
                }`}
              >
                {icon.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      )}
    </>
  );
};

export default BottomNav;
