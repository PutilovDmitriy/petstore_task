import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { addUserInfo } from "../redux/actions/user";
import { AppActions } from "../types/actions";
import Register from "../components/Registr";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  addUserInfo: bindActionCreators(addUserInfo, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
