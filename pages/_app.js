import React from "react";
import "../styles/globals.css";

import { theme } from "../library/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { NFProvider } from "../components/Provider/NFTProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AnimateSharedLayout>
          <NFProvider>
            <Component {...pageProps} />
          </NFProvider>
        </AnimateSharedLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
