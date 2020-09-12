import React from "react";
import "./styles.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

import { Route, Switch } from "react-router-dom";

import Jobs from "./Pages/Jobs";
import Engineer from "./Pages/Engineer";
import Marketer from "./Pages/Marketer.jsx";
import Designer from "./Pages/Designer";
import Breadcrumbs from "./Components/Breadcrumbs";
import CustomizedSnackbar from "./Components/Snackbar";

export default function App() {
  return (
    <>
      <Breadcrumbs />
      <CustomizedSnackbar />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route
          exact
          path="/jobs/engineer"
          render={props => <Engineer {...props} />}
        />
        <Route
          exact
          path="/jobs/marketer"
          render={props => <Marketer {...props} />}
        />
        <Route
          exact
          path="/jobs/designer"
          render={props => <Designer {...props} />}
        />
      </Switch>
    </>
  );
}
