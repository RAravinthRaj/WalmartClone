import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import pro from "../assets/pro.png";
import beautyfulGirl from "../assets/beautyfulGirl.png";

const Product7 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box px={{ base: 4, md: 10 }} mt={10}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-evenly"
        gap={6}
        wrap="wrap"
      >
        {/* Left Section */}
        <Box
          w={{ base: "100%", lg: "50%" }}
          bg="#3A617B"
          borderRadius={8}
          p={5}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={4}
          >
            <VStack align="start" spacing={4}>
              <Text
                fontSize={{ base: "60px", md: "120px", lg: "200px" }}
                lineHeight={1}
                color="white"
              >
                New
              </Text>
              <Text
                fontSize={{ base: "40px", md: "60px", lg: "100px" }}
                mt={-5}
                color="white"
              >
                arrivals
              </Text>
              <Text fontSize="20px" color="white">
                Beauty, home & more.
              </Text>
              <Button
                border="1px solid white"
                borderRadius={20}
                mt={2}
                color="white"
              >
                Shop now
              </Button>
            </VStack>
            <VStack spacing={5}>
              <Image
                src="https://i5.walmartimages.com/seo/4U-by-Tia-MultiUse-Hair-Oil-with-Vitamin-E-and-Hemi15-2-fl-oz_fb665a23-26d9-4a36-8f5b-af36a4a779e5.d097bc6e1db37bee6bdd2d5bcbdff4ab.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                w="90px"
                borderRadius={8}
              />
              <Image
                src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-18oz-Salted-Coconut-Mahogany-Scented-2-Wick-Frosted-Bell-Jar-Candle_9b82bc19-7273-4921-b3c1-51fc7a24afea.758809ac46f1e009b78175c4387412b9.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                w="90px"
                borderRadius={8}
              />
              <Image
                src="https://i5.walmartimages.com/seo/Mainstays-16-x-16-Reversible-Daisy-Truck-Decorative-Throw-Pillow-Navy_6ade7ddc-9483-4030-b4d0-0c4d2ad208e1.1c72ddf2dc8210daba0586ece975aa21.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
                w="90px"
                borderRadius={8}
              />
            </VStack>
          </Flex>
        </Box>

        {/* Middle Section */}
        <Box w={{ base: "100%", md: "75%", lg: "24%" }}>
          <Box w="100%" minH="250px" bg="#C4D6E9" borderRadius={8} p={4} mb={4}>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontSize="17px" className="roboto-bold">
                  The Latest trends style
                </Text>
                <Link>
                  <u>Shop now</u>
                </Link>
              </Box>
              <Box>
                <Image src={beautyfulGirl} w="75%" />
              </Box>
            </Flex>
          </Box>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={4}
            justify="space-between"
          >
            <Box
              flex="1"
              minH="240px"
              bgImage="url(https://i5.walmartimages.com/asr/16796e88-c063-4493-94fa-d266f2cb4a80.e8422cb90e33978e365f470b7c1300fa.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF)"
              backgroundSize="cover"
              borderRadius={8}
              p={4}
            >
              <Text fontSize="20px" className="roboto-bold" color="white">
                Seasonal home scents
              </Text>
              <Link>
                <u>Shop now</u>
              </Link>
            </Box>

            <Box flex="1" bg="#86ADE4" borderRadius={8} p={4}>
              <Text fontSize="20px" className="roboto-bold">
                Seasonal home scents
              </Text>
              <Link>
                <u>Shop now</u>
              </Link>
              <Box mt={3}>
                <Image src={pro} w="80%" />
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* Right Section */}
        <Box
          w={{ base: "100%", lg: "20%" }}
          bg="#DCDDE3"
          borderRadius={8}
          p={4}
        >
          <Text fontSize="md" mb={2}>
            Window curtains
          </Text>
          <Text fontSize="xl" className="roboto-bold">
            Just in: easy updates
          </Text>
          <Link>
            <u>Shop now</u>
          </Link>
          <Box mt={4}>
            <Image
              src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Boucle-Blackout-Curtain-Panel-50-x-84-Black_386324c6-b25f-4012-a884-01277853b983.d3e204cdaacf43934614ad46a4771c8c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              borderRadius={8}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product7;
