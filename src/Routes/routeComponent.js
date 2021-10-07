import React from "react";

import { Route } from "react-router-dom";

import Header from "../Components/Header";


export default function RouteComponent({ component: Component, ...rest }) {


  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Header hidden>
          <Component {...routeProps} />
        </Header>
      )}
    />
  );
}
