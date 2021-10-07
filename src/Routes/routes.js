import React from "react";
import { Switch } from "react-router-dom";

import RouteComponent from "./routeComponent";

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <RouteComponent exact path="/" component={SignIn} />
      <RouteComponent exact path="/SignUp" component={SignUp} />
      <RouteComponent exact path="/ForgotPassword" component={ForgotPassword} />
      <RouteComponent exact path="/Dashboard" component={Dashboard} />
    </Switch>
  );
}
