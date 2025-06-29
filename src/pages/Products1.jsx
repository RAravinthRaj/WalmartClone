import {
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const products = [
  {
    img: "https://i5.walmartimages.com/seo/Electric-Shaver-Men-Women-4-1-Rechargeable-Razor-Waterproof-Painless-Epilator-Nose-Hair-Removal-Remover-Facial-Body-Bikini-Eyebrow-Beard-Sideburn-Mus_048f2612-82aa-400b-9169-567099c8e89c.f2dec29f5c99bab88dd706023c55419a.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    img: "https://i5.walmartimages.com/seo/KingSo-22-inch-Wood-Burning-Fire-Pit-Camping-Picnic-Bonfire-Patio-Outside-Backyard-Garden-Small-Steel-Firepit-Bowl-Spark-Screen-Log-Grate-Poker_fa1c9c62-d182-468b-8f17-6624ac721b3e.d317b2c08cf5ba62ca1c48cb4efb76f1.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    img: "https://i5.walmartimages.com/seo/LEGO-Speed-Champions-2-Fast-Furious-Nissan-Skyline-GT-R-R34-76917-Race-Car-Toy-Model-Building-Kit-Collectible-Racer-Minifigure-2023-Set-Kids_1078c4bd-27ad-49f8-8757-7336d6887d69.587429381fb543fdf9f69cf12c616532.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    img: "https://i5.walmartimages.com/seo/LEGO-Classic-LEGO-Medium-Creative-Brick-Box-10696_f7af88f3-04c1-4c77-8237-e5cccc466ab4.2422f9b4d28481d4ffbc684d1357be85.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    img: "https://i5.walmartimages.com/seo/Fisher-Price-Laugh-Learn-Wake-Up-Learn-Coffee-Mug-Baby-Toddler-Toy-with-Music-Lights_04856f59-6129-4e43-aa3f-ff839bc67fab.93bc2a4f8cee212664e7434f55c1b091.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  },
  {
    img: "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    isLast: true,
  },
];

const Products1 = () => {
  const { counter, calculatePrice } = useContext(AuthContext);
  const { setDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box px={{ base: 4, md: 10 }} mt={8}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        gap={6}
      >
        {products.map((product, i) => (
          <Box
            key={i}
            className="product"
            borderRadius={8}
            p={4}
            bg="white"
            boxShadow="md"
            onClick={() => navigate("/product/details")}
            cursor="pointer"
          >
            {/* Favorite Icon */}
            <Flex justify="flex-end" fontSize="24px">
              <Circle size="32px" bg="gray.100">
                <CiHeart />
              </Circle>
            </Flex>

            {/* Product Image */}
            <Box h="160px" mb={3}>
              <Image
                src={product.img}
                alt={`product-${i}`}
                objectFit="contain"
                h="100%"
                mx="auto"
              />
            </Box>

            {/* Product Info */}
            <Text fontSize="12px" color="gray.600">
              Sponsored
            </Text>

            <Flex fontSize="18px" align="center" mt={1} mb={1}>
              <Text color="green" fontWeight="bold">
                Now $16.99
              </Text>
              <RxCross2 fontSize={24} style={{ margin: "0 4px" }} />
              <Text ml={-2} color="gray.600">
                $52.99
              </Text>
            </Flex>

            <Text fontSize="14px" noOfLines={2} mb={2}>
              Electric shaver for Men & Women, Rechargeable...
            </Text>

            {/* Add Button */}
            <Button
              size="sm"
              border="1px solid black"
              borderRadius="full"
              bg="white"
              onClick={(e) => {
                e.stopPropagation();
                counter();
                calculatePrice(16.99);
              }}
              leftIcon={<GoPlus />}
            >
              Add
            </Button>

            {/* Show arrow only on last card */}
            {product.isLast && (
              <Flex justify="flex-end" mt={3}>
                <Button
                  size="sm"
                  border="1px solid black"
                  borderRadius="full"
                  fontSize="20px"
                >
                  <LiaGreaterThanSolid />
                </Button>
              </Flex>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products1;
