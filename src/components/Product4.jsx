import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";

const products = [
  {
    id: 1,
    price: 16.99,
    sponsored: true,
    title: "Electric shaver for Men",
    desc: "Women, for in Rechargeable...",
    image:
      "https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 2,
    price: 16.99,
    sponsored: true,
    title: "CeraVe SPF 50 Mineral Stick",
    desc: "For Sensitive Skin - Kids & Adults",
    image:
      "https://i5.walmartimages.com/seo/CeraVe-SPF-50-Face-Body-Mineral-Sunscreen-Stick-for-Sensitive-Skin-Kids-Adults-0-47-oz_7477ff50-6886-4ef3-a944-2e628423e47a.7d8a5ce533d3d1c9885fabfa09465e5f.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 3,
    price: 16.99,
    sponsored: false,
    title: "Tanned AF Intensifier Oil",
    desc: "Tanning oil for deeper bronze",
    image:
      "https://i5.walmartimages.com/seo/b-tan-tanned-AF-intensifier-tanning-oil-8-fl-0z_4997e399-34ad-4b01-b630-34258298e205.801cb944716fdeefefd8ce74c7f0948f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 4,
    price: 16.99,
    sponsored: true,
    title: "Bullfrog Mosquito Coast SPF50",
    desc: "Continuous Spray - 5.5oz",
    image:
      "https://i5.walmartimages.com/seo/Bullfrog-Mosquito-Coast-SPF50-Continuous-Spray-5-5oz_85c584f5-9c7b-4c0b-adea-d28a50898f3e.f797e3a24f34bfff71f99d6b7681a87c.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 5,
    price: 16.99,
    sponsored: false,
    title: "The Doux Heat Protectant Spray",
    desc: "Moisturizing Dry Oil - 4oz",
    image:
      "https://i5.walmartimages.com/seo/The-Doux-One-Press-Pass-Heat-Protectant-Dry-Oil-Spray-4-oz-Moisturizing-Unisex_4ae3c484-d00d-4bd5-a85c-678ea6fb3649.054dc0f4a1f2de322da87ce0ef285504.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    id: 6,
    price: 16.99,
    sponsored: false,
    title: "L'Oréal Panorama Mascara",
    desc: "Smudge Resistant - Blackest Black",
    image:
      "https://i5.walmartimages.com/seo/L-Oreal-Paris-Voluminous-Panorama-Smudge-Resistant-Mascara-Blackest-Black_8f9ce131-4c80-4666-8eff-3396ee4c0f12.1d9c85d7975f715edce5ae0a4c594bc2.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
];

const Product4 = () => {
  const { counter, calculatePrice } = useContext(AuthContext);

  return (
    <Box px={{ base: 4, md: 10 }} mt={10}>
      <Wrap spacing={6} justify="center">
        {products.map((item, index) => (
          <WrapItem
            key={item.id}
            w={{ base: "100%", sm: "45%", md: "30%", lg: "23%" }}
          >
            <Box border="1px solid #e2e8f0" p={4} borderRadius="xl" w="100%">
              <Flex justify="flex-end" fontSize="xl" mb={2}>
                <Circle size="32px" bg="gray.100">
                  <CiHeart />
                </Circle>
              </Flex>
              <Image
                src={item.image}
                alt={item.title}
                h="200px"
                w="100%"
                objectFit="contain"
                mb={3}
              />
              {item.sponsored && (
                <Text fontSize="xs" color="gray.500" mb={1}>
                  Sponsored
                </Text>
              )}
              <Text fontSize="lg" fontWeight="bold" mb={1}>
                ${item.price.toFixed(2)}
              </Text>
              <Text fontSize="sm" mb={3}>
                {item.title}
                <br />
                {item.desc}
              </Text>
              <Button
                size="sm"
                w="100%"
                leftIcon={<GoPlus />}
                onClick={() => {
                  counter();
                  calculatePrice(item.price);
                }}
                borderRadius="full"
                border="1px solid black"
                bg="white"
                _hover={{ bg: "gray.50" }}
              >
                Add
              </Button>

              {index === products.length - 1 && (
                <Flex justify="flex-end" mt={4}>
                  <Button
                    borderRadius="full"
                    border="1px solid black"
                    fontSize="xl"
                    p={2}
                    bg="white"
                  >
                    <LiaGreaterThanSolid />
                  </Button>
                </Flex>
              )}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Product4;
