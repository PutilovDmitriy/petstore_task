import { urlLogin, urlLogout } from "./../../constants/url";
import { Dispatch } from "react";
import { AppActions } from "../../types/actions";
import { getUserInfo, userDelete } from "./user";
export enum LoginActions {
  LOGIN_BEGIN = "LOGIN_BEGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCES",
  UNLOGIN_SUCCESS = "UNLOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
}

export const loginBegin = (): AppActions => ({
  type: LoginActions.LOGIN_BEGIN,
});

export const loginSuccess = (): AppActions => ({
  type: LoginActions.LOGIN_SUCCESS,
});

export const unloginSuccess = (): AppActions => ({
  type: LoginActions.UNLOGIN_SUCCESS,
});

export const loginFailure = (error: any): AppActions => ({
  type: LoginActions.LOGIN_FAILURE,
  error,
});

export const goAuthorization = (username: string, password: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(loginBegin());
    return fetch(urlLogin(username, password))
      .then(
        (response) => response.json(),
        (error) => dispatch(loginFailure(error))
      )
      .then((res) => {
        res.code == 200 && dispatch(loginSuccess());
      });
  };
};

export const cancelAuthorization = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(loginBegin());
    return fetch(urlLogout)
      .then(
        (response) => response.json(),
        (error) => dispatch(loginFailure(error))
      )
      .then((res) => {
        res.code == 200 && dispatch(unloginSuccess());
        dispatch(userDelete());
      });
  };
};
