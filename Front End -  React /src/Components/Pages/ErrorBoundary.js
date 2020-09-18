import React, { Component } from "react";
import * as Sentry from "@sentry/browser";

import PropTypes from "prop-types";

export default class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",

    hasError: false,

    eventId: "",
  };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId, errorInfo });
    });
  }
  render() {
    // next code block goes here
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <div className="card my-5">
          <div className="card-header">
            <p>
              There was an error in loading this page.{" "}
              <span
                style={{ cursor: "pointer", color: "#0077FF" }}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reload this page
              </span>{" "}
            </p>
          </div>
          <div className="card-body">
            <details className="error-details">
              <summary>Click for error details</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
