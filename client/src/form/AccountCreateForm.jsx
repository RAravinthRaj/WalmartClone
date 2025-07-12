import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const AccountCreateForm = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const { setSign, email, setName } = useContext(AuthContext);

  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  const handleSubmit = () => {
    setName(firstName, password);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={15}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
          alt="Walmart Logo"
        />
        <Text textAlign="center" className="roboto-bold" fontSize={20}>
          Create your Walmart account
        </Text>
        <Text textAlign="center" mt={5}>
          Email Address <u>{email}</u>
        </Text>
        <br />

        <FormControl>
          <label className="roboto-bold" fontSize={10}>
            First name
          </label>
          <Input
            border="1px solid black"
            w={400}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />

          <label className="roboto-bold" fontSize={10}>
            Last name
          </label>
          <Input border="1px solid black" w={400} />
          <br />
          <br />

          <label className="roboto-bold" fontSize={10}>
            Create Password
          </label>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              border="1px solid black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShow(!show)}
                bg="white"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <br />
          <br />

          <ChakraLink
            as={ReactRouterLink}
            to="/account/otp"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <Input
              w={400}
              type="submit"
              value="Create account"
              bg="#004F9A"
              borderRadius={20}
              color="white"
              cursor="pointer"
              onClick={handleSubmit}
            />
          </ChakraLink>
          <br />
          <br />

          <Checkbox defaultChecked colorScheme="blue" className="roboto-bold">
            Keep me signed in
          </Checkbox>
        </FormControl>

        <br />
        <Text textAlign="center">
          Securing your personal information is our priority. <br />
          <u>See our privacy measures.</u>
        </Text>
      </Box>
    </Box>
  );
};

export default AccountCreateForm;
