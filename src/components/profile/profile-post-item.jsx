import {
  Avatar,
  Box,
  Button,
  Divider,
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
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const ProfilePostItem = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
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
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              p={5}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}

                // justifyContent={"center"}
                // alignContent={"center"}
              >
                <Image
                  src={img}
                  w={"100%"}
                  objectFit={"cover"}
                  alt="profile post"
                />
              </Box>

              <Flex
                flex={1}
                pt={2}
                pr={0}
                display={{ base: "none", md: "block" }}
                alignItems={"center"}
                justifyContent={"space-between"}

                // alignItems={"center"}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <Box mr={1}>
                      <Avatar
                        src="./profilepic1.png"
                        size={"xs"}
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
                <Divider />
                <Flex></Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
