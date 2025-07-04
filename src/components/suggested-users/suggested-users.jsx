import { VStack, Flex, Box, Button, Text } from "@chakra-ui/react";
import { SuggestedUser } from "./suggested-user";
import { SuggestedHeader } from "./suggested-header";
import { Link } from "react-router-dom";

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Button
          fontSize={12}
          fontWeight={"bold"}
          color={"white"}
          p={0}
          bg={"transparent"}
          _hover={"transparent"}
        >
          See all
        </Button>
      </Flex>
      <SuggestedUser name="Josh moore" avatar="./img1.png" follower="1000" />
      <SuggestedUser name="Josh moore" avatar="./img1.png" follower="1000" />
      <SuggestedUser name="Josh moore" avatar="./img1.png" follower="1000" />

      <Box alignSelf={"start"} color="gray.500" mt={5} fontSize={12}>
        &copy;2025. Built by {""}
        <Link
          to="https://github.com/layomi1"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Oluwalayomi Lawore
        </Link>
      </Box>
    </VStack>
  );
};
