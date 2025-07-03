import { Container } from "@chakra-ui/react";
import { FeedPostItem } from "./feed-post-item";

export const FeedPosts = () => {
  return (
    <Container maxW={"container.md"} py={10} px={2}>
      <FeedPostItem />
      <FeedPostItem />
      <FeedPostItem />
    </Container>
  );
};
