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

export const PostFooter = () => {
  const [likes, setLikes] = useState(false);
  const [likeCount, setLikeCount] = useState(1000);

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
    <Box my={10}>
      <Flex pt={0} gap={4} alignItems={"center"} w={"full"} mb={2} mt={4}>
        <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
          {likes ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box onClick={handleComments} cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Flex fontWeight={600} fontSize={"sm"}>
        {likeCount} likes
      </Flex>
      <Text fontWeight={600} fontSize={"sm"} mr={4}>
        programmer_
        <Text fontWeight={600} fontSize={"sm"} color={"gray"}>
          Feeling good
        </Text>
        <Text fontWeight={600} fontSize={"sm"} color={"gray"}>
          No of comments
        </Text>
      </Text>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
        w={"full"}
      >
        <InputGroup>
          <Input placeholder="Enter comment" variant={"flushed"} />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg="transparent"
            ></Button>{" "}
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};
