import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGridOutline } from "react-icons/io5";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { Search2Icon } from "@chakra-ui/icons";
import { CiHeart } from "react-icons/ci";
import { BiLogIn, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { VscServerProcess } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import SideNavbar from "./SideNavbar";
import Searchmenu from "./Searchmenu";
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {
  const {
    name,
    auth,
    setAuth,
    setName,
    handleChange,
    handleSearch,
    count,
    totalPrice,
    signOut,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerState, setDrawerState] = useState(false);

  return (
    <HStack w="100%">
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        p={2}
        bg="#0071DC"
        color="white"
        wrap="wrap"
      >
        {/* Hamburger + Mobile Logo */}
        <Flex display={{ base: "flex", lg: "none" }} align="center" gap={2}>
          <RxHamburgerMenu
            onClick={() => {
              setDrawerState(!drawerState);
              drawerState ? onClose() : onOpen();
            }}
            size={24}
          />
          <SideNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
            w="100px"
          />
        </Flex>

        {/* Desktop Logo */}
        <Box display={{ base: "none", lg: "block" }} p={3}>
          <Image
            src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
            alt="logo"
          />
        </Box>

        {/* Department Menu */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={2}>
          <IoGridOutline />
          <Menu>
            <MenuButton px={3}>Departments</MenuButton>
            <MenuList color="black">
              <MenuItem>All Departments</MenuItem>
              <MenuDivider />
              <MenuItem>Deals</MenuItem>
              <MenuItem>Grocery</MenuItem>
              <MenuItem>Home, Garden & Tools</MenuItem>
              {/* Add more as needed */}
            </MenuList>
          </Menu>
        </Box>

        {/* Services Menu */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={2}>
          <BsUiRadiosGrid />
          <Menu>
            <MenuButton px={3}>Services</MenuButton>
            <MenuList color="black">
              <MenuItem>All Services</MenuItem>
              <MenuDivider />
              <MenuItem>Auto Care</MenuItem>
              <MenuItem>Pharmacy</MenuItem>
              <MenuItem>Photo</MenuItem>
              {/* Add more as needed */}
            </MenuList>
          </Menu>
        </Box>

        {/* Search Bar */}
        <Box w={{ base: "100%", lg: "30%" }} my={2}>
          <InputGroup bg="white" borderRadius="20px">
            <Input
              placeholder="Search everything at Walmart"
              fontSize="sm"
              onChange={(e) => setSearchValue(e.target.value)}
              bg="white"
              color="black"
              borderRadius="20px"
            />
            <InputRightElement width="3rem">
              <Circle
                size="40px"
                bg="#FFC326"
                color="white"
                cursor="pointer"
                onClick={() => {
                  handleSearch(searchValue);
                  navigate(`/product/${searchValue}`);
                }}
              >
                <Search2Icon />
              </Circle>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* Wishlist */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={2}>
          <CiHeart />
          <Box ml={2}>
            <Text fontSize="xs" color="#ccc">
              Recorder
            </Text>
            <Text fontWeight="bold">My Items</Text>
          </Box>
        </Box>

        {/* Account */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={2}>
          <Menu>
            <MenuButton>
              <Flex align="center">
                <BiUser />
                <Box ml={2}>
                  <Text fontSize="xs" color="#ccc">
                    {auth ? `Hi, ${name}` : "Sign In"}
                  </Text>
                  <Text fontWeight="bold">Account</Text>
                </Box>
              </Flex>
            </MenuButton>
            <MenuList p={4} color="black">
              {!auth && (
                <>
                  <Button
                    w="100%"
                    bg="#004F9A"
                    color="white"
                    borderRadius="20px"
                    as={ReactRouterLink}
                    to="/account/signUp"
                  >
                    Sign in / Create Account
                  </Button>
                  <MenuDivider />
                </>
              )}
              <MenuItem
                icon={<BiLogIn />}
                onClick={() => navigate("/account/login")}
              >
                Login
              </MenuItem>
              <MenuItem icon={<RiHistoryFill />}>Purchase History</MenuItem>
              <MenuItem icon={<VscServerProcess />}>Walmart +</MenuItem>
              {auth && (
                <MenuItem icon={<IoIosLogOut />} onClick={signOut}>
                  Sign Out
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>

        {/* Cart */}
        <ChakraLink
          as={ReactRouterLink}
          to="/home/cart"
          _hover={{ textDecoration: "none" }}
        >
          <Flex align="center" px={3}>
            <Box
              bg="#FFC326"
              color="black"
              borderRadius="full"
              w="20px"
              h="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
              mr={1}
            >
              {count}
            </Box>
            <BsCart2 size={20} />
            <Text fontSize="xs" ml={1}>
              ${totalPrice}
            </Text>
          </Flex>
        </ChakraLink>
      </Flex>

      {/* Sticky Search Suggestions */}
      <Searchmenu />
    </HStack>
  );
};

export default Navbar;
