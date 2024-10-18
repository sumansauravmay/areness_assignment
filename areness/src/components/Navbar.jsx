// import React from 'react';
// import { HStack, Input, IconButton, Text, Box } from "@chakra-ui/react";
// import { FaSearch, FaBell, FaCalendarAlt } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <HStack justify="space-between" p={4} bg="white" shadow="md">
//       <HStack>
//         <Text fontSize="2xl" fontWeight="bold" color="red.400">Dash</Text>
//         <Text fontSize="2xl" fontWeight="bold">board</Text>
//       </HStack>

//       <HStack spacing={4}>
//         <Input placeholder="Search your task here..." size="md" w="300px" />
//         <IconButton icon={<FaSearch />} aria-label="Search" />
//         <IconButton icon={<FaBell />} aria-label="Notifications" />
//         <IconButton icon={<FaCalendarAlt />} aria-label="Calender" />
//         <Box>
//           <Text fontWeight="bold">Tuesday</Text>
//           <Text>20/06/2023</Text>
//         </Box>
//       </HStack>
//     </HStack>
//   )
// }

// export default Navbar;



// import React from 'react';
// import { HStack, Input, IconButton, Text, Box, useBreakpointValue, VStack } from "@chakra-ui/react";
// import { FaSearch, FaBell, FaCalendarAlt } from "react-icons/fa";

// const Navbar = () => {
//   // Adjust input width based on screen size
//   const inputWidth = useBreakpointValue({ base: "100%", md: "300px" });
//   // Adjust layout for smaller screens
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <HStack justify="space-between" p={4} bg="white" shadow="md" flexDirection={isMobile ? "column" : "row"}>
//       {/* Logo Section */}
//       <HStack spacing={2}>
//         <Text fontSize="2xl" fontWeight="bold" color="red.400">Dash</Text>
//         <Text fontSize="2xl" fontWeight="bold">board</Text>
//       </HStack>

//       {/* Search and Icons Section */}
//       <HStack spacing={4} flex={1} justify={isMobile ? "center" : "flex-end"}>
//         <Input placeholder="Search your task here..." size="md" w={inputWidth} />
//         <IconButton icon={<FaSearch />} aria-label="Search" />
//         <IconButton icon={<FaBell />} aria-label="Notifications" />
//         <IconButton icon={<FaCalendarAlt />} aria-label="Calendar" />
//         {!isMobile && (
//           <Box textAlign="right">
//             <Text fontWeight="bold">Tuesday</Text>
//             <Text>20/06/2023</Text>
//           </Box>
//         )}
//       </HStack>

//       {/* Date Section for Mobile View */}
//       {isMobile && (
//         <VStack align="center" mt={4}>
//           <Text fontWeight="bold">Tuesday</Text>
//           <Text>20/06/2023</Text>
//         </VStack>
//       )}
//     </HStack>
//   );
// };

// export default Navbar;




import React from 'react';
import { HStack, Input, IconButton, Text, Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaSearch, FaBell, FaCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  // Adjust input width and icon button spacing based on screen size
  const inputWidth = useBreakpointValue({ base: "100%", md: "100%", lg: "300px" });
  const iconButtonSize = useBreakpointValue({ base: "sm", md: "md" });
  // Adjust layout for smaller screens
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  
  return (
    <HStack justify="space-between" p={4} bg="white" shadow="md" flexDirection={isMobile ? "column" : "row"}>
      {/* Logo Section */}
      <HStack spacing={2}>
        <Text fontSize={useBreakpointValue({ base: "xl", md: "2xl" })} fontWeight="bold" color="red.400">Dash</Text>
        <Text fontSize={useBreakpointValue({ base: "xl", md: "2xl" })} fontWeight="bold">board</Text>
      </HStack>

      {/* Search and Icons Section */}
      <HStack spacing={4} flex={1} justify={isMobile || isTablet ? "center" : "flex-end"} wrap={isMobile ? "wrap" : "nowrap"}>
        <Input placeholder="Search your task here..." size="md" w={inputWidth} />
        <IconButton icon={<FaSearch />} aria-label="Search" size={iconButtonSize} />
        <IconButton icon={<FaBell />} aria-label="Notifications" size={iconButtonSize} />
        <IconButton icon={<FaCalendarAlt />} aria-label="Calendar" size={iconButtonSize} />
        {!isMobile && !isTablet && (
          <Box textAlign="right">
            <Text fontWeight="bold">Tuesday</Text>
            <Text>20/06/2023</Text>
          </Box>
        )}
      </HStack>

      {/* Date Section for Mobile and Tablet View */}
      {(isMobile || isTablet) && (
        <VStack align="center" mt={isMobile ? 4 : 0}>
          <Text fontWeight="bold">Tuesday</Text>
          <Text>20/06/2023</Text>
        </VStack>
      )}
    </HStack>
  );
};

export default Navbar;



