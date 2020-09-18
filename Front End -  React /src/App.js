import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Loader from "./Components/Pages/Loader";
import "./App.scss";
import { PublicLayout } from "./Components/Layout/PublicLayout";

export default class App extends React.Component {
  render() {
    return (
      <div data-test="App">
        <React.Suspense fallback={Loader}>
          <Switch>
            <Route
              testID={"login"}
              exact
              path="/"
              name="Login Page"
              render={(props) => <PublicLayout {...props} />}
            />
            <Route
              testID={"layout"}
              name="Layout"
              path="/dashboard"
              render={(props) => <Layout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}
