import { Category, Status, Tags } from "./../types/Pet";
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

export const objPetInfo = (
  id: number | string,
  category: string,
  name: string,
  photoUrls: string[],
  tags: string[],
  status: Status
) => {
  let tgs: Tags[] = [];
  if (tags.length !== 0)
    tags.map((item, index) => (tgs = [...tgs, { id: index, name: item }]));
  return {
    id: Number(id),
    category: { id: 1, name: category },
    name: name,
    photoUrls: photoUrls,
    tags: tgs,
    status: status,
  };
};
