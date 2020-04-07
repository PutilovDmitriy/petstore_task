import { AppActions } from "../../types/actions";
import { Cart } from "../../types/Cart";
export enum CartActions {
  ADD_ITEM = "ADD_ITEM",
  CLEAN_CART = "CLEAN_CART",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export const addItem = (payload: Cart): AppActions => ({
  type: CartActions.ADD_ITEM,
  payload,
});

export const removeItem = (payload: number): AppActions => ({
  type: CartActions.REMOVE_ITEM,
  payload,
});

export const cleanCard = (): AppActions => ({
  type: CartActions.CLEAN_CART,
});
