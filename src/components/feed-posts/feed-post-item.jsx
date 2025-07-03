import { PostHeader } from "./post-header";
import { PostFooter } from "./post-footer";
import { Container, Box, Image } from "@chakra-ui/react";

export const FeedPostItem = () => {
  return (
    <Container>
      <PostHeader />
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src="./img1.png" alt="profile Pic" />
      </Box>
      <PostFooter />
    </Container>
  );
};
