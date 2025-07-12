import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoGridOutline } from "react-icons/io5";
import { BsUiRadiosGrid, BsCart2 } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { BiLogIn, BiUser } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import React, { useContext, useState } from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import Searchmenu from "./Searchmenu";
import SearchButtonBox from "./SearchButtonBox";
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {
  const { name, auth, count, totalPrice, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerState, setDrawerState] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <HStack w="100%" position="sticky" top={0} zIndex={1000}>
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        p={{ base: 2, lg: 4 }}
        bg="#0071DC"
        color="white"
        wrap="wrap"
        boxShadow="sm"
      >
        {/* Left - Hamburger + Logo */}
        <Flex align="center" gap={3}>
          {isMobile && (
            <>
              <RxHamburgerMenu
                onClick={() => {
                  setDrawerState(!drawerState);
                  drawerState ? onClose() : onOpen();
                }}
                size={24}
                cursor="pointer"
              />
              <SideNavbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </>
          )}
          <ReactRouterLink to="/">
            <Image
              src={
                isMobile
                  ? "https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
                  : "https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
              }
              w={isMobile ? "40px" : "140px"}
              alt="logo"
            />
          </ReactRouterLink>
        </Flex>

        {/* Department Menu */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={3}>
          <IoGridOutline />
          <Menu>
            <MenuButton
              px={3}
              fontWeight="semibold"
              _hover={{ color: "yellow.200" }}
            >
              Departments
            </MenuButton>
            <MenuList color="black">
              <MenuItem>All Departments</MenuItem>
              <MenuDivider />
              <MenuItem>Deals</MenuItem>
              <MenuItem>Grocery</MenuItem>
              <MenuItem>Home, Garden & Tools</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Services Menu */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={3}>
          <BsUiRadiosGrid />
          <Menu>
            <MenuButton
              px={3}
              fontWeight="semibold"
              _hover={{ color: "yellow.200" }}
            >
              Services
            </MenuButton>
            <MenuList color="black">
              <MenuItem>All Services</MenuItem>
              <MenuDivider />
              <MenuItem>Auto Care</MenuItem>
              <MenuItem>Pharmacy</MenuItem>
              <MenuItem>Photo</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <SearchButtonBox />

        {/* Wishlist */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={3}>
          <CiHeart />
          <Box ml={2}>
            <Text fontSize="xs" color="gray.300">
              Recorder
            </Text>
            <Text fontWeight="bold">My Items</Text>
          </Box>
        </Box>

        {/* Account */}
        <Box display={{ base: "none", lg: "flex" }} alignItems="center" px={3}>
          <Menu>
            <MenuButton>
              <Flex align="center">
                <BiUser />
                <Box ml={2}>
                  <Text fontSize="xs" color="gray.300">
                    {auth ? `Hi, ${name}` : "Sign In"}
                  </Text>
                  <Text fontWeight="bold">Account</Text>
                </Box>
              </Flex>
            </MenuButton>
            <MenuList p={4} color="black">
              {!auth && (
                <>
                  <MenuItem as={ReactRouterLink} to="/account/signUp">
                    Sign in / Create Account
                  </MenuItem>
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
              bg="yellow.300"
              color="black"
              borderRadius="full"
              w="20px"
              h="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
              mr={1}
              fontWeight="bold"
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
