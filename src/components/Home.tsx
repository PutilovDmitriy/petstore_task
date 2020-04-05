import * as React from "react";
import HomeRouter from "../router/HomeRoute";
import NavBar from "./NavBar";
import HomeContext from "../context/HomeContext";
import { UserInfo } from "../types/User";

interface HomeProps {
  cancelAuthorization: () => void;
  userInfo: UserInfo;
}

const Home: React.FunctionComponent<HomeProps> = ({
  cancelAuthorization,
  userInfo,
}) => {
  return (
    <>
      <HomeContext.Provider value={{ cancelAuthorization, userInfo }}>
        <NavBar />
        <HomeRouter />
      </HomeContext.Provider>
    </>
  );
};

export default Home;
