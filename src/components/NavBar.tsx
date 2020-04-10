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
        <Link to={`${url}`}>Главная</Link>
      </div>
      <div>
        <Link to={`${url}order`}>Заказы</Link>
      </div>
      <div className="admin">
        <button className={admin ? "on" : ""} onClick={startAdmin}>
          Режим администратора
        </button>
        <button className={!admin ? "off" : ""} onClick={stopAdmin}>
          Режим покупателя
        </button>
      </div>
      <div>
        <Link to={`${url}profile`}>Профиль</Link>
      </div>
    </nav>
  );
};

export default NavBar;
