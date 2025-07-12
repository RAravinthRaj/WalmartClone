import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import pro from "../assets/pro.png";
import beautyfulGirl from "../assets/beautyfulGirl.png";

const Product3 = () => {
  return (
    <Box px={{ base: 4, md: 8 }} mt={10}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        gap={6}
      >
        {/* Left Panel */}
        <Box flex={1} bg="#C7D9F5" borderRadius="xl" p={6}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box>
              <Text fontSize={{ base: "6xl", md: "8xl" }} fontWeight="bold">
                New
              </Text>
              <Text
                fontSize={{ base: "4xl", md: "6xl" }}
                mt={-4}
                fontWeight="bold"
              >
                arrivals
              </Text>
              <Text fontSize="md">Beauty, home & more.</Text>
              <Button
                borderRadius="full"
                mt={5}
                border="1px solid black"
                bg="white"
                _hover={{ bg: "gray.100" }}
              >
                Shop now
              </Button>
            </Box>
            <Flex ml={{ base: 0, md: 10 }} direction="column" justify="center">
              {[
                "https://i5.walmartimages.com/seo/4U-by-Tia-MultiUse-Hair-Oil-with-Vitamin-E-and-Hemi15-2-fl-oz_fb665a23-26d9-4a36-8f5b-af36a4a779e5.d097bc6e1db37bee6bdd2d5bcbdff4ab.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
                "https://i5.walmartimages.com/seo/Better-Homes-Gardens-18oz-Salted-Coconut-Mahogany-Scented-2-Wick-Frosted-Bell-Jar-Candle_9b82bc19-7273-4921-b3c1-51fc7a24afea.758809ac46f1e009b78175c4387412b9.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
                "https://i5.walmartimages.com/seo/Mainstays-16-x-16-Reversible-Daisy-Truck-Decorative-Throw-Pillow-Navy_6ade7ddc-9483-4030-b4d0-0c4d2ad208e1.1c72ddf2dc8210daba0586ece975aa21.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
              ].map((src, i) => (
                <Image key={i} src={src} w="60%" borderRadius="lg" mt={4} />
              ))}
            </Flex>
          </Flex>
        </Box>

        {/* Middle Panel */}
        <Box flex={0.75} display="flex" flexDirection="column" gap={6}>
          <Box bg="#C4D6E9" borderRadius="xl" p={4}>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold" fontSize="md">
                  The Latest trends style
                </Text>
                <Link>
                  <Text textDecor="underline">Shop now</Text>
                </Link>
              </Box>
              <Image src={beautyfulGirl} w="75px" borderRadius="lg" />
            </Flex>
          </Box>

          <Flex justify="space-between" gap={4}>
            <Box
              flex={1}
              bgImage="url('https://i5.walmartimages.com/asr/16796e88-c063-4493-94fa-d266f2cb4a80.e8422cb90e33978e365f470b7c1300fa.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF')"
              bgSize="cover"
              bgPos="center"
              borderRadius="xl"
              p={4}
            >
              <Text fontWeight="bold" fontSize="md" color="white">
                Seasonal home scents
              </Text>
              <Link>
                <Text textDecor="underline" color="white">
                  Shop now
                </Text>
              </Link>
            </Box>

            <Box flex={1} bg="#86ADE4" borderRadius="xl" p={4}>
              <Text fontWeight="bold" fontSize="md">
                Seasonal home scents
              </Text>
              <Link>
                <Text textDecor="underline">Shop now</Text>
              </Link>
              <Image src={pro} w="80%" mt={4} borderRadius="md" />
            </Box>
          </Flex>
        </Box>

        {/* Right Panel */}
        <Box flex={0.65} bg="#DCDDE3" borderRadius="xl" p={4}>
          <Text fontSize="sm">Window curtains</Text>
          <Text fontSize="xl" fontWeight="bold">
            Just in: easy updates
          </Text>
          <Link>
            <Text textDecor="underline">Shop now</Text>
          </Link>
          <Image
            src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Boucle-Blackout-Curtain-Panel-50-x-84-Black_386324c6-b25f-4012-a884-01277853b983.d3e204cdaacf43934614ad46a4771c8c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
            mt={4}
            borderRadius="md"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Product3;
