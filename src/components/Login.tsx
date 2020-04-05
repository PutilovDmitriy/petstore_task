import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
  goAuthorization: (username: string, password: string) => void;
  getUserInfo: (username: string) => void;
}

const Login: React.FunctionComponent<Props> = ({
  goAuthorization,
  getUserInfo,
}) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    goAuthorization(username, password);
    getUserInfo(username);
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className="forma">
      <form className="forma" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          autoFocus
          name="username"
          onChange={handleChange}
          value={username}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
      <Link to="/registr">Зарегистрироваться</Link>
    </div>
  );
};

export default Login;
