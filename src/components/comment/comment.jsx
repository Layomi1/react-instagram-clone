import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Comment = ({ createdAt, profilePic, text, username }) => {
  return (
    <Flex gap={4} alignItems={"start"}>
      <Link to="">
        <Avatar src={profilePic} size={"sm"} />
      </Link>
      <Flex direction={"column"} alignItems={"start"}>
        <Flex gap={2}>
          <Link to={""}>
            <Text fontWeight={"bold"} fontSize={12}>
              {username}
            </Text>
          </Link>
          <Text fontSize={14} noOfLines={1}>
            {text}
          </Text>
        </Flex>
        <Text fontSize={12} color={"gray.800"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};
