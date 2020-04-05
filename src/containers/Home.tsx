import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { cancelAuthorization } from "../redux/actions/login";
import Home from "../components/Home";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  cancelAuthorization: bindActionCreators(cancelAuthorization, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
