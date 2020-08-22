import { connect } from "react-redux";

import { LoginPage } from "../pages/Login/Login";
import { loginUser } from "../store/User/actions";

export const LoginPageContainer = connect<any, any>(null, { loginUser })(
  LoginPage
);
