import { Box } from "@chakra-ui/react";
import React from "react";

export const LineHorizontal = () => {
  return (
    <Box w="100%" px={{ base: 4, sm: 6, md: 10 }} my={{ base: 4, md: 6 }}>
      <Box borderTop="1px solid #ccc" w="100%" h="1px" borderColor="gray.300" />
    </Box>
  );
};
