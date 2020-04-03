export interface User {
  info: UserInfo;
  loading: boolean;
  error: any;
}

export interface UserInfo {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: UserStatus;
}

export type UserStatus = 0 | 1;
