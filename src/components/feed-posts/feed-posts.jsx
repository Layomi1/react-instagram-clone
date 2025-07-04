import {
  Box,
  Container,
  Flex,
  VStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { FeedPostItem } from "./feed-post-item";
import { useState, useEffect } from "react";

export const FeedPosts = () => {
  const [isLoading, setIssLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIssLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.md"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} mb={10} alignItems={"flex-start"}>
            <Flex alignItems={"center"}>
              <SkeletonCircle size="10" mr={4} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"400px"}>Hello World!</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPostItem
            username="hildah_"
            img="./img1.png"
            avatar="./img1.png"
            thought="I am feeling good"
          />
          <FeedPostItem
            username="doe_"
            img="./img2.png"
            avatar="./img2.png"
            thought="Surprise"
          />
          <FeedPostItem
            username="laracroft_"
            img="./img3.png"
            avatar="./img3.png"
            thought="We go there"
          />
          <FeedPostItem
            username="george_"
            img="./img4.png"
            avatar="./img4.png"
            thought="I am cold"
          />
        </>
      )}
    </Container>
  );
};
