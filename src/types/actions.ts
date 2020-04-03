import { UserInfo } from "./User";
import { UserActions } from "./../redux/actions/user";

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

export type AppActions = UserActionsType;
