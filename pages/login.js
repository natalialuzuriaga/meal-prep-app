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
  FormHelperText,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isInvalid = password === '' || email === '';
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = (event) => {
    event.preventDefault();

    console.log('email', email);
    console.log('password', password);
  }

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
        <Heading color="primary.500">Welcome to Food Thyme!</Heading>
        <Box minW={{ base: "90%", md: "468px" }} borderWidth="2px" borderColor="secondary">
          <form 
            method="POST"
            onSubmit={handleLogin}
            >
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.700"
              boxShadow="md"
            >
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="secondary.500" />}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                    aria-describedby="password-helper-text"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" colorScheme="secondary" variant="ghost" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="brand.secondary" href="#">
                    Forgot Password?
                    </Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="primary"
                width="full"
                disabled={isInvalid}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="brand.primary" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default LoginPage;
