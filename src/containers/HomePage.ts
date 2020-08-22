import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { logoutUser } from "../store/User/actions";
import { fetchServersRequest } from "../store/Servers/actions";
import { HomePage } from "../pages/Home/Home";
import { RootState } from "../store/reducers";
import { selectServers } from "../store/Servers/selectors";

const mapStateToProps = createStructuredSelector<RootState, any>({
  servers: selectServers,
});

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch(logoutUser()),
  fetchServers: () => dispatch(fetchServersRequest()),
});

export const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
