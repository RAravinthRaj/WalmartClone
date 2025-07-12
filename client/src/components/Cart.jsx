import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AuthContext } from "../AuthContext/AuthProvider";

export const Cart = () => {
  const { setCart, auth, counter, count, totalPrice, calculatePrice } =
    useContext(AuthContext);

  useEffect(() => {
    setCart();
    return setCart;
  }, [setCart]);

  return (
    <HStack
      w="100%"
      minH="100vh"
      align="start"
      flexDirection={{ base: "column", md: "row" }}
      spacing={0}
    >
      <Box w={{ base: "100%", md: "65%" }} px={4} mt={{ base: 4, md: 20 }}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize={{ base: "2xl", md: "3xl" }}>Cart</Heading>
          <Text fontSize={{ base: "sm", md: "lg" }}>({count} item)</Text>
        </Flex>

        <Accordion allowToggle border="0px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" textAlign="left" flex="1">
                  <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                    Pickup and delivery options
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex
                direction={{ base: "column", sm: "row" }}
                wrap="wrap"
                gap={4}
              >
                {/* Shipping */}
                <Box
                  flex="1"
                  minW="200px"
                  h={100}
                  border="1px solid #ccc"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-71e5/k2-_c68396aa-eafa-422b-ac41-0df7142d29cb.v1.svg"
                    h="30px"
                  />
                  <Text fontSize="xs" color="#ccc">
                    Shipping
                  </Text>
                  <Text fontSize="xs" color="#ccc">
                    Not Available
                  </Text>
                </Box>

                {/* Pickup */}
                <Box
                  flex="1"
                  minW="200px"
                  h={100}
                  border="1px solid black"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg"
                    h="30px"
                  />
                  <Text fontSize="xs">Pickup</Text>
                  <Text fontSize="xs" color="#ccc">
                    Available
                  </Text>
                </Box>

                {/* Delivery */}
                <Box
                  flex="1"
                  minW="200px"
                  h={100}
                  border="1px solid #ccc"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Image
                    src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-delivery.svg"
                    h="30px"
                  />
                  <Text fontSize="xs" color="#ccc">
                    Delivery
                  </Text>
                  <Text fontSize="xs" color="#ccc">
                    Available
                  </Text>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box mt={6} borderRadius={8} bg="#F2F8FD" p={4} className="cart2">
          <Flex align="center">
            <Image
              src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg"
              h="30px"
            />
            <Text ml={4} fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
              Shipping, arrives by Tue, Mar 5 <br />
              <u>95829</u>
            </Text>
          </Flex>
        </Box>

        <Box mt={4} p={4} className="cart2" borderRadius={8}>
          <Text mb={2}>
            Sold by <u>eCosmetics</u>
          </Text>
          <Text fontWeight="bold">Fulfilled by Walmart</Text>
          <Button fontSize="xs" h={6} mt={3} color="#0071DC">
            Best seller
          </Button>

          <Flex justify="flex-end" mt={4}>
            <Text fontWeight="bold" fontSize="lg" color="green">
              Total: ${totalPrice}
            </Text>
          </Flex>

          <Flex justify="flex-end" mt={4} gap={4} align="center">
            <Button borderRadius="full" fontSize="md">
              -
            </Button>
            <Text>{count}</Text>
            <Button borderRadius="full">+</Button>
          </Flex>
        </Box>

        <Box mt={8} p={6} className="cart2" borderRadius={8}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Recommended with your order
          </Text>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-evenly"
            gap={4}
          >
            <Box>
              <Flex justify="flex-end">
                <Circle>
                  <CiHeart />
                </Circle>
              </Flex>
              <Box h="150px" mt={2}>
                <Image
                  src="https://i5.walmartimages.com/seo/Kristin-Ess-Hair-Deep-Clean-Clarifying-Shampoo-for-Build-Up-Dirt-Detox-Oily-Hair-10oz_a4d0c569-a548-439f-a988-ee187bec377a.b9e33e272e58ee5c6e49bd805935c924.jpeg"
                  h="100%"
                  objectFit="contain"
                  alt="product"
                />
              </Box>
              <Text fontSize="xs" mt={2}>
                Sponsored
              </Text>
              <Text fontWeight="bold" fontSize="md">
                $16.99
              </Text>
              <Text fontSize="sm">
                Electric shaver for Men & Women, Rechargeable...
              </Text>
              <Button
                border="1px solid black"
                borderRadius="full"
                mt={2}
                bg="white"
                onClick={() => {
                  counter();
                  calculatePrice(16.99);
                }}
              >
                <GoPlus /> Add
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        w={{ base: "100%", md: "35%" }}
        px={4}
        mt={{ base: 6, md: 20 }}
        className="cart2"
        p={6}
        borderRadius="2xl"
      >
        <ChakraLink
          as={ReactRouterLink}
          to={auth ? "/product/checkout" : "/account/signUp"}
          _hover={{ textDecoration: "none" }}
        >
          <Button w="100%" bg="#004F9A" color="white" borderRadius="xl">
            Continue to checkout
          </Button>
        </ChakraLink>
        <Text textAlign="center" mt={3}>
          For the best shopping experience <u>sign in</u>
        </Text>
        <hr style={{ margin: "1rem 0" }} />

        <Box>
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">Subtotal ({count} item)</Text>
            <Text fontWeight="bold" color="green">
              ${totalPrice}
            </Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">Savings</Text>
            <Text fontWeight="bold" color="green">
              $0.00
            </Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Box />
            <Text fontWeight="bold" color="green">
              $0.00
            </Text>
          </Flex>
          <hr style={{ margin: "1rem 0" }} />
          <Flex justify="space-between" mb={2}>
            <Text>Shipping (below $35 minimum)</Text>
            <Text>$0.00</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">Taxes</Text>
            <Text>Calculated at checkout</Text>
          </Flex>
          <hr style={{ margin: "1rem 0" }} />
          <Flex justify="space-between" mt={2}>
            <Text fontWeight="bold">Estimated total</Text>
            <Text fontWeight="bold" color="green">
              ${totalPrice}
            </Text>
          </Flex>
        </Box>
      </Box>
    </HStack>
  );
};
