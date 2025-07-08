import { useState, useEffect } from "react";

import { ProfilePostItem } from "./profile-post-item";
import { Grid, GridItem } from "@chakra-ui/react";

export const ProfilePosts = () => {
  const [profilePost, setProfilePost] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setProfilePost(false);
    } else {
      setProfilePost(true);
    }
  }, []);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500">
        <ProfilePostItem />
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <ProfilePostItem />
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <ProfilePostItem />
      </GridItem>
    </Grid>
  );
};
