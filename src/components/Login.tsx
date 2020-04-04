import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FunctionComponent<Props> = () => {
  return (
    <div className="forma">
      <form className="forma">
        <input type="text" />
        <input type="password" />
        <button>Log in</button>
      </form>
      <Link to="/registr">Зарегистрироваться</Link>
      <Link to="/">home</Link>
    </div>
  );
};

export default Login;
