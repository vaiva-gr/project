import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { LoginPage } from "../pages/Login/Login";
import { loginUser } from "../store/User/actions";
import { selectUserData } from "../store/User/selector";
import { RootState } from "../store/reducers";

const mapStateToProps = createStructuredSelector<RootState, any>({
  user: selectUserData,
});

export const LoginPageContainer = connect(mapStateToProps, {
  loginUser,
})(LoginPage);
