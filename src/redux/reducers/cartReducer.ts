import { AppActions } from "../../types/actions";
import { Cart } from "../../types/Cart";
import { CartActions } from "../actions/cart";

const initialState: Cart[] = [];

export default (state = initialState, action: AppActions): Cart[] => {
  switch (action.type) {
    case CartActions.ADD_ITEM:
      return [...state, action.payload];
    case CartActions.REMOVE_ITEM:
      let i = state.findIndex((item) => item.id == action.payload);
      return [...state.slice(0, i), ...state.slice(i + 1)];
    case CartActions.CLEAN_CART:
      return initialState;
    default:
      return state;
  }
};
