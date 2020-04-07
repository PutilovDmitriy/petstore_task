import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Profile from "../components/Profile";
import Orders from "../components/Orders";
import Pets from "../components/Pets";

interface HomeRouterProps {}

const HomeRouter: React.FC<HomeRouterProps> = (props) => {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`}>
        <Pets />
      </Route>
      <Route path={`${path}order`}>
        <Orders />
      </Route>
      <Route path={`${path}cart`}>
        <h1>cart</h1>
      </Route>
      <Route path={`${path}profile`}>
        <Profile />
      </Route>
    </>
  );
};

export default HomeRouter;
