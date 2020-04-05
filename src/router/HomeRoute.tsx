import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Profile from "../components/Profile";

interface HomeRouterProps {}

const HomeRouter: React.FC<HomeRouterProps> = (props) => {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`}>
        <h1>d</h1>
      </Route>
      <Route path={`${path}order`}>
        <h1>order</h1>
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
