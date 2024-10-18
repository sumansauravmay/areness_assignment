// import { HStack, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
// import {Box, Text} from "@chakra-ui/react";

// function TaskStatus() {
//   return (
//     <HStack spacing={6} w="80%">
//       <Box textAlign="center">
//         <CircularProgress value={84} color="green.400">
//           <CircularProgressLabel>84%</CircularProgressLabel>
//         </CircularProgress>
//         <Text>Completed</Text>
//       </Box>
//       <Box textAlign="center">
//         <CircularProgress value={46} color="blue.400">
//           <CircularProgressLabel>46%</CircularProgressLabel>
//         </CircularProgress>
//         <Text>In Progress</Text>
//       </Box>
//       <Box textAlign="center">
//         <CircularProgress value={13} color="red.400">
//           <CircularProgressLabel>13%</CircularProgressLabel>
//         </CircularProgress>
//         <Text>Not Started</Text>
//       </Box>
//     </HStack>
//   );
// }
// export default TaskStatus;




import { HStack, CircularProgress, CircularProgressLabel, Box, Text } from "@chakra-ui/react";

function TaskStatus() {
  return (
    <Box
      w="80%"
      p={6}
      boxShadow="md"
      borderRadius="lg"
      bg="white"
      border="1px"
      borderColor="gray.200"
    >
      <Text fontSize="lg" fontWeight="bold" color="red.500" mb={4}>
        Task Status
      </Text>
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






