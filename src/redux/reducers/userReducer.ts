import { UserActions } from "../actions/user";
import { AppActions } from "../../types/actions";
import { User } from "../../types/User";

const initialState: User = {
  info: {
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    userStatus: 0,
  },
  loading: false,
  error: null,
};

export default (state = initialState, action: AppActions): User => {
  switch (action.type) {
    case UserActions.USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActions.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case UserActions.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        info: initialState.info,
      };
    case UserActions.DELETE_USER:
      return initialState;
    default:
      return state;
  }
};
