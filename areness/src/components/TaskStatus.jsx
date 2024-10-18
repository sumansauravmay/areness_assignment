import { HStack, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import {Box, Text} from "@chakra-ui/react";

function TaskStatus() {
  return (
    <HStack spacing={6}>
      <Box textAlign="center">
        <CircularProgress value={84} color="green.400">
          <CircularProgressLabel>84%</CircularProgressLabel>
        </CircularProgress>
        <Text>Completed</Text>
      </Box>
      <Box textAlign="center">
        <CircularProgress value={46} color="blue.400">
          <CircularProgressLabel>46%</CircularProgressLabel>
        </CircularProgress>
        <Text>In Progress</Text>
      </Box>
      <Box textAlign="center">
        <CircularProgress value={13} color="red.400">
          <CircularProgressLabel>13%</CircularProgressLabel>
        </CircularProgress>
        <Text>Not Started</Text>
      </Box>
    </HStack>
  );
}
export default TaskStatus;
