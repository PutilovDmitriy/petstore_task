import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Registr from "../components/Registr";
import Home from "../components/Home";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <HashRouter basename="/petstore_task">
      <Switch>
        <Route path="">
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route path="/registr">
            <Registr />
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
