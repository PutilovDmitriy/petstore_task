import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Home from "../containers/Home";
import Register from "../components/Registr";
import { UserInfo } from "../types/User";

interface RouterProps {
  userInfo: UserInfo;
  authorized: boolean;
  addUserInfo: (info: UserInfo) => void;
  goAuthorization: (username: string, password: string) => void;
  getUserInfo: (username: string) => void;
}

const Router: React.FC<RouterProps> = ({
  authorized,
  goAuthorization,
  addUserInfo,
  getUserInfo,
}) => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          {!authorized ? (
            <Login
              goAuthorization={goAuthorization}
              getUserInfo={getUserInfo}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/registr">
          {!authorized ? (
            <Register addUserInfo={addUserInfo} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">{true ? <Home /> : <Redirect to="/login" />}</Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
