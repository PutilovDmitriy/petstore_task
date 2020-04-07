import { urlUser } from "./../../constants/url";
import { UserInfo } from "./../../types/User";
import { Dispatch } from "react";
import { AppActions } from "types/actions";
export enum UserActions {
  USER_BEGIN = "USER_BEGIN",
  USER_SUCCESS = "USER_SUCCES",
  USER_FAILURE = "USER-FAILURE",
  DELETE_USER = "DELETE_USER",
}

export const userBegin = (): AppActions => {
  return { type: UserActions.USER_BEGIN };
};

export const userSuccess = (payload: UserInfo): AppActions => {
  return { type: UserActions.USER_SUCCESS, payload };
};

export const userFailure = (error: any): AppActions => {
  return { type: UserActions.USER_FAILURE, error };
};

export const userDelete = (): AppActions => {
  return { type: UserActions.DELETE_USER };
};

export function getUserInfo(username: string) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(userBegin());
    return fetch(`${urlUser}${username}`)
      .then(
        (response) => response.json(),
        (error) => dispatch(userFailure(error))
      )
      .then((data) => {
        dispatch(userSuccess(data));
        return data;
      });
  };
}

export function addUserInfo(info: UserInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(userBegin());
    return fetch(`${urlUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then(
        (response) => response.json(),
        (error) => dispatch(userFailure(error))
      )
      .then((res) => {
        res.code == 200 && userSuccess(info);
      });
  };
}

export function updateUserInfo(info: UserInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(userBegin());
    return fetch(`${urlUser}${info.username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then(
        (response) => response.json(),
        (error) => dispatch(userFailure(error))
      )
      .then((res) => {
        res.code == 200 && dispatch(userSuccess(info));
      });
  };
}

export function deleteUser(username: string) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(userBegin());
    return fetch(`${urlUser}${username}`, {
      method: "DELETE",
    })
      .then(
        (response) => response.json(),
        (error) => dispatch(userFailure(error))
      )
      .then((res) => {
        res.code == 200 && dispatch(userDelete());
      });
  };
}
