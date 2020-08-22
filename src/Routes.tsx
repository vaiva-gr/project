import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// import { LoginPage } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/404/ErrorPage";
import { selectIsUserLoggedIn } from "./store/User/selector";
import { LoginPageContainer as LoginPage } from "./containers/LoginPage";

interface RoutesProps {
  isUserLoggedIn?: boolean;
}

export const Routes = ({ isUserLoggedIn }: RoutesProps) => {
  console.log(isUserLoggedIn);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/404" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector<any, any>({
  isUserLoggedIn: selectIsUserLoggedIn,
});

export const RoutesConnected = connect(mapStateToProps)(Routes);
