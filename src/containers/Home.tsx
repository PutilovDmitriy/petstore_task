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
} from "../redux/actions/order";
import { addItem, removeItem, cleanCard } from "../redux/actions/cart";
import { getPetInfo } from "../redux/actions/pet";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
  orderInfo: state.orderReducer.info,
  loadingOrder: state.orderReducer.loading,
  errorOrder: state.orderReducer.error,
  cartData: state.cartReducer,
  petData: state.petReducer.info,
  loadingPets: state.petReducer.loading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  cancelAuthorization: bindActionCreators(cancelAuthorization, dispatch),
  getOrder: bindActionCreators(getOrder, dispatch),
  deleteOrder: bindActionCreators(deleteOrderInfo, dispatch),
  updateOrder: bindActionCreators(updateOrderInfo, dispatch),
  addCart: bindActionCreators(addItem, dispatch),
  removeCart: bindActionCreators(removeItem, dispatch),
  cleanCart: bindActionCreators(cleanCard, dispatch),
  getPetInfo: bindActionCreators(getPetInfo, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
