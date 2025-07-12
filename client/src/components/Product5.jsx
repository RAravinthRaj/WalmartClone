import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import boyAndGirl from "../assets/boyAndGirl.png";

const products = [
  {
    id: 1,
    price: "$12.98",
    title: "George Men's Boxer Brief",
    desc: "Lined Swim Shorts with UPF...",
    image:
      "https://i5.walmartimages.com/seo/George-Men-s-Boxer-Brief-Lined-Swim-Shorts-with-UPF-50-7-inseam-Sizes-S-3XL_f59e8919-7d38-4876-9d9f-c26228e37ea5.320a35f5546db5f234567c6ea358291e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 2,
    price: "$9.98",
    title: "No Boundaries Junior's Daisy",
    desc: "Print O-Ring Bikini Bottoms,...",
    image:
      "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Daisy-Print-O-Ring-Bikini-Bottoms-Sizes-S-XXL_1fbe1c40-d185-4a95-95f0-6895aa4abc5d.b5d9535c4b308d2847174024a5f8982a.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 3,
    price: "$14.98",
    title: "No Boundaries Junior's Yellow",
    desc: "Gingham Halter Bandeau",
    image:
      "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Yellow-Gingham-Halter-Bandeau-Bikini-Top-Size-XS-XL_528a76e6-8c3c-4d2d-9ba7-193518ef3681.5efe29019978b96921b92c414ebe4e9f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
];

const Product5 = () => {
  return (
    <Box mt={10} px={{ base: 4, md: 10 }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={10}
        justify="space-between"
        align="stretch"
      >
        {/* Left: Product Cards */}
        <Box flex={1}>
          <Flex justify="space-between" align="center" mb={4}>
            <Box>
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                Pack like a pro
              </Text>
              <Text fontSize="sm">From suitcases to sunglasses.</Text>
            </Box>
            <Link>
              <Text textDecor="underline" fontWeight="medium">
                View all
              </Text>
            </Link>
          </Flex>

          <Wrap spacing={4}>
            {products.map((item) => (
              <WrapItem
                key={item.id}
                w={{ base: "100%", md: "48%", lg: "30%" }}
              >
                <Box
                  border="1px solid #e2e8f0"
                  borderRadius="lg"
                  p={4}
                  w="100%"
                  h="100%"
                >
                  <Flex justify="flex-end" fontSize="xl" mb={2}>
                    <Circle size="32px" bg="gray.100">
                      <CiHeart />
                    </Circle>
                  </Flex>
                  <Image
                    src={item.image}
                    alt={item.title}
                    h="160px"
                    w="100%"
                    objectFit="contain"
                    mb={2}
                  />
                  <Text fontWeight="bold" fontSize="lg">
                    {item.price}
                  </Text>
                  <Text mb={2} fontSize="sm">
                    {item.title}
                    <br />
                    {item.desc}
                  </Text>
                  <Button
                    size="sm"
                    border="1px solid black"
                    borderRadius="full"
                    bg="white"
                    _hover={{ bg: "gray.50" }}
                    w="100%"
                  >
                    Options
                  </Button>
                </Box>
              </WrapItem>
            ))}
            <WrapItem>
              <Flex align="center" h="100%">
                <Button
                  fontSize="2xl"
                  border="1px solid black"
                  borderRadius="full"
                  p={4}
                  bg="white"
                >
                  <LiaGreaterThanSolid />
                </Button>
              </Flex>
            </WrapItem>
          </Wrap>
        </Box>

        {/* Right: Background image with CTA */}
        <Box
          flex={1}
          bgImage={`url(${boyAndGirl})`}
          bgSize="cover"
          bgPosition="center"
          borderRadius="lg"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          px={8}
          py={10}
          color="white"
        >
          <Box maxW="80%">
            <Text fontSize={{ base: "xl", md: "2xl" }} mb={1}>
              Concert-ready outfits
            </Text>
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              mb={4}
            >
              The Festival <br /> Shop
            </Text>
            <Button
              bg="white"
              color="black"
              borderRadius="full"
              px={6}
              _hover={{ bg: "gray.200" }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product5;
