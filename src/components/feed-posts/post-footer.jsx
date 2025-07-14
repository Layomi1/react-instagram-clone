import {
  Button,
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  UnlikeLogo,
  NotificationsLogo,
  CommentLogo,
} from "../../assets/constants";

export const PostFooter = ({ username, isProfilePage }) => {
  const [likes, setLikes] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikes = () => {
    if (likes) {
      setLikes(false);
      setLikeCount(likeCount - 1);
    } else {
      setLikes(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleComments = () => {};

  return (
    <Box marginTop={"auto"} alignItems={"start"}>
      <Flex pt={0} gap={4} alignItems={"center"} w={"full"} mb={2} mt={4}>
        <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
          {likes ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box onClick={handleComments} cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Flex fontWeight={600} fontSize={"sm"}>
        {likeCount} likes
      </Flex>
      {isProfilePage ? (
        <Text fontWeight={600} fontSize={"sm"} mr={4}>
          {username}_
          <Text fontWeight={600} fontSize={"sm"} color={"gray"}>
            Feeling good!
          </Text>
          <Text fontWeight={600} fontSize={"sm"} color={"gray"}>
            No of comments
          </Text>
        </Text>
      ) : null}
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
        w={"full"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <InputGroup>
            <Input placeholder="Add a comment" variant={"flushed"} />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg="transparent"
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};
