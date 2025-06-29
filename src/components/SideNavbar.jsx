import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { RepeatClockIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { TbSitemap } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { BsListStars } from "react-icons/bs";
import { LiaRegisteredSolid } from "react-icons/lia";
import { LineHorizontal } from "./LineHorizontal";

const navItems = [
  { icon: <RepeatClockIcon />, label: "Purchase history" },
  { icon: <TbSitemap />, label: "My items" },
  { icon: <CiUser />, label: "Account" },
  { icon: <QuestionOutlineIcon />, label: "Help" },
  { icon: <BsListStars />, label: "Lists" },
  { icon: <LiaRegisteredSolid />, label: "Registries" },
];

function SideNavbar({ isOpen, onClose }) {
  const { auth, name } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="1px"
          py={4}
          px={5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
            w={10}
          />
          {auth ? (
            <Text fontSize="md" fontWeight="medium" ml={4}>
              Hi, {name}
            </Text>
          ) : (
            <Button
              bg="#004F9A"
              color="white"
              borderRadius="full"
              size="sm"
              ml={4}
              onClick={() => navigate("/account/create")}
            >
              Sign in or Create Account
            </Button>
          )}
        </DrawerHeader>

        <DrawerBody>
          {navItems.map(({ icon, label }, index) => (
            <Box key={label}>
              <Box
                display="flex"
                alignItems="center"
                px={5}
                py={2}
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
              >
                <Box fontSize="lg" mr={3}>
                  {typeof icon === "string" ? (
                    <Image src={icon} w={3} alt={label} />
                  ) : (
                    icon
                  )}
                </Box>
                <Text fontSize="sm">{label}</Text>
              </Box>
              {index !== navItems.length - 1 && <LineHorizontal />}
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SideNavbar;
