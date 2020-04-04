import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Registr from "../components/Registr";
import Home from "../components/Home";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          {!true ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path="/registr">
          <Registr />
        </Route>
        <Route path="/">{true ? <Home /> : <Redirect to="/login" />}</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
