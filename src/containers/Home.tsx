import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/actions";
import { cancelAuthorization } from "../redux/actions/login";
import Home from "../components/Home";
import {
  getOrder,
  deleteOrderInfo,
  updateOrderInfo,
  addOrderInfo,
} from "../redux/actions/order";
import { getPetInfo } from "../redux/actions/pet";
import { startAdmin, stopAdmin } from "../redux/actions/admin";
import { addEditable, cleanEditable } from "../redux/actions/editablePet";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
  orderInfo: state.orderReducer.info,
  loadingOrder: state.orderReducer.loading,
  errorOrder: state.orderReducer.error,
  petData: state.petReducer.info,
  loadingPets: state.petReducer.loading,
  admin: state.adminReducer,
  editablePet: state.editablePetReducer,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  cancelAuthorization: bindActionCreators(cancelAuthorization, dispatch),
  getOrder: bindActionCreators(getOrder, dispatch),
  addOrder: bindActionCreators(addOrderInfo, dispatch),
  deleteOrder: bindActionCreators(deleteOrderInfo, dispatch),
  updateOrder: bindActionCreators(updateOrderInfo, dispatch),
  getPetInfo: bindActionCreators(getPetInfo, dispatch),
  startAdmin: bindActionCreators(startAdmin, dispatch),
  stopAdmin: bindActionCreators(stopAdmin, dispatch),
  addEditable: bindActionCreators(addEditable, dispatch),
  cleanEditable: bindActionCreators(cleanEditable, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
