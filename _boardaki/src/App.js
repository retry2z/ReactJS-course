import React from "react";
import { Route, Switch } from "react-router-dom";
import { IntlProvider } from 'react-intl';

import Navbar from "./components/navbar";
import Home from "./pages/home";
import GameIndex from "./pages/game";

import messages from "./common/lang/messages";

import 'bulma/css/bulma.min.css';

const App = () => (
  <IntlProvider locale="en" messages={messages["en"]}>

    <Navbar />

    <section className="section">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameIndex} />
        </Switch>
      </div>
    </section>

  </IntlProvider>
);

export default App;