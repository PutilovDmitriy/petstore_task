import { UserInfo } from "./../types/User";
import * as React from "react";
import { OrderInfo } from "types/Order";
import { Cart } from "../types/Cart";

type ContextProps = {
  cancelAuthorization: () => void;
  userInfo: UserInfo;
  getOrder: (id: number) => void;
  orderInfo: OrderInfo | null;
  loadingOrder: boolean;
  errorOrder: any;
  cartData: Cart[];
  addCart: (payload: Cart) => void;
  removeCart: (payload: number) => void;
  cleanCart: () => void;
  deleteOrder: (id: number) => void;
  updateOrder: (info: OrderInfo) => void;
};

const HomeContext = React.createContext<Partial<ContextProps>>({});

export default HomeContext;
