import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { setSign, setEmail } = useContext(AuthContext);
  const [email, setEm] = useState("");
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail(email);
    navigate("/account/create");
  }

  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={10}
      px={4}
    >
      <Image
        src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
        alt="Walmart logo"
        mb={4}
      />
      <Text textAlign="center" fontSize="xl" fontWeight="bold">
        Sign in or create your account
      </Text>
      <Text textAlign="center" mt={4}>
        Not sure if you have an account? <br />
        Enter your email and we’ll check for you.
      </Text>

      <Box
        as="form"
        mt={8}
        onSubmit={submitForm}
        w={{ base: "90%", sm: "400px" }}
      >
        <FormControl mb={6}>
          <FormLabel fontWeight="bold" fontSize="sm">
            Email Address
          </FormLabel>
          <Input
            border="1px solid black"
            h={12}
            type="email"
            value={email}
            onChange={(e) => setEm(e.target.value)}
            required
          />
        </FormControl>

        <Button
          type="submit"
          w="100%"
          bg="#004F9A"
          color="white"
          borderRadius="full"
          _hover={{ bg: "#003f7a" }}
        >
          Continue
        </Button>
      </Box>

      <Text textAlign="center" mt={8} fontSize="sm">
        Securing your personal information is our priority. <br />
        <u>See our privacy measures.</u>
      </Text>
    </Box>
  );
};

export default Signin;
