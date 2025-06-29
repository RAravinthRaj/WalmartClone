import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AuthContext } from "../AuthContext/AuthProvider";

const SearchProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { search, counter, calculatePrice } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res =
          search === "smartphone"
            ? await axios.get(
                "https://dummyjson.com/products/category/smartphones"
              )
            : await axios.get(
                "https://fakestoreapi.com/products/category/jewelery"
              );

        setData(res.data.products || res.data); // handles both APIs
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const sortByRate = () => {
    const sorted = [...data].sort((a, b) => a.rating?.rate - b.rating?.rate);
    setData(sorted);
  };

  const sortByPrice = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  };

  if (isLoading) {
    return (
      <Stack mt={10} px={10}>
        {Array(10)
          .fill("")
          .map((_, i) => (
            <Skeleton key={i} height="20px" mb={2} />
          ))}
      </Stack>
    );
  }

  return (
    <>
      {/* Filter & Sort */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        mt={10}
        px={{ base: 4, md: 10 }}
        gap={4}
      >
        <HStack spacing={4} wrap="wrap">
          {[
            "Brand",
            "In Store",
            "Price",
            "Fulfillment Speed",
            "Subscription",
          ].map((label, idx) => (
            <Button key={idx} borderRadius="full">
              {label} <IoIosArrowDown />
            </Button>
          ))}
        </HStack>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="white"
            border="1px solid #ccc"
          >
            Sort by
          </MenuButton>
          <MenuList>
            <MenuItem onClick={sortByPrice}>Price</MenuItem>
            <MenuItem onClick={sortByRate}>Rating</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box w="100%" h="1px" bg="#ccc" mt={5} />

      {/* Products Grid */}
      <Flex
        wrap="wrap"
        justify="center"
        gap={6}
        mt={10}
        px={{ base: 4, md: 10 }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            border="1px solid #ccc"
            borderRadius="lg"
            w="200px"
            p={4}
            textAlign="center"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "scale(1.03)" }}
            transition="all 0.2s"
          >
            <Image
              src={item.image}
              alt={item.title}
              mx="auto"
              w={100}
              h={100}
              objectFit="contain"
            />
            <Text fontSize="sm" mt={2} color="gray.500">
              Category: {item.category}
            </Text>
            <Text fontWeight="bold" mt={1} noOfLines={2}>
              {item.title}
            </Text>
            <Text fontSize="sm">Rating: {item.rating?.rate || "-"}</Text>
            <Text fontWeight="semibold" mt={1}>
              ${item.price}
            </Text>
            <Button
              mt={3}
              size="sm"
              borderRadius="full"
              leftIcon={<IoAddSharp />}
              onClick={() => {
                counter();
                calculatePrice(item.price);
              }}
            >
              Add
            </Button>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default SearchProduct;
