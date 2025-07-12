import { Box, Image, Text, Wrap, WrapItem, VStack } from "@chakra-ui/react";
import React from "react";

const categories = [
  {
    label: "Grocery",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Fashion",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Electronics",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Home",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Patio & Garden",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Home Improvement",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Baby",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Toys",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Health & Wellness",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-db33/k2-_76752a43-1765-455e-85d2-16a450d8ff5a.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
  {
    label: "Beauty",
    image:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-5ae9/k2-_d40ab856-ee32-437c-9a44-c9b93df4aff0.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
  },
];

export const Product6 = () => {
  return (
    <Box mt={10} px={{ base: 4, md: 10 }}>
      <Wrap spacing={6} justify="center">
        {categories.map((cat, i) => (
          <WrapItem key={i}>
            <VStack spacing={2}>
              <Image
                src={cat.image}
                alt={cat.label}
                boxSize={{ base: "80px", md: "100px", lg: "120px" }}
                objectFit="contain"
                borderRadius="full"
              />
              <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
                {cat.label}
              </Text>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
