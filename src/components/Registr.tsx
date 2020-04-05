import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { objUserInfo } from "../constants/creaters";
import { UserInfo } from "types/User";

interface RegisterProps {
  addUserInfo: (info: UserInfo) => void;
}

const Register: React.FunctionComponent<RegisterProps> = ({ addUserInfo }) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setValid] = useState(false);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password1":
        setPassword1(event.target.value);
        break;
      case "password2":
        setPassword2(event.target.value);
        break;
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    addUserInfo(
      objUserInfo(0, username, firstName, lastName, email, password1, phone, 0)
    );
    event.preventDefault();
    history.push("/login");
  };

  return (
    <div className="forma">
      <form className="forma" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={username}
        ></input>
        <input
          type="password"
          placeholder="Пароль"
          name="password1"
          onChange={handleChange}
          value={password1}
        ></input>
        <input
          type="password"
          placeholder="Повторите пароль"
          name="password2"
          onChange={handleChange}
          value={password2}
        ></input>
        <input
          type="text"
          placeholder="Имя"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        ></input>
        <input
          type="text"
          placeholder="Фамилия"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
        ></input>
        <input
          type="text"
          placeholder="Телефон"
          name="phone"
          onChange={handleChange}
          value={phone}
        ></input>
        <button type="submit" disabled={!isValid}>
          Регистрация
        </button>
      </form>
      <Link to="/login">Войти</Link>
    </div>
  );
};

export default Register;
