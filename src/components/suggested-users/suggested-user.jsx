import {
  VStack,
  Flex,
  Avatar,
  Box,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

export const SuggestedUser = ({ follower, avatar, name }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const onFollowUser = () => {};

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={4}>
        <Link to={""} as={RouterLink}>
          <Avatar src={avatar} size={"md"} />
        </Link>
        <VStack spacing={2}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Text fontSize={11} color={"gray.500"}>
            {follower} {""}followers
          </Text>
        </VStack>
      </Flex>

      <Button
        color={"blue.500"}
        textDecoration={"none"}
        fontSize={13}
        fontWeight={"medium"}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        p={0}
        height={"max-content"}
        onClick={onFollowUser}
      >
        {isFollowing ? "Unollow" : "Follow"}
      </Button>
    </Flex>
  );
};
