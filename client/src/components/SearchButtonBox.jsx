import { Button, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const SearchButtonBox = () => {
  const navigate = useNavigate();

  return (
    <Button
      w="100%"
      maxW="300px"
      mx="auto"
      h="50px"
      colorScheme="blue"
      display="flex"
      alignItems="center"
      gap={2}
      bg="blue.500"
      _hover={{
        bg: "blue.600",
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
      _active={{
        transform: "translateY(0px)",
        boxShadow: "md",
      }}
      transition="all 0.2s ease"
      onClick={() => navigate("/product/search")}
    >
      <Icon as={FiSearch} w={4} h={4} />
      <Text>Search Products</Text>
    </Button>
  );
};

export default SearchButtonBox;
