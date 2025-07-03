import { CreatePostLogo } from "../../assets/constants";
import { Box, Tooltip, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const CreatePost = () => {
  return (
    <Tooltip
      hasArrow
      label={"Create"}
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
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
      >
        <CreatePostLogo size={25} />
        <Box display={{ base: "none", md: "block" }}>Create</Box>
      </Link>
    </Tooltip>
  );
};
