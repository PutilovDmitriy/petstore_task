import React, { Suspense } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import Login from "../components/Login";
import { UserInfo } from "../types/User";

const Home = React.lazy(() => import("../containers/Home"));
const Register = React.lazy(() => import("../components/Registr"));

interface RouterProps {
  authorized: boolean;
  addUserInfo: (info: UserInfo) => void;
  goAuthorization: (username: string, password: string) => void;
  getUserInfo: (username: string) => void;
  loadingAuth: boolean;
  loadingUser: boolean;
}

const Router: React.FC<RouterProps> = ({
  authorized,
  goAuthorization,
  addUserInfo,
  getUserInfo,
  loadingAuth,
  loadingUser,
}) => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          {!authorized ? (
            <Login
              loadingAuth={loadingAuth}
              loadingUser={loadingUser}
              goAuthorization={goAuthorization}
              getUserInfo={getUserInfo}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/registr">
          {!authorized ? (
            <Suspense fallback={Loading}>
              <Register addUserInfo={addUserInfo} />
            </Suspense>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">
          {authorized ? (
            <Suspense fallback={Loading}>
              <Home />
            </Suspense>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
