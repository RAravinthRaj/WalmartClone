import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const { auth, setAuth, setName, setSign } = useContext(AuthContext);

  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  function formSubmit() {
    const storedUser = JSON.parse(localStorage.getItem("user-info")) || {};
    const storedPassword =
      JSON.parse(localStorage.getItem("user-password")) || "";
    const storedName = JSON.parse(localStorage.getItem("name")) || "";

    // Validation check
    if (
      emailInput === storedUser.email &&
      password === storedPassword.password
    ) {
      setAuth(true);
      setName(storedName.n);
      navigate("/"); // Successful login
    } else {
      alert("Invalid email or password");
    }
  }

  if (auth) {
    navigate("/");
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={15}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        border="1px solid black"
        p={10}
        mt={10}
      >
        <Image
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
          alt="Walmart Logo"
        />
        <Text textAlign="center" className="roboto-bold" fontSize={20}>
          User Login
        </Text>

        <FormControl mt={8}>
          <label className="roboto-bold" fontSize={10}>
            Email
          </label>
          <Input
            type="email"
            border="1px solid black"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <br />
          <br />

          <label className="roboto-bold" fontSize={10}>
            Password
          </label>
          <InputGroup size="md">
            <Input
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

          <Button
            w={40}
            mt={4}
            bg="#004F9A"
            color="white"
            borderRadius={20}
            onClick={formSubmit}
          >
            Login
          </Button>

          <Button
            w={40}
            mt={2}
            bg="white"
            color="black"
            border="1px solid black"
            borderRadius={20}
            onClick={() => navigate("/account/create")}
          >
            Create account
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
