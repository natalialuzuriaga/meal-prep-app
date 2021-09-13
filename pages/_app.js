import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      500: "#A991B6", 
    },
    secondary: {
      500: "#2A324B", 
    },
    background: {
      200: "F5F5F5",
      500: "EBEBEB"
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
