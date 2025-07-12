import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  useToast,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { searchFilteredProducts } from "../api/filterApi";

export const Checkout = () => {
  const { setSign, auth, counter, count, totalPrice, calculatePrice } =
    useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { safeProducts } = await searchFilteredProducts("snacks");
        setRecommended(safeProducts.slice(0, 1));
      } catch (err) {
        console.error("Recommendation error:", err);
      }
    })();
  }, []);

  return (
    <VStack spacing={0} align="stretch" w="100%">
      <Box
        bg="#004F9A"
        w="100%"
        py={6}
        textAlign="center"
        fontSize="xl"
        color="white"
        className="roboto-bold"
      >
        Checkout
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        w="90%"
        mx="auto"
        mt={10}
        align="start"
      >
        {/* Left Section */}
        <Box w={{ base: "100%", md: "65%" }}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text
                      fontSize={{ base: "lg", md: "2xl" }}
                      fontWeight="bold"
                    >
                      Pickup and delivery options
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Wrap spacing={4} overflowX="auto">
                  {["Shipping", "Pickup", "Delivery"].map((label, idx) => (
                    <WrapItem key={idx}>
                      <Box
                        w="200px"
                        h="100px"
                        border={`1px solid ${
                          label === "Pickup" ? "black" : "#ccc"
                        }`}
                        borderRadius="md"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          src={`https://i5.walmartimages.com/dfw/63fd9f59-1b5e/$
                            {
                              label === "Shipping"
                                ? "k2-_c68396aa-eafa-422b-ac41-0df7142d29cb.v1.svg"
                                : label === "Pickup"
                                ? "5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg"
                                : "5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-delivery.svg"
                            }
                          `}
                          h="30px"
                          mb={1}
                        />
                        <Text fontSize="xs" color="#666">
                          {label}
                        </Text>
                        <Text fontSize="xs" color="#ccc">
                          {label === "Shipping" ? "Not Available" : "Available"}
                        </Text>
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Shipping Address */}
          <Box mt={6} borderRadius="md" className="cart2">
            <Box bg="#F2F8FD" p={4} borderRadius="md">
              <Flex align="center">
                <Image
                  src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg"
                  h="30px"
                />
                <Text fontSize="md" ml={4} fontWeight="bold">
                  Shipping, arrives by Tue, Mar 5 <br />
                  <u>95829</u>
                </Text>
              </Flex>

              <Box mt={6}>
                <Text fontSize="sm" fontWeight="bold">
                  Address (line 1)
                </Text>
                <Input border="1px solid black" mt={1} h="40px" w="100%" />

                <Text fontSize="sm" fontWeight="bold" mt={4}>
                  Address (line 2)
                </Text>
                <Input border="1px solid black" mt={1} h="40px" w="100%" />
              </Box>
            </Box>
          </Box>

          {/* Recommended */}
          {recommended.length > 0 && (
            <Box mt={10} p={5} className="cart2" borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                Recommended with your order
              </Text>
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-around"
                gap={6}
              >
                {recommended.map((product, i) => (
                  <Box key={i}>
                    <Flex justify="flex-end">
                      <Circle>
                        <CiHeart />
                      </Circle>
                    </Flex>
                    <Box h="200px" my={2}>
                      <Image
                        src="https://via.placeholder.com/150"
                        alt={product}
                        h="100%"
                        objectFit="contain"
                      />
                    </Box>
                    <Text fontSize="xs" color="gray.500">
                      Sponsored
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      $16.99
                    </Text>
                    <Text fontSize="sm">{product}</Text>
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
                      <GoPlus /> &nbsp;Add
                    </Button>
                  </Box>
                ))}
              </Flex>
            </Box>
          )}
        </Box>

        {/* Right Section */}
        <Box
          w={{ base: "100%", md: "35%" }}
          className="cart2"
          p={6}
          borderRadius="2xl"
          mt={{ base: 4, md: 0 }}
        >
          <Button
            w="100%"
            bg="#004F9A"
            color="white"
            borderRadius="lg"
            onClick={() => {
              const examplePromise = new Promise((resolve) => {
                setTimeout(() => {
                  navigate("/");
                  resolve(200);
                }, 5000);
              });

              toast
                .promise(examplePromise, {
                  success: {
                    title: "Order placed successfully.",
                    description: "Thank you.",
                  },
                  error: {
                    title: "Promise rejected",
                    description: "Something went wrong",
                  },
                  loading: {
                    title: "Placing order...",
                    description: "Please wait",
                  },
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          >
            Place order
          </Button>

          <Text textAlign="center" mt={4}>
            For the best shopping experience <u>sign in</u>
          </Text>

          <hr style={{ margin: "1rem 0" }} />

          <Box>
            <Flex justify="space-between">
              <Text fontWeight="bold">Subtotal ({count} item)</Text>
              <Text fontWeight="bold" color="green">
                ${totalPrice}
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontWeight="bold">Savings</Text>
              <Text fontWeight="bold" color="green">
                $0.00
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Shipping (below $35 minimum)</Text>
              <Text>$0.00</Text>
            </Flex>
            <Flex justify="space-between" mt={2}>
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
      </Stack>
    </VStack>
  );
};
