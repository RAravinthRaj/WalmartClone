import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";

const Modalhome = ({ onClose, isOpen }) => {
  return (
    <Modal
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        mx={{ base: 4, sm: 6 }}
        w={{ base: "95%", md: "600px" }}
        bg="#0071DC"
        borderRadius="md"
      >
        {/* Icons Row */}
        <Flex justify="center" gap={6} mt={8} wrap="wrap">
          {[
            {
              label: "Shipping",
              src: "https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png",
            },
            {
              label: "Pickup",
              src: "https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png",
            },
            {
              label: "Delivery",
              src: "https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png",
            },
          ].map((item, i) => (
            <Box key={i} textAlign="center">
              <Image
                borderRadius="full"
                boxSize="50px"
                src={item.src}
                alt={item.label}
                mx="auto"
              />
              <Text color="white" fontWeight={500} mt={2}>
                {item.label}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* Modal Body */}
        <ModalBody>
          <Flex direction="column" align="center" gap={6} mt={6}>
            {/* Shipping Address */}
            <Box
              w="100%"
              maxW="400px"
              bg="white"
              borderRadius="md"
              p={4}
              boxShadow="md"
            >
              <Flex align="center" gap={2} mb={2}>
                <CiLocationOn size={20} />
                <Text fontWeight={600} fontSize="sm">
                  Add an address for shipping and delivery
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.600" mb={3}>
                Sacramento, CA 95829
              </Text>
              <Button
                borderRadius="full"
                w="100%"
                bg="#0071DC"
                color="white"
                fontSize="sm"
              >
                Add Address
              </Button>
            </Box>

            {/* Store Address */}
            <Box
              w="100%"
              maxW="400px"
              bg="white"
              borderRadius="md"
              p={4}
              boxShadow="md"
            >
              <Flex align="center" gap={2} mb={1}>
                <IoHomeOutline size={18} />
                <Text fontWeight={600} fontSize="sm">
                  Sacramento Supercenter 8915 Gerber Road
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" fontSize="sm">
                <Text color="gray.600">Sacramento, CA 95829</Text>
                <FaGreaterThan />
              </Flex>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default Modalhome;
