import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import CompletedTasks from "../components/CompletedTasks";
import TaskStatus from "../components/TaskStatus";
import { Flex, Box, VStack, HStack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Flex>
        <Sidebar />
        <Box flex="1" p={6} bg="gray.50">
          <Navbar />
          <VStack spacing={8} align="start">
            <Text fontSize="2xl" fontWeight="bold">
              Welcome back, Sundar 👋
            </Text>

            <HStack spacing={10}>
              <VStack align="start" w="60%">
                <Text fontWeight="bold">To-Do</Text>
                <TaskCard
                  task={{
                    title: "Attend Nischal's Birthday",
                    description: "Buy gifts and pick up the cake",
                    status: "Not Started",
                    priority: "Moderate",
                  }}
                />
                <TaskCard
                  task={{
                    title: "Landing Page Design",
                    description: "Get work done by EOD",
                    status: "In Progress",
                    priority: "Moderate",
                  }}
                />
                <TaskCard
                  task={{
                    title: "Presentation on Final Product",
                    description: "Prepare for the presentation",
                    status: "In Progress",
                    priority: "Moderate",
                  }}
                />
              </VStack>

              <VStack align="start" w="40%">
                <TaskStatus />
                <CompletedTasks />
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
