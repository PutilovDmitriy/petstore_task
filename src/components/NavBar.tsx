import * as React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/order">Order</Link>
      </div>

      <div>
        <Link to="cart">Cart</Link>
      </div>

      <div>
        <Link to="profile">Profile</Link>
      </div>
    </nav>
  );
};

export default NavBar;
