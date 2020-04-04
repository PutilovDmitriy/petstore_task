import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
  let { url } = useRouteMatch();

  return (
    <nav>
      <div>
        <Link to={`${url}`}>Home</Link>
      </div>
      <div>
        <Link to={`${url}order`}>Order</Link>
      </div>

      <div>
        <Link to={`${url}cart`}>Cart</Link>
      </div>

      <div>
        <Link to={`${url}profile`}>Profile</Link>
      </div>
    </nav>
  );
};

export default NavBar;
