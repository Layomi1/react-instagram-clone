import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Comment = ({ createdAt, profilePic, text, username }) => {
  return (
    <Flex gap={4}>
      <Link to="">
        <Avatar src={profilePic} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`'`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {username}
            </Text>
          </Link>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};
