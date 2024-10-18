import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Image,
  Checkbox,
  Button,
  VStack,
  WrapItem,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { IoLockOpenOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const data = {
    firstname,
    lastname,
    username,
    email,
    password,
    repassword,
  };

  const handleSignup = () => {
    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !repassword
    ) {
      toast({
        title: "Signup Failed.",
        description: "Fill all the input!",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    } else if (password !== repassword) {
      toast({
        title: "Signup Failed.",
        description: "Passwords do not match!",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (password.length < 8) {
      toast({
        title: "Signup Failed.",
        description: "Password should be at least 8 characters.",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      axios
        .post(`https://areness-assignment-1so8.onrender.com/register`, data)
        .then((res) => {
          const username = res.data.user.username;
          toast({
            title: "Signup Successful.",
            description: `Congratulations, ${username}!`,
            position: "top",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/login");
        })
        .catch((err) => {
          toast({
            title: "Signup Failed.",
            description: err.message,
            position: "top",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };

  return (
    <>
      <Container
        bg="#FF7373"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex
          direction={{ base: "column", md: "column", lg: "row" }} // Flex direction responsive
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="white"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            boxShadow="lg"
            w="100%"
          >
            <Box p={4}>
              <Flex
                direction={{ base: "column", md: "column", lg: "row" }} 
                alignItems="center"
              >
                <WrapItem
                  width={{ base: "100%", md: "100%", lg: "50%" }}
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    display={{
                      base: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    }}
                    src="https://thumbs.dreamstime.com/b/registration-form-cute-cartoon-man-sign-up-filling-all-fields-signing-cta-concept-clipboard-to-fill-flat-line-vector-225465986.jpg"
                    alt="signup illustration"
                    borderRadius="lg"
                    objectFit="cover"
                    maxW={{ base: "100%", md: "70%", lg: "100%" }}
                  />
                </WrapItem>
                <WrapItem width={{ base: "100%", lg: "50%" }}>
                  <Box bg="white" borderRadius="lg" w="100%">
                    <Box m={8} color="#0B0E3F">
                      <Heading color="#FF7373" mb={4} textAlign="center">
                        Signup
                      </Heading>
                      <VStack spacing={5}>
                        <FormControl id="firstname">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <FaUserPen color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="First Name"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="lastname">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <FaUserPen color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Last Name"
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="username">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="email">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="password">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <IoMdUnlock color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="repassword">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <IoLockOpenOutline color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="password"
                              placeholder="Confirm Password"
                              value={repassword}
                              onChange={(e) => setRepassword(e.target.value)}
                              size="md"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl>
                          <Checkbox>I agree to all terms</Checkbox>
                        </FormControl>

                        <Button
                          variant="solid"
                          bg="#FF7373"
                          color="white"
                          _hover={{ bg: "#FF5252" }}
                          onClick={handleSignup}
                          width="full"
                        >
                          Signup
                        </Button>

                        <Flex justify="center">
                          <Text mr={2}>Already have an account?</Text>
                          <Link to="/login">
                            <Text color="blue.500">Login</Text>
                          </Link>
                        </Flex>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Signup;
