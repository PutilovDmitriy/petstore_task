import { LoginActions } from "../actions/login";
import { AppActions } from "../../types/actions";
import { Login } from "../../types/Login";

const initialState: Login = {
  authorized: false,
  loading: false,
  error: null,
};

export default (state = initialState, action: AppActions): Login => {
  switch (action.type) {
    case LoginActions.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
      };
    case LoginActions.UNLOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: false,
      };
    case LoginActions.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
