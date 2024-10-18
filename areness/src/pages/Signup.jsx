import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Image,
  Checkbox,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from "@chakra-ui/react";
import { FaUserPen } from "react-icons/fa6";
import {
  MdOutlineEmail,
} from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import {BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Container
        bg="#FF7373"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            bg="white"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem width="40%">
                  {/* <Box> */}
                  <Image
                    display={{
                      base: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    }}
                    src="https://thumbs.dreamstime.com/b/registration-form-cute-cartoon-man-sign-up-filling-all-fields-signing-cta-concept-clipboard-to-fill-flat-line-vector-225465986.jpg"
                    alt="image"
                  />
                </WrapItem>
                <WrapItem width="50%">
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <Heading color="#FF7373" mb={2}>
                        Signup
                      </Heading>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <InputGroup
                            borderColor="#E0E1E7"
                            width={{
                              lg: "400px",
                              md: "100%",
                              sm: "100%",
                              base: "100%",
                            }}
                          >
                            <InputLeftElement pointerEvents="none">
                              <FaUserPen color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter First Name"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <FaUserPen color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Last Name"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Username Name"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Email"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <IoMdUnlock color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Password"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <IoLockOpenOutline color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Confirm Password"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl>
                          <Checkbox >I agree to all terms</Checkbox>
                        </FormControl>

                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#FF7373"
                            color="white"
                            _hover={{}}
                          >
                            Signup
                          </Button>

                          <Flex>
                          <Text>Already have account? </Text>
                          <Link to='/login'>
                             <Text color={'blue'}>Login</Text>
                            </Link>
                          </Flex>
                         
                        </FormControl>




                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Signup;
