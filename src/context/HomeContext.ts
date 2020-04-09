import { UserInfo } from "./../types/User";
import * as React from "react";
import { OrderInfo } from "types/Order";
import { PetInfo, Status } from "../types/Pet";

type ContextProps = {
  cancelAuthorization: () => void;
  userInfo: UserInfo;
  getOrder: (id: number) => void;
  orderInfo: OrderInfo | null;
  loadingOrder: boolean;
  errorOrder: any;
  deleteOrder: (id: number) => void;
  addOrder: (info: OrderInfo) => void;
  updateOrder: (info: OrderInfo) => void;
  petData: PetInfo[];
  getPetInfo: (status: Status) => void;
  admin: boolean;
  startAdmin: () => void;
  stopAdmin: () => void;
  editablePet: PetInfo;
  addEditable: (payload: PetInfo) => void;
  cleanEditable: () => void;
};

const HomeContext = React.createContext<Partial<ContextProps>>({});

export default HomeContext;
