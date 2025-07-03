import { Flex, Box, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Link to="">
          <Avatar src="./img1.png" alignItems={"center"} size="xs" />
        </Link>

        <Flex fontSize={10} fontWeight={"bold"} gap={2} alignItems={"center"}>
          <Link to="">Programmer</Link>
          <Box color={"gray.500"}>*1wk</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in=out"}
          bg="transparent"
        >
          Follow
        </Button>
      </Box>
    </Flex>
  );
};
