// import { VStack, Box, Avatar, Text, Button, IconButton, Flex } from "@chakra-ui/react";
// import { FaHome, FaTasks, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

// function Sidebar() {
//   return (
//     <VStack bg="red.400" p={5} w="250px" color="white" maxH="100vh" spacing={6}>
//       <Avatar size="xl" name="Sundar Gurung" src="path_to_avatar_image" />
//       <Text fontSize="lg">Sundar Gurung</Text>
//       <Text fontSize="sm">sundargurung360@gmail.com</Text>

//       <VStack align="start" spacing={4}>
//         <Button leftIcon={<FaHome />} variant="ghost" w="full">Dashboard</Button>
//         <Button leftIcon={<FaTasks />} variant="ghost" w="full">Vital Task</Button>
//         <Button leftIcon={<FaTasks />} variant="ghost" w="full">My Task</Button>
//         <Button leftIcon={<FaTasks />} variant="ghost" w="full">Task Categories</Button>
//         <Button leftIcon={<FaCog />} variant="ghost" w="full">Settings</Button>
//         <Button leftIcon={<FaQuestionCircle />} variant="ghost" w="full">Help</Button>
//       </VStack>

// <Flex>
//       <IconButton icon={<FaSignOutAlt />} aria-label="Logout" colorScheme="whiteAlpha" />
//       <Text mt={2}>Logout</Text>
// </Flex>

//     </VStack>
//   );
// }

// export default Sidebar;

import {
  VStack,
  Box,
  Avatar,
  Text,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import {
  FaHome,
  FaTasks,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <VStack
      bg="red.400"
      p={5}
      w={{ base: "100%", md: "250px" }} // Responsive width
      color="white"
      maxH="100vh"
      spacing={8}
      align="stretch"
    >
      {/* Avatar and User Info */}
      <VStack spacing={4} align="center">
        <Avatar
          size="xl"
          name="Sundar Gurung"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCY-kwdjyy_QKxaitv4qnQxoXk8GyKewAgQ&s"
        />
        <Text fontSize="lg" fontWeight="bold">
          Sundar Gurung
        </Text>
        <Text fontSize="sm" color="gray.200">
          sundargurung360@gmail.com
        </Text>
      </VStack>

      {/* Sidebar Menu */}
      <VStack align="stretch" spacing={4}>
        <Button
          leftIcon={<FaHome />}
          variant="ghost"
          justifyContent="start"
          w="full"
        >
          Dashboard
        </Button>

        <Link to="/">
          <Button
            leftIcon={<FaTasks />}
            variant="ghost"
            justifyContent="start"
            w="full"
          >
            Sign up
          </Button>
        </Link>

        <Link to="/login">
          <Button
            leftIcon={<FaTasks />}
            variant="ghost"
            justifyContent="start"
            w="full"
          >
            Login
          </Button>
        </Link>

        <Button
          leftIcon={<FaTasks />}
          variant="ghost"
          justifyContent="start"
          w="full"
        >
          Task Categories
        </Button>
        <Button
          leftIcon={<FaCog />}
          variant="ghost"
          justifyContent="start"
          w="full"
        >
          Settings
        </Button>
        <Button
          leftIcon={<FaQuestionCircle />}
          variant="ghost"
          justifyContent="start"
          w="full"
        >
          Help
        </Button>
      </VStack>

      {/* Logout Button */}
      <Flex align="center" justify="start" mt="auto">
        <IconButton
          icon={<FaSignOutAlt />}
          aria-label="Logout"
          colorScheme="whiteAlpha"
        />
        <Text ml={2}>Logout</Text>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
