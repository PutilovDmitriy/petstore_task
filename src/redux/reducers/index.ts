import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
import petReducer from "./petReducer";
export default combineReducers({
  userReducer,
  loginReducer,
  orderReducer,
  cartReducer,
  petReducer,
});
