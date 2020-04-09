import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Profile from "../components/Profile";
import Orders from "../components/Orders";
import Pets from "../components/Pets";

interface HomeRouterProps {
  admin: boolean;
}

const HomeRouter: React.FC<HomeRouterProps> = ({ admin }) => {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`}>
        <Pets />
      </Route>
      <Route path={`${path}order`}>
        <Orders />
      </Route>
      <Route path={`${path}edit`}>
        {admin ? <h1>petedit</h1> : <Redirect to={`${path}`} />}
      </Route>
      <Route path={`${path}profile`}>
        <Profile />
      </Route>
    </>
  );
};

export default HomeRouter;
