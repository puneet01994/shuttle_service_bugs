import React from "react";
import { Route } from "react-router-dom";
import { isSignedIn } from "./LoginAuth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        isSignedIn().then((res) => {
          if (res === false) return (window.location.href = "/");
        });

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
