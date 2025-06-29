import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const ProductDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

  if (loading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        {[...Array(6)].map((_, i) => (
          <SkeletonText
            key={i}
            mt="4"
            noOfLines={4}
            spacing="4"
            skeletonHeight="2"
          />
        ))}
      </Box>
    );
  }

  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Box fontSize="xl" fontWeight="bold" mb={2}>
        Product Name
      </Box>
      <Box mb={2}>This is a product description shown after loading.</Box>
      <Box fontSize="lg" fontWeight="semibold" color="green.500">
        $29.99
      </Box>
    </Box>
  );
};
