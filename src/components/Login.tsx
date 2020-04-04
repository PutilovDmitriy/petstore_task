import React from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {}

const Login: React.FunctionComponent<Props> = () => {
  let history = useHistory();

  const handleSubmit = (event: any) => {
    history.push("/");
    console.log("Sended");
  };

  return (
    <div className="forma">
      <form className="forma" onSubmit={handleSubmit}>
        <input type="text" placeholder="Логин" autoFocus />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Log in</button>
      </form>
      <Link to="/registr">Зарегистрироваться</Link>
    </div>
  );
};

export default Login;
