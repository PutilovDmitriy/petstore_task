import { OrderActions } from "../actions/order";
import { Order } from "./../../types/Order";
import { AppActions } from "../../types/actions";

const initialState: Order = {
  info: null,
  loading: false,
  error: null,
};

export default (state = initialState, action: AppActions): Order => {
  switch (action.type) {
    case OrderActions.ORDER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case OrderActions.ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case OrderActions.ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OrderActions.ADD_ORDER:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case OrderActions.UPDATE_ORDER:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case OrderActions.DELETE_ORDER:
      return {
        ...state,
        info: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
