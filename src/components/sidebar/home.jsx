import { Box, Tooltip, Link } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

export const Home = () => {
  return (
    <Tooltip
      hasArrow
      label="Home"
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        to={"/"}
        display={"flex"}
        alignItems={"center"}
        as={RouterLink}
        gap={4}
        _hover={{ bg: "whiteAplha.400" }}
        borderRadius={6}
        w={{ base: 10, md: "full" }}
        p={2}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}>Home</Box>
      </Link>
    </Tooltip>
  );
};
