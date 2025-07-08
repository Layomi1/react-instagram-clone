import { useState, useEffect } from "react";

import { ProfilePostItem } from "./profile-post-item";
import { Box, Grid, VStack, Skeleton } from "@chakra-ui/react";

export const ProfilePosts = () => {
  const [profilePost, setProfilePost] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={1}>
      {loading &&
        [1, 2, 3, 4, 5, 6].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">conntent wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!loading && (
        <>
          <ProfilePostItem img="./img1.png" />
          <ProfilePostItem img="./img1.png" />
          <ProfilePostItem img="./img1.png" />
        </>
      )}
    </Grid>
  );
};
