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
  getOrder: (id: string) => void;
  orderInfo: OrderInfo | null;
  loadingOrder: boolean;
  errorOrder: any;
  cartData: Cart[];
  addCart: (payload: Cart) => void;
  removeCart: (payload: number) => void;
  cleanCart: () => void;
  deleteOrder: (id: string) => void;
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
        }}
      >
        <NavBar />
        <HomeRouter />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
