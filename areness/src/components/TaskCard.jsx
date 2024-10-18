import { Box, Text, HStack, Badge, VStack } from "@chakra-ui/react";

function TaskCard({ task }) {
  return (
    <Box p={4} bg="white" shadow="md" borderRadius="md" w="full" h="150px">
      <HStack justify="space-between">
        <Text fontWeight="bold">{task.title}</Text>
      </HStack>
      <Text fontSize="sm">{task.description}</Text>
      <Text fontSize="xs" color="gray.500">Priority: {task.priority}</Text>
      <Text fontSize="xs" color="gray.500">Status: {task.status}</Text>
      <Text fontSize="xs" color="gray.500">Created On: {task.time}</Text>
    </Box>
  );
}
export default TaskCard;
