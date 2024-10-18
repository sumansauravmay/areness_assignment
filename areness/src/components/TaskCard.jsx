import {
  Box,
  Text,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";

function TaskCard({ task }) {
  return (
    <Box p={4} bg="white" shadow="md" borderRadius="md" w="full" h="150px">
      <HStack justify="space-between">
        <Text fontWeight="bold">{task.title}</Text>
        <Image
          w="100px"
          src="https://thumbs.dreamstime.com/b/diverse-professional-business-leaders-posing-multicultural-workers-office-diverse-professional-business-leaders-posing-153903337.jpg"
          alt="image"
        />
      </HStack>
      <Text fontSize="sm" maxW={"70%"}>
        {task.description}
      </Text>

      <Flex justifyContent="space-between">
        <Text fontSize="sm" color="black.400">
          Priority:
          <label style={{ color: "blue" }}> {task.priority}</label>
        </Text>
        <Text fontSize="sm" color="black.400">
          Status:
          <label style={{ color: "red" }}> {task.status}</label>
        </Text>
        <Text fontSize="sm" color="gray.500">
          Created On: {task.time}
        </Text>
      </Flex>
    </Box>
  );
}
export default TaskCard;
