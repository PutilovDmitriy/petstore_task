import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { goAuthorization } from "../redux/actions/login";
import Router from "../router/Router";
import { addUserInfo, getUserInfo } from "../redux/actions/user";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
  authorized: state.loginReducer.authorized,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  addUserInfo: bindActionCreators(addUserInfo, dispatch),
  getUserInfo: bindActionCreators(getUserInfo, dispatch),
  goAuthorization: bindActionCreators(goAuthorization, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
