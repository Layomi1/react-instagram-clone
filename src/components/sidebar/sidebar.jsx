import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

import { SidebarItems } from "./sidebarItems";
import { BiLogOut } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to="/"
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          cursor={"pointer"}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={{ base: 10 }}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
      </Flex>
      <Flex>
        <Tooltip
          hasArrow
          label={"LogOut"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            to={"/auth"}
            display={"flex"}
            alignItems={"center"}
            as={RouterLink}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            w={{ base: 10, md: "full" }}
            p={2}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Log Out</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};
