import { UserInfo } from "./User";
import { UserActions } from "./../redux/actions/user";
import { LoginActions } from "redux/actions/login";

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

export type AppActions = UserActionsType | LoginActionsType;
