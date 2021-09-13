import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CMdEmail = chakra(MdEmail);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

//TODO: Add Password Requirements
//TODO: Select Icon Library

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isInvalid =
    password === "" ||
    email === "" ||
    name === "" ||
    password !== confirmPassword;

  const handleSignUp = (event) => {
    event.preventDefault();

    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("password", password);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="background.500"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="primary.500" />
        <Heading color="primary.500">Welcome to Cereal Killer!</Heading>
        <Box
          minW={{ base: "90%", md: "468px" }}
          borderWidth="2px"
          borderColor="secondary"
        >
          <form method="POST" onSubmit={handleSignUp}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.700"
              boxShadow="md"
            >
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="secondary.500" />}
                  />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    aria-describedby="namel-helper-text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdEmail color="secondary.500" />}
                  />
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    aria-describedby="email-helper-text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="secondary.500" />}
                  />
                  <Input
                    type={"password"}
                    placeholder="*******"
                    aria-describedby="password-helper-text"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Confirm your Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="secondary.500" />}
                  />
                  <Input
                    type={"password"}
                    placeholder="*******"
                    aria-describedby="password-helper-text"
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="primary"
                width="full"
                disabled={isInvalid}
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Have an account with us?{" "}
        <Link color="brand.primary" href="/login">
          Log in
        </Link>
      </Box>
    </Flex>
  );
};

export default SignUpPage;
