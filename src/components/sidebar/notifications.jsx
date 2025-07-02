import { NotificationsLogo } from "../../assets/constants";
import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Notifications = () => {
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={""}
        display={"flex"}
        alignItems={"center"}
        as={RouterLink}
        gap={4}
        _hover={{ bg: "whiteAplha.400" }}
        borderRadius={6}
        w={{ base: 10, md: "full" }}
        p={2}
      >
        <NotificationsLogo size={25} />
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
      </Link>
    </Tooltip>
  );
};
