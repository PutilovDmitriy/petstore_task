import * as React from "react";
import HomeRouter from "../router/HomeRoute";
import NavBar from "./NavBar";
import HomeContext from "../context/HomeContext";
import { UserInfo } from "../types/User";
import { OrderInfo } from "../types/Order";
import { Cart } from "types/Cart";

interface HomeProps {
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
}

const Home: React.FC<HomeProps> = ({
  cancelAuthorization,
  userInfo,
  getOrder,
  orderInfo,
  loadingOrder,
  errorOrder,
  cartData,
  addCart,
  removeCart,
  cleanCart,
  deleteOrder,
  updateOrder,
}) => {
  return (
    <>
      <HomeContext.Provider
        value={{
          cancelAuthorization,
          userInfo,
          getOrder,
          orderInfo,
          loadingOrder,
          errorOrder,
          cartData,
          addCart,
          removeCart,
          cleanCart,
          deleteOrder,
          updateOrder,
        }}
      >
        <NavBar />
        <HomeRouter />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
