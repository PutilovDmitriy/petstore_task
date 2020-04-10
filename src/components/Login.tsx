import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "./Loading";

interface Props {
  goAuthorization: (username: string, password: string) => void;
  getUserInfo: (username: string) => void;
  loadingAuth: boolean;
  loadingUser: boolean;
}

const Login: React.FunctionComponent<Props> = ({
  goAuthorization,
  getUserInfo,
  loadingAuth,
  loadingUser,
}) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState<false | true>(false);

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

  const validating = () => {
    username.trim() && password.trim() ? setValid(true) : setValid(false);
  };
  return loadingAuth || loadingUser ? (
    <Loading />
  ) : (
    <div className="forma">
      <h1>Зоомагазин</h1>
      <form className="forma" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          autoFocus
          name="username"
          onChange={handleChange}
          value={username}
          onKeyUp={validating}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={handleChange}
          value={password}
          onKeyUp={validating}
        />
        <Link to="/registr" className="linkRAL">
          Зарегистрироваться
        </Link>
        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "validButton buttonRAL" : "buttonRAL"}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
