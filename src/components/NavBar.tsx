import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";

interface NavBarProps {
  admin: boolean;
  startAdmin: () => void;
  stopAdmin: () => void;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({
  admin,
  startAdmin,
  stopAdmin,
}) => {
  let { url } = useRouteMatch();

  return (
    <nav>
      <div>
        <Link to={`${url}`}>Home</Link>
      </div>
      <div>
        <Link to={`${url}order`}>Order</Link>
      </div>
      <div className="admin">
        <button className={admin ? "on" : ""} onClick={startAdmin}>
          on Admin
        </button>
        <button className={!admin ? "off" : ""} onClick={stopAdmin}>
          off Admin
        </button>
      </div>
      <div>
        <Link to={`${url}profile`}>Profile</Link>
      </div>
    </nav>
  );
};

export default NavBar;
