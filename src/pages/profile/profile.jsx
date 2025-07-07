import { Box, Container, Image, Text, Flex, Button } from "@chakra-ui/react";

import { ProfileHeader, ProfilePosts, ProfileTabs } from "../../components";

export const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} alignItems={"center"} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        direction={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        direction={"column"}
        borderColor={"whiteAlpha.300"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};
