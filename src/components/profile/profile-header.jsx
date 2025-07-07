import { Flex, Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ProfileHeader = () => {
  const [post, setPost] = useState(0);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  return (
    <Flex alignItems={"center"} gap={4}>
      <Box>
        <Image
          src="./profilepic.png"
          size={"md"}
          alt="user"
          boxSize={"200px"}
          objectFit={"cover"}
        />
      </Box>
      <Flex direction={"column"} gap={4}>
        <Flex alignItems={"center"} gap={2}>
          <Text>_programmer</Text>
          <Button bg={"white"} size={"sm"} color={"black"}>
            Edit Profile
          </Button>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text>
            4 <span>Posts</span>
          </Text>
          <Text>
            14 <span>followers</span>
          </Text>
          <Text noOfLines={1}>6following</Text>
        </Flex>
        <Text>Title</Text>
        <Text>We are there...</Text>
      </Flex>
    </Flex>
  );
};
