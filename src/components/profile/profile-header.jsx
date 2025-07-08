import {
  Avatar,
  AvatarGroup,
  Flex,
  Box,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const ProfileHeader = () => {
  const [post, setPost] = useState(0);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  return (
    <Flex
      alignItems={"center"}
      gap={{ base: 4, md: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Avatar
          src="./profilepic.png"
          size={"md"}
          name="As a programmer"
          objectFit={"cover"}
          alt="As a programmer logo"
        />
      </AvatarGroup>
      <VStack gap={2} alignItems={"start"} mx={"auto"} flex={1}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={4}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>asaprogrammer_</Text>
          <Button
            bg={"white"}
            size={{ base: "xs", md: "sm" }}
            color={"black"}
            _hover={{ bg: "whiteAlpha.800" }}
          >
            Edit Profile
          </Button>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            following
          </Text>
        </Flex>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          As a Programmer
        </Text>
        <Text fontSize={"sm"}>
          Tutorials to level up your skills as a programmer...
        </Text>
      </VStack>
    </Flex>
  );
};
