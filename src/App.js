import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./theme/globalStyle";

import Routes from "./Routes/routes";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
}
