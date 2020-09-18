import React from "react";
import SessionStorageService from "../Services/SessionStorageService";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function Auth(ComposedComponent) {
  const sessionStorageService = SessionStorageService.getService();
  var token = sessionStorageService.getAccessToken();
  var token1 = sessionStorageService.getRefreshToken();

  class Authenticate extends React.Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth = () => {
      if (!token && !token1) {
        this.props.history.push("/");
      }
    };
    render() {
      return (
        <ComposedComponent data-test="composedComponent" {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    history: PropTypes.object,
    token: PropTypes.string,

  };
  return Authenticate;

}

