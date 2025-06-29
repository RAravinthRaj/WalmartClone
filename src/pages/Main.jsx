import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading1 from "./Heading1";

export const Main = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={6}
      w="100%"
      mt={5}
      px={{ base: 4, md: 6, lg: 10 }}
    >
      {/* Left Column */}
      <Box
        w={{ base: "100%", lg: "20%" }}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Box
          height="250px"
          bg="#E6CFA7"
          borderRadius="2xl"
          p={5}
          boxShadow="md"
        >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Floor care for so much less
          </Text>
          <Link>
            <u>Shop now</u>
          </Link>
          <Flex justifyContent="flex-end">
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/shark-removebg-preview.png?raw=true"
              alt="logo"
              w="120px"
              mt={4}
            />
          </Flex>
        </Box>

        <Box bg="#D9E4F5" borderRadius="2xl" p={5} boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Top styles - low, low Prices
          </Text>
          <Flex
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Link>
                <u>Shop now</u>
              </Link>
              <Heading mt={4} size="md">
                <sup>$</sup>22<sup>43</sup>
              </Heading>
            </Box>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/woman-removebg-preview.png?raw=true"
              alt="woman"
              w={{ base: "100%", sm: "60%" }}
              mt={{ base: 4, sm: 0 }}
            />
          </Flex>
        </Box>

        <Box bg="#95BBF9" borderRadius="2xl" p={5} boxShadow="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                Let's play under $25
              </Text>
              <Link>
                <u>Shop toys</u>
              </Link>
            </Box>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/toys-removebg-preview.png?raw=true"
              alt="toys"
              w={{ base: "40%", sm: "30%" }}
            />
          </Flex>
        </Box>
      </Box>

      {/* Center Column */}
      <Box
        w={{ base: "100%", lg: "60%" }}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Box bg="#B3CEFE" borderRadius="2xl" p={6} boxShadow="lg">
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={6}
          >
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading size="3xl" mb={2}>
                Springs
              </Heading>
              <Heading size="xl">Savings</Heading>
              <Button
                mt={4}
                border="1px solid black"
                borderRadius={20}
                colorScheme="blackAlpha"
              >
                Shop all
              </Button>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/price-removebg-preview.png?raw=true"
                mt={4}
                maxW="150px"
                mx="auto"
              />
            </Box>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/samsungTv-removebg-preview.png?raw=true"
              alt="tv"
              w={{ base: "100%", md: "60%" }}
              maxW="400px"
            />
          </Flex>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box
            w={{ base: "100%", md: "50%" }}
            bgImage="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            backgroundSize="cover"
            height="280px"
            borderRadius={8}
            p={5}
            color="white"
          >
            <Heading size="md">Budget friendly furniture</Heading>
            <Link>
              <u>Shop now</u>
            </Link>
            <Text mt={4}>From</Text>
            <Heading size="lg">
              <sup>$</sup>78
            </Heading>
          </Box>

          <Box
            w={{ base: "100%", md: "50%" }}
            bg="#FDE77F"
            borderRadius={8}
            p={5}
            boxShadow="sm"
          >
            <Text fontSize={20} fontWeight="bold">
              Up to 40% off
            </Text>
            <Flex
              direction={{ base: "column", sm: "row" }}
              alignItems="center"
              gap={4}
            >
              <Box>
                <Link>
                  <u>Shop now</u>
                </Link>
                <Heading mt={4} size="lg">
                  Flase Deals
                </Heading>
              </Box>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/lamp-removebg-preview.png?raw=true"
                alt="lamp"
                w="100%"
                maxW="150px"
              />
            </Flex>
          </Box>
        </Flex>

        <Box bg="#FFC21F" borderRadius={8} p={5} mt={6}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize={20} fontWeight="semibold">
                Enjoy Free Same-day delivery low prices!
              </Text>
              <Text fontSize={14}>Apply terms</Text>
              <Link>
                <u>Join Walmart+</u>
              </Link>
            </Box>
            <Box
              mt={{ base: 4, sm: 0 }}
              bg="white"
              color="#0170DA"
              borderLeftRadius={50}
              px={4}
              py={2}
            >
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/walmartlogo.png?raw=true"
                maxW="120px"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Right Column */}
      <Box
        w={{ base: "100%", lg: "20%" }}
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Box bg="#E7EDF6" borderRadius={8} p={5} boxShadow="sm">
          <Text fontSize={22} fontWeight="bold">
            Save on personal care
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mt={2}>
            <Link>
              <u>Shop now</u>
            </Link>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/savingss-removebg-preview.png?raw=true"
              w="50%"
            />
          </Flex>
        </Box>

        <Box bg="#FEEABF" borderRadius={8} p={5} boxShadow="sm">
          <Text fontSize={18} fontWeight="bold">
            Apple savings up to $150 off
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mt={2}>
            <Link>
              <u>Shop now</u>
            </Link>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/smartphone2-removebg-preview.png?raw=true"
              w="50%"
            />
          </Flex>
        </Box>

        <Box
          height="350px"
          bg="#A5CBEE"
          borderRadius={8}
          overflow="hidden"
          boxShadow="sm"
        >
          <Image
            src="https://github.com/B2Kumar03/homepageImage/blob/main/wholeContent.png?raw=true"
            alt="image"
            h="100%"
            w="100%"
            objectFit="cover"
            cursor="pointer"
          />
        </Box>
      </Box>
    </Stack>
  );
};
