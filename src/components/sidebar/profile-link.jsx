import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";

export const ProfileLink = () => {
  return (
    <Tooltip
      hasArrow
      label={"Profile"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={"/username"}
        display={"flex"}
        alignItems={"center"}
        as={RouterLink}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        w={{ base: 10, md: "full" }}
        p={2}
      >
        <Avatar size={"xs"} src="../profilepic.png" name="Brad Pitt" />
        <Box display={{ base: "none", md: "block" }}>Profile</Box>
      </Link>
    </Tooltip>
  );
};
