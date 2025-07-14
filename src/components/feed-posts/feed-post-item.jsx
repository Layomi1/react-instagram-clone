import { PostHeader } from "./post-header";
import { PostFooter } from "./post-footer";
import { Container, Box, Image } from "@chakra-ui/react";

export const FeedPostItem = ({ username, avatar, img, thought }) => {
  return (
    <Container mb={10}>
      <PostHeader avatar={avatar} username={username} />
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} isProfilePage={true} />
    </Container>
  );
};
