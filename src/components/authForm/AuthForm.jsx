import {
  Box,
  Button,
  Flex,
  Input,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();

    if (!inputs.email || !inputs.password) {
      alert("Please fill input field");
      return;
    }
    navigate("/");
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" alt="instagram" />
          <Input
            type="email"
            name="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Enail"
            fontSize={14}
          />

          <Input
            type="password"
            name="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            placeholder="Password"
            fontSize={14}
            padding={4}
          />
          {isLoggedIn ? (
            <Input
              type="password"
              name="confirmPassword"
              value={cinputs.onfirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              fontSize={14}
            />
          ) : null}

          <Button
            onClick={handleAuth}
            w={"full"}
            bg={"gray.400"}
            size={"sm"}
            fontSize={14}
          >
            {isLoggedIn ? "Log In" : "Sign Up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={"2"} h={"1px"} bg={"gray.100"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={"2"} h={"1px"} bg={"gray.100"} />
          </Flex>

          <Flex alignItems={"center"}>
            <Image src="./google.png" h={5} alt="Goggle logo" />
            <Text color={"blue.500"} ml={2}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/* <Flex  */}
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        border={"1px solid gray"}
        borderRadius={4}
        padding={5}
      >
        <Box fontSize={14}>
          {isLoggedIn ? "Don't have an account? " : "Already have an Account?"}
        </Box>
        <Box
          onClick={() => setIsLoggedIn((prev) => !prev)}
          color={"blue.500"}
          cursor={"pointer"}
        >
          {isLoggedIn ? "Sign Up" : "Log In"}
        </Box>
      </Flex>
      {/* </Flex> */}
    </>
  );
};
export default AuthForm;
