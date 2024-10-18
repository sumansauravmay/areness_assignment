import { VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

function CompletedTasks() {
  return (
    <VStack spacing={4}>
      <TaskCard task={{ title: "Walk the dog", description: "Take the dog to the park", status: "Completed", priority: "Low" }} />
      <TaskCard task={{ title: "Conduct meeting", description: "Meet with client", status: "Completed", priority: "High" }} />
    </VStack>
  );
}

export default CompletedTasks;