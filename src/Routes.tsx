import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/404/ErrorPage";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="/404" component={ErrorPage} />
    </Switch>
  </Router>
);
