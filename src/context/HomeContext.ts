import { UserInfo } from "./../types/User";
import * as React from "react";

type ContextProps = {
  cancelAuthorization: () => void;
  userInfo: UserInfo;
};

const HomeContext = React.createContext<Partial<ContextProps>>({});

export default HomeContext;
