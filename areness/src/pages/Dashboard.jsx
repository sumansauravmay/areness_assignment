// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import TaskCard from "../components/TaskCard";
// import CompletedTasks from "../components/CompletedTasks";
// import TaskStatus from "../components/TaskStatus";
// import { Flex, Box, VStack, HStack, Text } from "@chakra-ui/react";

// const Dashboard = () => {
//   return (
//     <>
//       <Flex>
//         <Sidebar />
//         <Box flex="1" p={6} bg="gray.50">
//           <Navbar />
//           <VStack spacing={8} align="start">
//             <Text fontSize="2xl" fontWeight="bold">
//               Welcome back, Sundar 👋
//             </Text>

//             <HStack spacing={10}>
//               <VStack align="start" w="60%">
//                 <Text fontWeight="bold">To-Do</Text>
//                 <TaskCard
//                   task={{
//                     title: "Attend Nischal's Birthday",
//                     description: "Buy gifts and pick up the cake",
//                     status: "Not Started",
//                     priority: "Moderate",
//                   }}
//                 />
//                 <TaskCard
//                   task={{
//                     title: "Landing Page Design",
//                     description: "Get work done by EOD",
//                     status: "In Progress",
//                     priority: "Moderate",
//                   }}
//                 />
//                 <TaskCard
//                   task={{
//                     title: "Presentation on Final Product",
//                     description: "Prepare for the presentation",
//                     status: "In Progress",
//                     priority: "Moderate",
//                   }}
//                 />
//               </VStack>

//               <VStack align="start" w="40%">
//                 <TaskStatus />
//                 <CompletedTasks />
//               </VStack>
//             </HStack>
//           </VStack>
//         </Box>
//       </Flex>
//     </>
//   );
// };

// export default Dashboard;




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
      <Flex minHeight="100vh">
        <Sidebar />
        <Box 
          flex="1" 
          p={6} 
          bg="gray.50" 
          boxShadow="lg"  // Adds a large shadow for better visual effect
          borderRadius="md"  // Optional: Adds a subtle border radius to soften the corners
        >
          <Navbar />
          <VStack spacing={8} align="start">
            <Text fontSize="2xl" fontWeight="bold">
              Welcome back, Sundar 👋
            </Text>

            <HStack spacing={10} width="100%">  {/* Ensure full width of available space */}
              <VStack align="start" w="50%">
                <Text fontWeight="bold">To-Do</Text>
                <TaskCard
                  task={{
                    title: "Attend Nischal's Birthday",
                    description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
                    status: "Not Started",
                    priority: "Moderate",
                    time:"12/12/2023"
                  }}
                />
                <TaskCard
                  task={{
                    title: "Landing Page Design",
                    description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
                    status: "In Progress",
                    priority: "Moderate",
                     time:"12/12/2023"
                  }}
                />
                <TaskCard
                  task={{
                    title: "Presentation on Final Product",
                    description: "Prepare for the presentation",
                    status: "In Progress",
                    priority: "Moderate",
                     time:"12/12/2023"
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






