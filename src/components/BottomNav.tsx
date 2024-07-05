import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup", "/driver"];
  const showBottomNav = !hideNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const [active, setActive] = useState(0);

  const iconsList = [
    {
      icon: <IoHomeOutline fontSize={20} />,
      text: "Home",
      positionX: "0",
    },
    { icon: <CiSearch fontSize={20} />, text: "Search" },
    { icon: <AiOutlineShoppingCart fontSize={20} />, text: "Cart" },
    { icon: <CiUser fontSize={20} />, text: "Account" },
  ];

  const handleOnClick = (index: number) => {
    // const bounds = e.target.getBoundingClientRect();

    // console.log(bounds);
    setActive(index);

    if (index === 3) {
      window.location.href = "/driver/login_register";
    }
  };

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
              onClick={() => handleOnClick(index)}
            >
              <Box
                bg="primary"
                className={`${
                  active === index ? "-translate-y-6 opacity-100" : " opacity-0"
                } duration-700  border-4 border-transparent border-gray-900 w-12 h-12 absolute   rounded-full -z-10 `}
              ></Box>
              <Box
                className={`duration-500 ${
                  active === index ? " -translate-y-6" : ""
                }`}
              >
                {icon.icon}
              </Box>
              <Text
                fontSize={12}
                className={` absolute ${
                  active === index
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
