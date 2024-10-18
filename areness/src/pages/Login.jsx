// import React, { useState } from "react";
// import { useToast } from '@chakra-ui/react'
// import axios from "axios";
// import {
//   Container,
//   Flex,
//   Box,
//   Heading,
//   Image,
//   Checkbox,
//   Button,
//   VStack,
//   Wrap,
//   WrapItem,
//   FormControl,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Text,
// } from "@chakra-ui/react";
// import { IoMdUnlock } from "react-icons/io";
// import { BsPerson } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//     const toast = useToast()
//     const navigate=useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const data = {
//     username,
//     password,
//   };
//   const handleLogin = () => {
//     axios
//       .post(`https://areness-assignment-1so8.onrender.com/login`, data)
//       .then((res) => {
//         console.log("res", res.data.username.username);
//         let x=res.data.username.username;
//         toast({
//             title: 'Login Successful.',
//             description: "Congratulations!,"+" "+ x,
//             position: 'top',
//             status: 'success',
//             duration: 9000,
//             isClosable: true,
//           })
//         navigate("/dashboard");
//       })
//       .catch((err) => {
//         console.log("err", err.response.data.msg);
//         let err2=err.response.data.msg;
//         toast({
//             title: 'Login Failed.',
//             description: err2,
//             position: 'top',
//             status: 'error',
//             duration: 9000,
//             isClosable: true,
//           })
//       });
//   };

//   return (
//     <>
//       <Container
//         bg="#FF7373"
//         maxW="full"
//         mt={0}
//         centerContent
//         overflow="hidden"
//       >
//         <Flex>
//           <Box
//             bg="white"
//             color="white"
//             borderRadius="lg"
//             m={{ sm: 4, md: 16, lg: 10 }}
//             p={{ sm: 5, md: 5, lg: 16 }}
//           >
//             <Box p={4}>
//               <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//                 <WrapItem width="50%">
//                   <Box bg="white" borderRadius="lg">
//                     <Box m={8} color="#0B0E3F">
//                       <Heading color="#FF7373" mb={2}>
//                         Sign in
//                       </Heading>
//                       <VStack spacing={5}>
//                         <FormControl id="name">
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <BsPerson color="gray.800" />
//                             </InputLeftElement>
//                             <Input
//                               type="text"
//                               size="md"
//                               placeholder="Enter Username Name"
//                               value={username}
//                               onChange={(e) => setUsername(e.target.value)}
//                             />
//                           </InputGroup>
//                         </FormControl>

//                         <FormControl id="name">
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <IoMdUnlock color="gray.800" />
//                             </InputLeftElement>
//                             <Input
//                               type="text"
//                               size="md"
//                               placeholder="Enter Password"
//                               value={password}
//                               onChange={(e) => setPassword(e.target.value)}
//                             />
//                           </InputGroup>
//                         </FormControl>

//                         <FormControl>
//                           <Checkbox>Remember Me</Checkbox>
//                         </FormControl>

//                         <FormControl id="name" float="right">
//                           <Button
//                             variant="solid"
//                             bg="#FF7373"
//                             color="white"
//                             _hover={{}}
//                             onClick={handleLogin}
//                           >
//                             Login
//                           </Button>
//                         </FormControl>

//                         <Flex>
//                           <Text>Or, Login with </Text>
//                           <Image
//                             width="40px"
//                             src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
//                             alt="facebook"
//                           />
//                           <Image
//                             width="40px"
//                             src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//                             alt="google"
//                           />
//                           <Image
//                             width="40px"
//                             src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729123200&semt=ais_hybrid"
//                             alt="X"
//                           />
//                         </Flex>

//                         <Flex>
//                           <Text>Don't have an account? </Text>
//                           <Link to="/">
//                             <Text color={"blue"}>Create One</Text>
//                           </Link>
//                         </Flex>
//                       </VStack>
//                     </Box>
//                   </Box>
//                 </WrapItem>

//                 <WrapItem width="40%">
//                   {/* <Box> */}
//                   <Image
//                     display={{
//                       base: "none",
//                       sm: "none",
//                       md: "block",
//                       lg: "block",
//                     }}
//                     src="https://cdn3d.iconscout.com/3d/premium/preview/man-holding-login-form-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--id-password-signin-ecommerce-and-shopping-pack-e-commerce-illustrations-2426390.png?f=webp&h=700"
//                     alt="image"
//                   />
//                 </WrapItem>
//               </Wrap>
//             </Box>
//           </Box>
//         </Flex>
//       </Container>
//     </>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
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
  Text,
} from "@chakra-ui/react";
import { IoMdUnlock } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    username,
    password,
  };

  const handleLogin = () => {
    axios
      .post(`https://areness-assignment-1so8.onrender.com/login`, data)
      .then((res) => {
        console.log("res", res.data.username.username);
        let x = res.data.username.username;
        toast({
          title: 'Login Successful.',
          description: "Congratulations!," + " " + x,
          position: 'top',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("err", err.response.data.msg);
        let err2 = err.response.data.msg;
        toast({
          title: 'Login Failed.',
          description: err2,
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
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
          direction={{ base: "column", md: "column", lg: "row" }}  // Responsive direction
        >
          <Box
            bg="white"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem width={{ base: "100%", md: "100%", lg: "50%" }}>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <Heading color="#FF7373" mb={2}>
                        Sign in
                      </Heading>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Username Name"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <IoMdUnlock color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="password"  // changed to password for security
                              size="md"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl>
                          <Checkbox>Remember Me</Checkbox>
                        </FormControl>

                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#FF7373"
                            color="white"
                            _hover={{}}
                            onClick={handleLogin}
                          >
                            Login
                          </Button>
                        </FormControl>

                        <Flex>
                          <Text>Or, Login with </Text>
                          <Image
                            width="40px"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                            alt="facebook"
                          />
                          <Image
                            width="40px"
                            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                            alt="google"
                          />
                          <Image
                            width="40px"
                            src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729123200&semt=ais_hybrid"
                            alt="X"
                          />
                        </Flex>

                        <Flex>
                          <Text>Don't have an account? </Text>
                          <Link to="/">
                            <Text color={"blue"}>Create One</Text>
                          </Link>
                        </Flex>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>

                <WrapItem width={{ base: "100%", md: "100%", lg: "40%" }}>
                  <Image
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    }}
                    src="https://cdn3d.iconscout.com/3d/premium/preview/man-holding-login-form-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--id-password-signin-ecommerce-and-shopping-pack-e-commerce-illustrations-2426390.png?f=webp&h=700"
                    alt="image"
                  />
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Login;


