import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import GameIndex from "./pages/game";

import 'bulma/css/bulma.min.css';

const App = () => (
  <>
    <Navbar />

    <section className="section">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameIndex} />
        </Switch>
      </div>
    </section>
  </>
);

export default App;