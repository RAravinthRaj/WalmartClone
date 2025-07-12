import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";

const Heading4 = () => {
  return (
    <Flex
      w="95%"
      maxW="1200px"
      mx="auto"
      my={10}
      px={{ base: 4, md: 8 }}
      py={4}
      bg="#F2F8FD"
      borderRadius="lg"
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 8 }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Box flexShrink={0}>
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-5626/k2-_9f1ca88f-5819-4c4c-8ae1-e15a46420d9b.v1.png?odnHeight=64&odnWidth=107&odnBg=FFFFFF"
          alt="Walmart Card Promo"
          maxH="64px"
        />
      </Box>

      <Stack spacing={1}>
        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
          Earn 50% cashback on Walmart.com
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          See if you’re pre-approved with no credit risk.{" "}
          <u style={{ cursor: "pointer" }}>Learn how</u>
        </Text>
      </Stack>
    </Flex>
  );
};

export default Heading4;
