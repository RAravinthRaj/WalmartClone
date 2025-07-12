import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Circle,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  Badge,
  Heading,
  Fade,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { IoAddSharp } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import { searchFilteredProducts } from "../api/filterApi";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filterPrompt, setFilterPrompt] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");

  const fetchProducts = async () => {
    const query = searchQuery.trim();
    const context = filterPrompt.trim();

    setLoading(true);
    try {
      const results = await searchFilteredProducts(query, context);
      setProducts(results || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const sortByRating = () => {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  };

  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  return (
    <Box
      px={{ base: 4, md: 10 }}
      pt={10}
      pb={20}
      bgGradient="linear(to-b, white, gray.50)"
    >
      <Heading size="lg" mb={6} textAlign="center" color="teal.500">
        Search Products in WallMart
      </Heading>

      {/* Filter Inputs */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={6}
        mb={8}
        flexWrap="wrap"
      >
        <InputGroup maxW="320px">
          <Input
            placeholder="Enter a filter (e.g., diabetic-friendly)"
            value={filterPrompt}
            onChange={(e) => setFilterPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchProducts()}
            bg="white"
            borderRadius="xl"
            pr="3rem"
            boxShadow="md"
          />
          <InputRightElement width="3rem">
            <Circle
              size="36px"
              bg="blue.500"
              color="white"
              cursor="pointer"
              onClick={fetchProducts}
              boxShadow="lg"
              _hover={{ transform: "scale(1.1)" }}
            >
              <FiFilter size="18px" />
            </Circle>
          </InputRightElement>
        </InputGroup>

        <InputGroup maxW="320px">
          <Input
            placeholder="Search category or item name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchProducts()}
            bg="white"
            borderRadius="xl"
            pr="3rem"
            boxShadow="md"
          />
          <InputRightElement width="3rem">
            <Circle
              size="36px"
              bg="teal.500"
              color="white"
              cursor="pointer"
              onClick={fetchProducts}
              boxShadow="lg"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Search2Icon />
            </Circle>
          </InputRightElement>
        </InputGroup>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="white"
            borderRadius="xl"
            border="1px solid #ccc"
            boxShadow="md"
            _hover={{ bg: "gray.50" }}
          >
            Sort by
          </MenuButton>
          <MenuList>
            <MenuItem onClick={sortByPrice}>Price (Low to High)</MenuItem>
            <MenuItem onClick={sortByRating}>Rating (High to Low)</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box w="100%" h="1px" bg="gray.200" mb={10} />

      {isLoading ? (
        <Stack mt={4} px={4} spacing={6} align="center">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <Skeleton key={i} height="220px" width="90%" borderRadius="lg" />
            ))}
        </Stack>
      ) : products.length === 0 ? (
        <Box textAlign="center" mt={10}>
          <Text fontSize="lg" color="gray.500">
            No products found matching your filter.
          </Text>
        </Box>
      ) : (
        <Fade in>
          <Grid
            templateColumns={{
              base: "repeat(auto-fill, minmax(200px, 1fr))",
              md: "repeat(auto-fill, minmax(220px, 1fr))",
            }}
            gap={8}
            justifyContent="center"
          >
            {products.map((item) => (
              <Box
                key={item.id}
                bg={cardBg}
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="2xl"
                p={4}
                textAlign="center"
                boxShadow="lg"
                _hover={{
                  boxShadow: "xl",
                  transform: "translateY(-5px) scale(1.04)",
                }}
                transition="all 0.3s ease-in-out"
              >
                <Image
                  src={item?.image}
                  mx="auto"
                  w={120}
                  h={120}
                  objectFit="cover"
                  mb={3}
                  borderRadius="lg"
                  boxShadow="md"
                />
                <Badge
                  fontSize="0.7em"
                  colorScheme="purple"
                  variant="solid"
                  borderRadius="full"
                  mb={1}
                >
                  {item.category}
                </Badge>
                <Box>
                  <Text fontWeight="bold" noOfLines={2} mt={1} fontSize="md">
                    {item.name}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="sm" color="gray.600" noOfLines={2} mt={1}>
                    {item.description}
                  </Text>
                </Box>
                <Text fontSize="sm" color="orange.400" mt={1}>
                  ⭐ {item.rating ?? "N/A"}
                </Text>
                <Text
                  fontWeight="semibold"
                  mt={1}
                  fontSize="md"
                  color="green.600"
                >
                  ${item.price}
                </Text>
                <Button
                  mt={3}
                  size="sm"
                  borderRadius="full"
                  leftIcon={<IoAddSharp />}
                  colorScheme="teal"
                  variant="solid"
                  _hover={{ bg: "teal.600" }}
                >
                  Add
                </Button>
              </Box>
            ))}
          </Grid>
        </Fade>
      )}
    </Box>
  );
};

export default SearchProduct;
