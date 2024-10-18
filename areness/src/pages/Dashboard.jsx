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
//       <Flex minHeight="100vh">
//         <Sidebar />
//         <Box 
//           flex="1" 
//           p={6} 
//           bg="gray.50" 
//           boxShadow="lg"
//           borderRadius="md"
//         >
//           <Navbar />
//           <VStack spacing={8} align="start">
//             <Text fontSize="2xl" fontWeight="bold">
//               Welcome back, Sundar 👋
//             </Text>

//             <HStack spacing={10} width="100%"> 
//               <VStack align="start" w="50%">
//                 <Text fontWeight="bold">To-Do</Text>
//                 <TaskCard
//                   task={{
//                     title: "Attend Nischal's Birthday",
//                     description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
//                     status: "Not Started",
//                     priority: "Moderate",
//                     time:"12/12/2023"
//                   }}
//                 />
//                 <TaskCard
//                   task={{
//                     title: "Landing Page Design",
//                     description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
//                     status: "In Progress",
//                     priority: "Moderate",
//                      time:"12/12/2023"
//                   }}
//                 />
//                 <TaskCard
//                   task={{
//                     title: "Presentation on Final Product",
//                     description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
//                     status: "In Progress",
//                     priority: "Moderate",
//                      time:"12/12/2023"
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
      <Flex minHeight="100vh" direction={["column", "row"]}>
        <Sidebar />
        <Box 
          flex="1" 
          p={[4, 6]}  // Adjust padding for smaller screens
          bg="gray.50" 
          boxShadow="lg"
          borderRadius="md"
        >
          <Navbar />
            
          <VStack spacing={[4, 8]} align="start">
            <Text fontSize={["xl", "2xl"]} fontWeight="bold">
              Welcome back, Sundar 👋
            </Text>

            <HStack spacing={[4, 10]} width="100%" flexWrap="wrap">
              <VStack align="start" w={{lg:"50%", md:"80%", sm:"100%", base:"100%"}}>
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
                    description: "Buy gifts on the way and pick up the cake from backery (6PM | Fresh Elements)...",
                    status: "In Progress",
                    priority: "Moderate",
                    time:"12/12/2023"
                  }}
                />
              </VStack>

              {/* Adjust direction for TaskStatus and CompletedTasks */}
              <VStack 
                align="start" 
                w={{lg:"46%", md:"80%", sm:"100%"}} 
                // direction={["column", "column", "row"]}  // Stack vertically on medium/small screens
                spacing={[4, 8]}  // Adjust spacing between components
                mt={[4, 0]}      // Add margin-top on smaller screens
              >
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



