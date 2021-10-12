import React, { Fragment } from "react";


import { SignedProvider } from "./Context/SignedProvider";

import GlobalStyle from "./theme/globalStyle";

import Routes from "./Routes/routes";

function App() {
  return (
   
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    
  );
}

export default () => (
  <SignedProvider>
    <App />
  </SignedProvider>
);
