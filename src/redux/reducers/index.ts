import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";
import adminReducer from "./adminReducer";
import petReducer from "./petReducer";
import editablePetReducer from "./editablePetReducer";
export default combineReducers({
  userReducer,
  loginReducer,
  orderReducer,
  adminReducer,
  petReducer,
  editablePetReducer,
});
