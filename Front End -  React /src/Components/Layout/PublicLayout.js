import React from "react";
import { Route } from "react-router-dom";
import Login from "../Pages/Login";
import { Switch } from "react-router-dom";

export const PublicLayout = (props) => (
  <>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </>
);
