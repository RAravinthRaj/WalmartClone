import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <VStack spacing={0} w="100%">
      {/* Feedback Section */}
      <Box w="100%" mt={20}>
        <Box
          h="150px"
          bg="#E6F1FC"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          px={4}
          textAlign="center"
        >
          <Text fontSize="md" className="roboto-regular">
            We’d love to hear what you think!
          </Text>
          <Button
            border="1px solid black"
            borderRadius="full"
            bg="white"
            mt={4}
          >
            Give feedback
          </Button>
        </Box>

        {/* Main Footer */}
        <Box bg="#004F9A" color="white" py={10} px={4}>
          {/* First Row */}
          <Wrap spacing={4} justify="center" maxW="90%" mx="auto" mb={4}>
            {[
              "All Departments",
              "Store Directory",
              "Careers",
              "Our Company",
              "Sell on Walmart.com",
              "Help",
              "Product Recalls",
              "Accessibility",
              "Tax Exempt Program",
              "Get the Walmart App",
            ].map((item, index) => (
              <WrapItem key={index}>
                <Text fontSize="sm">{item}</Text>
              </WrapItem>
            ))}
          </Wrap>

          {/* Second Row */}
          <Wrap spacing={4} justify="center" maxW="90%" mx="auto" mb={4}>
            {[
              "Sign-up for Email",
              "Safety Data Sheet",
              "Terms of Use",
              "Privacy & Security",
              "California Supply Chain Act",
            ].map((item, index) => (
              <WrapItem key={index}>
                <Text fontSize="sm">{item}</Text>
              </WrapItem>
            ))}
            <WrapItem>
              <Image
                src="https://i5.walmartimages.com/dfwrs/76316474-f70e/k2-_67001355-c576-4ca2-989d-260a2673c41a.v1.png"
                w={8}
                alt="Privacy Choices"
              />
            </WrapItem>
            {["Your Privacy Choices", "Notice at Collection"].map(
              (item, index) => (
                <WrapItem key={index}>
                  <Text fontSize="sm">{item}</Text>
                </WrapItem>
              )
            )}
          </Wrap>

          {/* Third Row */}
          <Wrap spacing={4} justify="center" maxW="90%" mx="auto" mb={6}>
            {[
              "Request My Personal Information",
              "Brand Shop Directory",
              "Pharmacy",
              "Walmart Business",
              "#IYWYK",
            ].map((item, index) => (
              <WrapItem key={index}>
                <Text fontSize="sm">{item}</Text>
              </WrapItem>
            ))}
          </Wrap>

          {/* Copyright */}
          <Box textAlign="center" mt={6}>
            <Text fontSize="sm">© 2024 Walmart. All Rights Reserved.</Text>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};
