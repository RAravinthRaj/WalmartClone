import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Heading1 = () => {
  return (
    <Box mt={6} px={{ base: 4, md: 10 }}>
      <Heading
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight="semibold"
      >
        Continue your shopping
      </Heading>
    </Box>
  );
};

export default Heading1;
