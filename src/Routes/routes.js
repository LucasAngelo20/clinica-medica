import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import RouteComponent from "./routeComponent";

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import DashboardAdmin from "../Pages/DashboardAdmin";
import Historic from "../Pages/Historic";
import Scheduling from "../Pages/Scheduling";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <RouteComponent exact path="/" component={SignIn} />
        <RouteComponent exact path="/SignUp" component={SignUp} />
        <RouteComponent
          exact
          path="/ForgotPassword"
          component={ForgotPassword}
        />
        <RouteComponent exact path="/Dashboard" component={Dashboard} />
        <RouteComponent
          exact
          path="/DashboardAdmin"
          component={DashboardAdmin}
        />
        <RouteComponent exact path="/Historic" component={Historic} />
        <RouteComponent exact path="/Scheduling" component={Scheduling} />
      </Switch>
    </Router>
  );
}
