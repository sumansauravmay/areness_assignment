import { VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

function CompletedTasks() {
  return (
    <VStack spacing={4} w="100%" boxShadow="lg">
      <TaskCard
        task={{
          title: "Walk the dog",
          description: "Take the dog to the park",
          status: "Completed",
          priority: "Low",
          time:"12/12/2023"
        }}
      />
      <TaskCard
        task={{
          title: "Conduct meeting",
          description: "Meet with client",
          status: "Completed",
          priority: "High",
          time:"12/12/2023"
        }}
      />
    </VStack>
  );
}

export default CompletedTasks;
