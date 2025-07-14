import {
  Avatar,
  Box,
  Button,
  Flex,
  GridItem,
  Text,
  Image,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Comment } from "../comment/comment";
import { PostFooter } from "../feed-posts/post-footer";

export const ProfilePostItem = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid whiteAlphha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          transition={"all 0.3s ease"}
          zIndex={10}
          bg={"blackAlpha.700"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Flex alignContent={"center"} justifyContent={"center"} gap={4}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                2
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                9
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          w={"100%"}
          objectFit={"cover"}
          height={"100%"}
          alt="profile post"
        />
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay size={{ base: "3xl", md: "5xl" }} />
        <ModalContent width="full" minW={{ md: "900px" }}>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5} width={"full"} minW={{ md: "900px" }}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"50%"}
              minH={"50%"}
              p={5}
              justifyContent={"space-between"}
            >
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Image src={img} alt="profile post" />
              </Flex>

              <Flex
                flex={1}
                pt={2}
                pr={0}
                display={{ base: "none", md: "flex" }}
                style={{
                  flexDirection: "column",
                }}
                alignItems={"start"}
                justifyContent={"space-between"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  pb={2}
                  w={"full"}
                >
                  <Flex alignItems={"center"}>
                    <Box mr={2}>
                      <Avatar
                        src="./profilepic1.png"
                        size={"sm"}
                        name="As a programmer"
                      />
                    </Box>

                    <Box>
                      <Text fontWeight={"bold"} fontSize={10}>
                        programmer_
                      </Text>
                    </Box>
                  </Flex>
                  <Button
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    size={"sm"}
                    p={1}
                  >
                    <MdDelete size={20} />
                  </Button>
                </Flex>

                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                  borderColor={"gray"}
                  borderY={"1px"}
                  py={4}
                >
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Dummy images from Unsplash"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Good job"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer_"
                    profilePic="/profilepic1.png"
                    text="Nice project"
                  />
                </VStack>

                <PostFooter isProfilePage={false} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
