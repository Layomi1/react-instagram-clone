import { Flex, Avatar, Button, Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SuggestedHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
  };
  return (
    <Flex alignItems={"center"} w={"full"} justifyContent={"space-between"}>
      <Flex alignItems={"center"}>
        <Link to="">
          <Avatar src="./profilepic.png" size={"lg"} />
        </Link>
        <Link to="">
          <Text fontSize={12} fontWeight={"bold"}>
            programmer_
          </Text>
        </Link>
      </Flex>

      <Button
        size={"xs"}
        bg={"transparent"}
        _hover={{ bg: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Flex>
  );
};
