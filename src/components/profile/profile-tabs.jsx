import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { BsGrid3X3, BsSuitHeart, BsBookmark } from "react-icons/bs";

import { useState } from "react";
import { ProfilePosts } from "./profile-posts";

export const ProfileTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs
      onChange={(index) => setTabIndex(index)}
      bg={"transparent"}
      variant="unstyled"
    >
      <TabList
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: 4, sm: 10 }}
        mx={"auto"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color={"white"}
      >
        <Tab
          p={3}
          _selected={{
            color: "white",
            bg: "transparent",
            borderTop: "1px solid white",
          }}
        >
          <Box fontSize={20} mr={2}>
            <BsGrid3X3 />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Posts
          </Text>
        </Tab>
        <Tab
          p={3}
          _selected={{
            color: "white",
            bg: "transparent",
            borderTop: "1px solid white",
          }}
        >
          <Box fontSize={20} mr={2}>
            <BsBookmark />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Video
          </Text>
        </Tab>
        <Tab
          p={3}
          _selected={{
            color: "white",
            bg: "transparent",
            borderTop: "1px solid white",
          }}
        >
          <Box fontSize={20} mr={2}>
            <BsSuitHeart fontWeight={"bold"} />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Likes
          </Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ProfilePosts />
        </TabPanel>
        <TabPanel>Videos</TabPanel>
        <TabPanel>Likes</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
