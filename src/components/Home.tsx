import * as React from "react";
import HomeRouter from "../router/HomeRoute";
import NavBar from "./NavBar";
import HomeContext from "../context/HomeContext";
import { UserInfo } from "../types/User";
import { OrderInfo } from "../types/Order";
import { PetInfo, Status } from "types/Pet";
import Loading from "./Loading";

interface HomeProps {
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
  loadingPets: boolean;
  admin: boolean;
  startAdmin: () => void;
  stopAdmin: () => void;
  editablePet: PetInfo;
  addEditable: (payload: PetInfo) => void;
  cleanEditable: () => void;
}

const Home: React.FC<HomeProps> = ({
  cancelAuthorization,
  userInfo,
  getOrder,
  orderInfo,
  loadingOrder,
  errorOrder,
  addOrder,
  deleteOrder,
  updateOrder,
  petData,
  getPetInfo,
  loadingPets,
  admin,
  startAdmin,
  stopAdmin,
  editablePet,
  addEditable,
  cleanEditable,
}) => {
  React.useEffect(() => {
    getPetInfo && getPetInfo("available");
  }, []);
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
          deleteOrder,
          addOrder,
          updateOrder,
          petData,
          admin,
          editablePet,
          addEditable,
          cleanEditable,
        }}
      >
        <NavBar admin={admin} startAdmin={startAdmin} stopAdmin={stopAdmin} />
        {loadingPets ? <Loading /> : <HomeRouter admin={admin} />}
      </HomeContext.Provider>
    </>
  );
};

export default Home;
