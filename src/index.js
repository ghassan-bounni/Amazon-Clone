import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
