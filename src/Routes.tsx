import * as React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ErrorPage } from "./pages/404/ErrorPage";
import { selectIsUserLoggedIn } from "./store/User/selector";
import { LoginPageContainer as LoginPage } from "./containers/LoginPage";
import { HomePageContainer as HomePage } from "./containers/HomePage";

interface RoutesProps {
  isUserLoggedIn?: boolean;
}

export const Routes = ({ isUserLoggedIn }: RoutesProps) => {
  if (isUserLoggedIn) {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/404" component={ErrorPage} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/404" component={ErrorPage} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector<any, any>({
  isUserLoggedIn: selectIsUserLoggedIn,
});

export const RoutesConnected = connect(mapStateToProps)(Routes);
