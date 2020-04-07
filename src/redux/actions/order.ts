import { urlOrder } from "./../../constants/url";
import { OrderInfo } from "./../../types/Order";
import { AppActions } from "types/actions";
import { Dispatch } from "react";

export enum OrderActions {
  ORDER_BEGIN = "ORDER_BEGIN",
  ORDER_SUCCESS = "ORDER_SUCCESS",
  ORDER_FAILURE = "ORDER_FAILURE",
  ADD_ORDER = "ADD_ORDER",
  UPDATE_ORDER = "UPDATE_ORDER",
  DELETE_ORDER = "DELETE_ORDER",
}

export const orderBegin = (): AppActions => ({
  type: OrderActions.ORDER_BEGIN,
});

export const orderSuccess = (payload: OrderInfo): AppActions => ({
  type: OrderActions.ORDER_SUCCESS,
  payload,
});

export const orderFailure = (error: any): AppActions => ({
  type: OrderActions.ORDER_FAILURE,
  error,
});

export const addOrder = (payload: OrderInfo): AppActions => ({
  type: OrderActions.ADD_ORDER,
  payload,
});

export const updateOrder = (payload: OrderInfo): AppActions => ({
  type: OrderActions.UPDATE_ORDER,
  payload,
});

export const deleteOrder = (payload: string): AppActions => ({
  type: OrderActions.DELETE_ORDER,
  payload,
});

export function getOrder(id: string) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(orderBegin());
    return fetch(`${urlOrder}${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(orderFailure(404));
          return null;
        }
      })
      .then((res) => {
        dispatch(orderSuccess(res));
        return res;
      });
  };
}

export function addOrderInfo(info: OrderInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(orderBegin());
    return fetch(`${urlOrder}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(orderFailure(404));
          return null;
        }
      })
      .then((res) => {
        dispatch(addOrder(res));
        return res;
      });
  };
}

export function updateOrderInfo(info: OrderInfo) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(orderBegin());
    return fetch(`${urlOrder}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch(orderFailure(404));
          return null;
        }
      })
      .then((res) => {
        dispatch(updateOrder(res));
        return res;
      });
  };
}

export function deleteOrderInfo(payload: string) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(orderBegin());
    return fetch(`${urlOrder}${payload}`, {
      method: "DELETE",
    })
      .then(
        (response) => response.json(),
        (error) => dispatch(orderFailure(error))
      )
      .then((res) => {
        res.code == 200 && dispatch(deleteOrder(payload));
      });
  };
}
