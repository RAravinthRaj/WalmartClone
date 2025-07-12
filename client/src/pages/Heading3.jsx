import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Heading3 = () => {
  return (
    <Flex mt={20} px={{ base: 4, md: 10 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Heading
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          fontWeight="bold"
        >
          Get it all here
        </Heading>
        <Link to="/some-destination">
          <Text
            as="u"
            fontSize={{ base: "sm", md: "md" }}
            color="blue.600"
            fontWeight="medium"
            _hover={{ textDecoration: "none", color: "blue.800" }}
          >
            View more
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Heading3;
