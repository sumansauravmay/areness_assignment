import React from 'react';
import { HStack, Input, IconButton, Text, Box } from "@chakra-ui/react";
import { FaSearch, FaBell, FaCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <HStack justify="space-between" p={4} bg="white" shadow="md">
      <HStack>
        <Text fontSize="2xl" fontWeight="bold" color="red.400">Dash</Text>
        <Text fontSize="2xl" fontWeight="bold">board</Text>
      </HStack>

      <HStack spacing={4}>
        <Input placeholder="Search your task here..." size="md" w="300px" />
        <IconButton icon={<FaSearch />} aria-label="Search" />
        <IconButton icon={<FaBell />} aria-label="Notifications" />
        <IconButton icon={<FaCalendarAlt />} aria-label="Calender" />
        <Box>
          <Text fontWeight="bold">Tuesday</Text>
          <Text>20/06/2023</Text>
        </Box>
      </HStack>
    </HStack>
  )
}

export default Navbar;
