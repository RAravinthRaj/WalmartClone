import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import { BiPause, BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Product2 = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "George Men's Boxer Brief",
      subtitle: "Lined Swim Shorts with UPF...",
      price: "$12.98",
      image:
        "https://i5.walmartimages.com/seo/George-Men-s-Boxer-Brief-Lined-Swim-Shorts-with-UPF-50-7-inseam-Sizes-S-3XL_f59e8919-7d38-4876-9d9f-c26228e37ea5.320a35f5546db5f234567c6ea358291e.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    },
    {
      id: 2,
      title: "No Boundaries Junior's Daisy",
      subtitle: "Print O-Ring Bikini Bottoms,...",
      price: "$9.98",
      image:
        "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Daisy-Print-O-Ring-Bikini-Bottoms-Sizes-S-XXL_1fbe1c40-d185-4a95-95f0-6895aa4abc5d.b5d9535c4b308d2847174024a5f8982a.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    },
    {
      id: 3,
      title: "No Boundaries Junior's Yellow",
      subtitle: "Gingham Halter Bandeau",
      price: "$14.98",
      image:
        "https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Yellow-Gingham-Halter-Bandeau-Bikini-Top-Size-XS-XL_528a76e6-8c3c-4d2d-9ba7-193518ef3681.5efe29019978b96921b92c414ebe4e9f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Box mt={10} px={{ base: 4, md: 10 }}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={10}
        justify="space-between"
        align="stretch"
      >
        {/* Product Panel */}
        <Box flex={1}>
          <Flex justify="space-between" mb={4} align="center">
            <Box>
              <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                Pack like a pro
              </Text>
              <Text>From suitcases to sunglasses.</Text>
            </Box>
            <Link>
              <Text textDecor="underline" fontWeight="medium">
                View all
              </Text>
            </Link>
          </Flex>

          <Flex wrap="wrap" gap={4}>
            {products.map((product) => (
              <Box
                key={product.id}
                border="1px solid #e2e8f0"
                borderRadius="lg"
                p={3}
                w={{ base: "100%", sm: "48%", md: "30%" }}
              >
                <Flex justify="flex-end" fontSize={24}>
                  <CiHeart />
                </Flex>
                <Image src={product.image} alt={product.title} mb={2} />
                <Text fontWeight="bold" fontSize="lg">
                  {product.price}
                </Text>
                <Text mb={2}>
                  {product.title}
                  <br />
                  {product.subtitle}
                </Text>
                <Button
                  size="sm"
                  borderRadius="full"
                  border="1px solid #000"
                  bg="white"
                  _hover={{ bg: "gray.50" }}
                >
                  Options
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Video Panel */}
        <Box flex={1} position="relative">
          <Flex justify="flex-end" mb={2}>
            <Button
              onClick={() => setIsPlaying((prev) => !prev)}
              borderRadius="full"
              fontSize={20}
              bg="white"
            >
              {isPlaying ? <BiPause /> : <BiPlay />}
            </Button>
          </Flex>
          <Box borderRadius="xl" overflow="hidden">
            <video
              ref={videoRef}
              src={video1}
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product2;
