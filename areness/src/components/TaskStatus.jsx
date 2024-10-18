import { HStack, CircularProgress, CircularProgressLabel, Box, Text, Flex } from "@chakra-ui/react";
import { VscTasklist } from "react-icons/vsc";

function TaskStatus() {
  return (
    <Box
      w="100%"
      p={6}
      boxShadow="md"
      borderRadius="lg"
      bg="white"
      border="1px"
      borderColor="gray.200"
    >
        <Flex>
            <VscTasklist />
            <Text fontSize="lg" fontWeight="bold" color="red.500" ml={2} mt={-1}>
        Task Status
      </Text>
        </Flex>
     
      <HStack spacing={8} justifyContent="center">
        <Box textAlign="center">
          <CircularProgress value={84} color="green.400" size="80px" thickness="10px">
            <CircularProgressLabel fontSize="lg" fontWeight="bold">84%</CircularProgressLabel>
          </CircularProgress>
          <Text mt={2} fontSize="md" color="green.600">Completed</Text>
        </Box>
        <Box textAlign="center">
          <CircularProgress value={46} color="blue.400" size="80px" thickness="10px">
            <CircularProgressLabel fontSize="lg" fontWeight="bold">46%</CircularProgressLabel>
          </CircularProgress>
          <Text mt={2} fontSize="md" color="blue.600">In Progress</Text>
        </Box>
        <Box textAlign="center">
          <CircularProgress value={13} color="red.400" size="80px" thickness="10px">
            <CircularProgressLabel fontSize="lg" fontWeight="bold">13%</CircularProgressLabel>
          </CircularProgress>
          <Text mt={2} fontSize="md" color="red.600">Not Started</Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default TaskStatus;






