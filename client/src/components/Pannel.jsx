import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import Modalhome from "./Modalhome";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Pannel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pannelButton, setPannelButton] = useState(false);

  const toggleDrawer = () => {
    setPannelButton((prev) => {
      const newState = !prev;
      newState ? onOpen() : onClose();
      return newState;
    });
  };

  // Optional: Handle filter update from Modalhome
  const handlePreferenceSelect = async (filterText) => {
    try {
      const response = await fetch("http://localhost:3000/set-filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filter: filterText }),
      });
      const data = await response.json();
      console.log("Filter context updated:", data.context);
    } catch (err) {
      console.error("Error setting preference filter:", err);
    }
  };

  return (
    <HStack borderTop="1px solid white">
      <Flex
        justify="space-between"
        w="100%"
        bg="#0071DC"
        color="white"
        align="center"
        wrap="wrap"
        px={4}
        py={2}
      >
        {/* Left Section */}
        <Box
          w={{ base: "100%", lg: "48%" }}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
        >
          <Flex align="center" wrap="wrap" gap={2}>
            <Image
              borderRadius="full"
              boxSize="30px"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
              alt="logo"
            />
            <Text display="flex" alignItems="center">
              How do you want your items?{" "}
              <Box
                ml={2}
                cursor="pointer"
                onClick={toggleDrawer}
                aria-label="Toggle delivery settings"
              >
                {!pannelButton ? <SlArrowDown /> : <SlArrowUp />}
              </Box>
            </Text>
          </Flex>

          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            ml={4}
            gap={2}
          >
            <Box borderRight="1px solid white" height={4} pr={2}></Box>
            <CiLocationOn />
            <Text>Scramento 95829</Text>
          </Flex>

          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            ml={4}
            gap={2}
          >
            <IoHomeOutline />
            <Text>Scramento Supercenter</Text>
          </Flex>
        </Box>

        {/* Right Section */}
        <Box
          w={{ base: "100%", lg: "45%" }}
          className="roboto-bold"
          display="flex"
          justifyContent={{ base: "center", lg: "space-evenly" }}
          mt={{ base: 2, lg: 0 }}
          flexWrap="wrap"
        >
          <ChakraLink as={ReactRouterLink} to="/deals">
            Deals
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/grocery">
            Grocery & Essentials
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/easter">
            Easter
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/style">
            Walmart Style
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/baby">
            Baby Days
          </ChakraLink>
        </Box>

        {/* Animated Modal */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <Modalhome
            isOpen={isOpen}
            onClose={() => {
              setPannelButton(false);
              onClose();
            }}
            onPreferenceSelect={handlePreferenceSelect} // ⬅️ optional prop to update filter
          />
        </motion.div>
      </Flex>
    </HStack>
  );
};
