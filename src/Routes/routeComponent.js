import React from "react";

import { Route } from "react-router-dom";

export default function RouteComponent({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
}
