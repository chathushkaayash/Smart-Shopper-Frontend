import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { CiDollar, CiSearch, CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
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
    "/driver/opportunities/viewmap",
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
    { icon: <CiUser fontSize={20} />, text: "Account", path: "/profile" },
  ];

  const driverIconsList = [
    { icon: <IoHomeOutline fontSize={20} />, text: "Home", path: "/driver" },
    {
      icon: <BsTruck fontSize={20} />,
      text: "Opportunities",
      path: "/driver/opportunities",
    },
    // {
    //   icon: <IoWalletOutline fontSize={20} />,
    //   text: "Wallet",
    //   path: "/driver/wallet",
    // },
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
              pos={"relative"}
              cursor={"pointer"}
              onClick={() => navigate(iconsList[index].path)}
            >
              <Box
                bg="primary"
                pos={"absolute"}
                transform={currentIndex === index ? "translateY(-1.5rem)" : ""}
                opacity={currentIndex === index ? 1 : 0}
                transitionDuration={"0.7s"}
                className={` border-4 border-transparent border-gray-900 w-12 h-12  rounded-full -z-10 `}
              ></Box>
              <Box
                transform={currentIndex === index ? "translateY(-1.5rem)" : ""}
                transitionDuration={"0.7s"}
              >
                {icon.icon}
              </Box>
              <Text
                fontSize={12}
                pos={"absolute"}
                opacity={currentIndex === index ? 1 : 0}
                transform={
                  currentIndex === index
                    ? "translateY(0.8rem)"
                    : "translateY(5rem)"
                }
                transitionDuration={"0.7s"}
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
