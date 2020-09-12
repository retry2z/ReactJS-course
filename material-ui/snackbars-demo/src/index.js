import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from 'react-redux';
import store from './redux/configuration';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
