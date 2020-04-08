import { OrderInfo } from "./../types/Order";
import { UserStatus, UserInfo } from "./../types/User";

export const dateFormat = require("dateformat");

export const objUserInfo = (
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  userStatus: UserStatus
): UserInfo => ({
  id: id && 0,
  username: username,
  firstName: firstName,
  lastName: lastName,
  email: email,
  password: password,
  phone: phone,
  userStatus: userStatus && 0,
});

export const odjOrderInfo = (
  id: number,
  petId: number,
  quantity: number,
  shipDate: string,
  status: "placed" | "approved" | "delivered",
  complete: boolean
): OrderInfo => ({
  id: id,
  petId: petId,
  quantity: quantity,
  shipDate: shipDate,
  status: status,
  complete: complete,
});
