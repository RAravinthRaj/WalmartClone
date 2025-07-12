import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Heading2 = () => {
  return (
    <Box mt={5} px={{ base: 4, md: 10 }}>
      <Heading fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="bold">
        More fresh finds
      </Heading>
    </Box>
  );
};

export default Heading2;
