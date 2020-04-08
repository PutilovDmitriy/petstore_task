import { UserInfo } from "./../types/User";
import * as React from "react";
import { OrderInfo } from "types/Order";
import { Cart } from "../types/Cart";
import { PetInfo, Status } from "../types/Pet";

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
  petData: PetInfo[];
  getPetInfo: (status: Status) => void;
};

const HomeContext = React.createContext<Partial<ContextProps>>({});

export default HomeContext;
