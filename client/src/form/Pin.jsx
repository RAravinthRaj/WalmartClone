import {
  Box,
  FormControl,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

const Pin = () => {
  const { setAuth, setSign, name, number } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setSign();
    return setSign;
  }, []);

  const handleVerify = () => {
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast({
        title: "Invalid code",
        description: "Please enter a valid 6-digit OTP.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const verifyPromise = new Promise((resolve) => {
      setTimeout(() => {
        setAuth();
        resolve("verified");
      }, 3000);
    });

    toast
      .promise(verifyPromise, {
        loading: { title: "Verifying...", description: "Please wait..." },
        success: {
          title: "Account verified",
          description: `Welcome, ${name}!`,
        },
        error: {
          title: "Verification failed",
          description: "Please try again later.",
        },
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={15}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src="https://i5.walmartimages.com/dfw/63fd9f59-7d8b/f36f4f89-5684-4c50-8780-e1ee1bef1870/v1/hand-holding-phone-blue-bubble.svg"
          alt="OTP Verification"
        />
        <Text textAlign="center" className="roboto-bold" fontSize={20}>
          Enter verification code
        </Text>
        <Text textAlign="center" mt={5}>
          Please enter the 6-digit code <br /> sent to {number}
        </Text>
        <br />
        <FormControl>
          <Text className="roboto-bold" fontSize={12} mb={2}>
            Verification Code
          </Text>
          <HStack justifyContent="center">
            <PinInput otp onChange={setOtp}>
              {[...Array(6)].map((_, i) => (
                <PinInputField key={i} />
              ))}
            </PinInput>
          </HStack>
        </FormControl>
        <Text fontSize={12} mt={3}>
          Didn't receive it?{" "}
          <u style={{ cursor: "pointer" }}>Get another code</u>
        </Text>

        <FormControl mt={6}>
          <Input
            w={400}
            type="submit"
            value="Verify number"
            bg="#004F9A"
            borderRadius={20}
            color="white"
            cursor="pointer"
            onClick={handleVerify}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Pin;
