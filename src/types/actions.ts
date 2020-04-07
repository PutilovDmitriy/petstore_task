import { PetInfo } from "./Pet";
import { PetActions } from "./../redux/actions/pet";
import { Cart } from "./Cart";
import { CartActions } from "../redux/actions/cart";
import { OrderInfo } from "./Order";
import { UserInfo } from "./User";
import { UserActions } from "./../redux/actions/user";
import { LoginActions } from "../redux/actions/login";
import { OrderActions } from "../redux/actions/order";

// user action types

export interface UserBegin {
  type: typeof UserActions.USER_BEGIN;
}

export interface UserSuccess {
  type: typeof UserActions.USER_SUCCESS;
  payload: UserInfo;
}

export interface UserFailure {
  type: typeof UserActions.USER_FAILURE;
  error: any;
}

export interface UserDelete {
  type: typeof UserActions.DELETE_USER;
}

export type UserActionsType =
  | UserBegin
  | UserSuccess
  | UserFailure
  | UserDelete;

// login actions types

export interface LoginBegin {
  type: typeof LoginActions.LOGIN_BEGIN;
}

export interface LoginSuccess {
  type: typeof LoginActions.LOGIN_SUCCESS;
}
export interface UnloginSuccess {
  type: typeof LoginActions.UNLOGIN_SUCCESS;
}

export interface LoginFailure {
  type: typeof LoginActions.LOGIN_FAILURE;
  error: any;
}

export type LoginActionsType =
  | LoginBegin
  | LoginSuccess
  | UnloginSuccess
  | LoginFailure;

// orders actions types

export interface OrderBegin {
  type: typeof OrderActions.ORDER_BEGIN;
}

export interface OrderSuccess {
  type: typeof OrderActions.ORDER_SUCCESS;
  payload: OrderInfo;
}

export interface OrderFailure {
  type: typeof OrderActions.ORDER_FAILURE;
  error: any;
}

export interface AddOrder {
  type: typeof OrderActions.ADD_ORDER;
  payload: OrderInfo;
}

export interface UpdateOrder {
  type: typeof OrderActions.UPDATE_ORDER;
  payload: OrderInfo;
}

export interface DeleteOrder {
  type: typeof OrderActions.DELETE_ORDER;
  payload: string;
}

export type OrderActionsType =
  | OrderBegin
  | OrderSuccess
  | OrderFailure
  | AddOrder
  | UpdateOrder
  | DeleteOrder;

// cart actions types

export interface AddItem {
  type: typeof CartActions.ADD_ITEM;
  payload: Cart;
}

export interface RemoveItem {
  type: typeof CartActions.REMOVE_ITEM;
  payload: number;
}

export interface CleanCard {
  type: typeof CartActions.CLEAN_CART;
}

export type CardActionsType = AddItem | RemoveItem | CleanCard;

export interface PetBegin {
  type: typeof PetActions.PET_BEGIN;
}
export interface PetSucces {
  type: typeof PetActions.PET_SUCCESS;
  payload: PetInfo[];
}
export interface PetFailure {
  type: typeof PetActions.PET_FAILURE;
  payload: any;
}
export interface AddPet {
  type: typeof PetActions.ADD_PET;
  payload: PetInfo;
}
export interface UpdatePet {
  type: typeof PetActions.UPDATE_PET;
  payload: PetInfo;
}
export interface DeletePet {
  type: typeof PetActions.DELETE_PET;
  payload: string;
}

export type PetActionsType =
  | PetBegin
  | PetSucces
  | PetFailure
  | AddPet
  | UpdatePet
  | DeletePet;

export type AppActions =
  | UserActionsType
  | LoginActionsType
  | OrderActionsType
  | CardActionsType
  | PetActionsType;
