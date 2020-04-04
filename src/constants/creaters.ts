import { UserStatus, UserInfo } from "./../types/User";

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
