import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../containers/Registr";
interface RouterProps {}

const Router: React.FC<RouterProps> = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="">
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route path="/registr">
            <Register />
          </Route>
          <Route path="/">
            {/* {false ? <Home /> : <Redirect to="/login" /> */}
            <Home />
          </Route>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
