import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { logoutUser } from "../store/User/actions";
import { HomePage } from "../pages/home/home";

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export const HomePageContainer = connect(null, mapDispatchToProps)(HomePage);
