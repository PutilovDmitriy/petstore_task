import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import Login from "../components/Login";
import Registr from "../components/Registr";
import Home from "../components/Home";

interface RouterProps {}

const Router: React.FC<RouterProps> = (props) => {
  return (
    <BrowserRouter basename="/petstore_task">
      <Switch>
        <Route exact path={`/login`}>
          <Login />
        </Route>
        <Route path="/registr">
          <Registr />
        </Route>
        <Route path="/">
          {/* {false ? <Home /> : <Redirect to="/login" /> */}
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
