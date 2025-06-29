import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const SingleProductPage = () => {
  const product = {
    title: "Kristin Ess Hair Deep Clean Clarifying Shampoo",
    brand: "Kristin Ess",
    price: 16.99,
    image:
      "https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg?odnHeight=200&odnWidth=200&odnBg=FFFFFF",
    description:
      "A clarifying shampoo that removes product build-up and excess oil without stripping your hair.",
    rating: 4.6,
    reviews: 240,
  };

  return (
    <Box maxW="1200px" mx="auto" mt={10} px={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        {/* Left Image Panel */}
        <Box flex={1}>
          <Image src={product.image} alt={product.title} borderRadius="lg" />
        </Box>

        {/* Right Details Panel */}
        <Box flex={2}>
          <Heading fontSize="2xl">{product.title}</Heading>
          <Text mt={2} color="gray.600">
            by {product.brand}
          </Text>
          <Text mt={2}>
            ⭐ {product.rating} ({product.reviews} reviews)
          </Text>

          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            ${product.price.toFixed(2)}
          </Text>

          <Stack direction="row" mt={5}>
            <Select w="100px" defaultValue="1">
              {[1, 2, 3, 4, 5].map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </Select>
            <Button bg="#004F9A" color="white" borderRadius="full">
              Add to Cart
            </Button>
          </Stack>

          <Box mt={6}>
            <Heading fontSize="lg" mb={2}>
              About this item
            </Heading>
            <Text color="gray.700">{product.description}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProductPage;
