import { Box, Text, HStack, Badge, VStack } from "@chakra-ui/react";

function TaskCard({ task }) {
  return (
    <Box p={4} bg="white" shadow="md" borderRadius="md" w="full">
      <HStack justify="space-between">
        <Text fontWeight="bold">{task.title}</Text>
        <Badge colorScheme={task.priority === "Moderate" ? "yellow" : "green"}>{task.priority}</Badge>
      </HStack>
      <Text fontSize="sm">{task.description}</Text>
      <Text fontSize="xs" color="gray.500">{task.time}</Text>
      <Text fontSize="xs" color="gray.500">{task.status}</Text>
    </Box>
  );
}
export default TaskCard;