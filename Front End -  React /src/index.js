import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./Styles/index.css";

import { initializeFirebase } from "../src/Redux/actions/POST-API";
import * as Sentry from "@sentry/browser";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

Sentry.init({
  dsn:
    "https://dbd395a4a0fe4ebd97b2fd2626a77730@o426497.ingest.sentry.io/5370494",
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
initializeFirebase();
