import React, { Fragment } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { SignedProvider } from "./Context/SignedProvider";

import GlobalStyle from "./theme/globalStyle";

import Routes from "./Routes/routes";

function App() {
  return (
    <ChakraProvider>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </ChakraProvider>
  );
}

export default () => (
  <SignedProvider>
    <App />
  </SignedProvider>
);
